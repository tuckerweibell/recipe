import {Interpolation} from '@emotion/core';
import {responsive} from '../../styles';

const cx = (...args): Interpolation => Object.assign({}, ...args);

const pseudo: Interpolation = {content: "''", position: 'absolute'};
const hiddenStyle: Interpolation = {opacity: 0, visibility: 'hidden'};
const nextPrevStyle: Interpolation = {
  border: 'none',
  background: 'var(--recipe-carousel-button-background)',
  color: 'var(--recipe-carousel-button-color)',
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: 'var(--recipe-carousel-button-width)',
  ':hover': {
    background: 'var(--recipe-carousel-button-background-hover)',
  },
  transition: 'opacity 0.3s, visibility 0.3s',
};

export const nextStyle = (isFirst): Interpolation =>
  cx({...nextPrevStyle, right: 0}, isFirst && hiddenStyle);
export const prevStyle = (isLast): Interpolation =>
  cx({...nextPrevStyle, left: 0}, isLast && hiddenStyle);

const showPeek = ({count, n, peek}: {count: number; n: number; peek: boolean}): boolean =>
  peek && count > n;

const getButtonWidthCalc = ({gap}) =>
  gap
    ? `(var(--recipe-carousel-button-width) + var(--recipe-carousel-item-double-margin))`
    : 'var(--recipe-carousel-button-width)';

const getSlideWidthCalc = ({gap, peek, n, count}) => {
  let slideWidth = `${100 / n}%`;

  // subtract the total margin (left & right) between items (i.e `n-1`), spread over each item (i.e. `/ n`)
  if (gap)
    slideWidth = `${slideWidth} - (var(--recipe-carousel-item-double-margin) * ${n - 1} / ${n})`;

  // when peek is enabled, we need to provision space for the next/prev button (i.e. `* 2` for two buttons)
  // so we divide the button width + margin between each item
  if (showPeek({n, peek, count}))
    slideWidth = `${slideWidth} - (${getButtonWidthCalc({gap})} * 2 / ${n})`;

  return slideWidth;
};

const setFlexBasis = options => ({
  flexBasis: `calc(${getSlideWidthCalc(options)})`,
});

/**
 * Provisions enough space for all the slides alongside the next/previous slide preview
 */
const resizeForPeek = options => {
  const {n, next, count, reset} = options;
  const slideWidth = getSlideWidthCalc(options);
  const buttonWidth = getButtonWidthCalc(options);

  if (!showPeek(options)) return false;

  // grow the items on the first and last page to account for only having a single button
  const firstAndLast = {
    flexBasis: reset
      ? `calc(${getSlideWidthCalc({...options, n: next})})`
      : `calc(${slideWidth} + (${buttonWidth} / ${n}))`,
  };

  // for the last page, we need to select only the items on the page (vs the slidesPerPage size)
  const lastPageCount = count % n || n;
  const padLastPageItems = n - lastPageCount > 0 && count / n > 2;

  return cx(
    {
      [`:nth-of-type(-n+${n})`]: firstAndLast,
      [`:nth-last-of-type(-n+${lastPageCount})`]: firstAndLast,
    },
    // if last page doesn't contain n items, we need to pad the remaining space
    // to ensure that space provisioned next/prev buttons is still balanced
    // Note: this only applies if there are more than two pages, since the items on
    // the first and last page are evenly sized (it's only the "middle" pages of the
    // carousel that have smaller items).
    // Unfortunately, scroll containers don't like having right-margin on the last item
    // see: https://github.com/w3c/csswg-drafts/issues/129#issuecomment-501855090
    // so instead, we'll pad it out with a pseudo element
    {
      ':last-of-type:before': {
        ...pseudo,
        content: padLastPageItems ? pseudo.content : 'none',
        left: '100%',
        // allocate the remaining width
        width: `calc((${buttonWidth} / ${n}) * ${n - lastPageCount})`,
        height: '1px',
      },
    }
  );
};

const mid = n => `${n}n - ${Math.floor(n / 2)}`;

const snapPoints = ({n, gap, reset}: {n: number; gap: boolean; reset?: boolean}): Interpolation => {
  // when centering on the pseudo element, we need to offset for the gap between items (if one is applied)
  const right = gap ? 'calc(var(--recipe-carousel-item-margin) * -1)' : 0;
  const usePseudo = n % 2 === 0;

  return {
    // target the mid-point of each page of carousel items, setting the scrollSnapAlign to center (or resetting to initial)
    [`:nth-of-type(${mid(n)})${usePseudo ? ':after' : ''}`]: {
      ...(usePseudo ? {right, position: 'absolute', content: reset ? 'none' : "''"} : {}),
      scrollSnapAlign: reset ? 'initial' : 'center',
    },
    // for lists that aren't evenly divided, ensure the last item snaps to the end of the list
    ':last-of-type': {scrollSnapAlign: 'start'},
  };
};

const slidesPerPageStyles = options => {
  const {slidesPerPage = 1, gap} = options;

  const style = (n: number, prev?: number) =>
    cx(
      setFlexBasis({n, ...options}),
      // reset the snap-points from the previous breakpoint.
      prev && snapPoints({n: prev, gap, reset: true}),
      snapPoints({n, gap}),
      // reset the slide resizing from the previous breakpoint.
      prev && resizeForPeek({n: prev, next: n, ...options, reset: true}),
      resizeForPeek({n, ...options})
    );

  if (typeof slidesPerPage === 'number') return style(slidesPerPage);

  const breakpoints = Object.values(slidesPerPage).reduce(
    (res: object, n: number, i, arr: number[]) => {
      return {...res, [n]: style(n, i > 0 ? arr[i - i] : undefined)};
    },
    {}
  );

  return responsive('slidesPerPage', breakpoints)({slidesPerPage});
};

export const listStyle = (options): Interpolation => ({
  display: 'flex',
  // parent is a flex container (to prevent margin collapse, so make sure we fill the available space)
  flexGrow: 1,
  overflowX: 'scroll',
  scrollSnapType: 'x mandatory',
  '> *': slidesPerPageStyles(options),
  // reset list styles
  listStyle: 'none',
  margin: 'calc(var(--recipe-carousel-item-offset, 0) * -1) 0',
  padding: 'var(--recipe-carousel-item-offset, 0) 0',
  // hide scroll bar
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '::-webkit-scrollbar': {display: 'none'},
  outline: 'none',
});

export const listItemStyle = (options): Interpolation =>
  cx(
    // Note: width=0 to ignore the intrinsic width of the carousel item content, so flex-basis takes precedence
    {position: 'relative', flexShrink: 0, width: 0},
    options.peek && {
      ':first-of-type': {marginLeft: 0},
      ':last-of-type': {marginRight: 0},
    },
    options.gap && {margin: '0 var(--recipe-carousel-item-margin)'}
  );
