import {Interpolation} from '@emotion/core';
import {responsive} from '../../styles';

const cx = (...args): Interpolation => Object.assign({}, ...args);

const pseudo: Interpolation = {content: "''", position: 'absolute'};
const hiddenStyle: Interpolation = {opacity: 0};
const nextPrevStyle: Interpolation = {
  border: 'none',
  background: 'var(--recipe-carousel-button-background)',
  color: 'var(--recipe-carousel-button-color)',
  position: 'absolute',
  top: 0,
  bottom: 'var(--recipe-carousel-item-offset)',
  width: 'var(--recipe-carousel-button-width)',
  ':hover': {
    background: 'var(--recipe-carousel-button-background-hover)',
  },
  transition: 'opacity 0.3s',
};

export const nextStyle = (isFirst): Interpolation =>
  cx({...nextPrevStyle, right: 0}, isFirst && hiddenStyle);
export const prevStyle = (isLast): Interpolation =>
  cx({...nextPrevStyle, left: 0}, isLast && hiddenStyle);

/**
 * Provisions enough space for all the slides, including optional space between slides and the optional next/previous slide preview
 */
const calcSlideWidthStyles = options => {
  const {n, gap = false, peek = false, count} = options;

  let slideWidth = `${100 / n}%`;

  // subtract the total margin (left & right) between items (i.e `n-1`), spread over each item (i.e. `/ n`)
  if (gap)
    slideWidth = `${slideWidth} - (var(--recipe-carousel-item-double-margin) * ${n - 1} / ${n})`;

  let buttonWidth = 'var(--recipe-carousel-button-width)';

  if (gap) buttonWidth = `(${buttonWidth} + var(--recipe-carousel-item-double-margin))`;

  // when peek is enabled, we need to provision space for the next/prev button (i.e. `* 2` for two buttons)
  // so we divide the button width + margin between each item
  if (peek) slideWidth = `${slideWidth} - (${buttonWidth} * 2 / ${n})`;

  // grow the items on the first and last page to account for only having a single button
  const firstAndLast = {flexBasis: `calc(${slideWidth} + (${buttonWidth} / ${n}))`};

  // for the last page, we need to select only the items on the page (vs the slidesPerPage size)
  const lastPageCount = count % n || n;
  const padLastPageItems = n - lastPageCount > 0 && count / n > 2;

  return cx(
    {flexBasis: `calc(${slideWidth})`},
    peek &&
      cx(
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
      )
  );
};

const mid = n => `${n}n - ${Math.floor(n / 2)}`;

const slidesPerPageStyles = options => {
  const {slidesPerPage = 1} = options;

  // when centering on the pseudo element, we need to offset for the gap (if one is applied)
  const right = options.gap ? 'calc(var(--recipe-carousel-item-margin) * -1)' : 0;

  const style = n =>
    cx(
      {
        position: 'relative',
        flexShrink: 0,
        // ignore the intrinsic width of the carousel item content, so flex-basis is king
        width: 0,

        ...(n % 2 === 0
          ? {[`:nth-of-type(${mid(n)}):after`]: {...pseudo, right, scrollSnapAlign: 'center'}}
          : {[`:nth-of-type(${mid(n)})`]: {scrollSnapAlign: 'center'}}),

        // for lists that aren't evenly divided, ensure the last item snaps to the end of the list
        ':last-of-type': {scrollSnapAlign: 'start'},
      },
      calcSlideWidthStyles({n, ...options})
    );

  if (typeof slidesPerPage === 'number') return style(slidesPerPage);

  const breakpoints = Object.values(slidesPerPage).reduce((res: any, value: number, i, arr) => {
    if (i === 0) return {[value]: style(value)};

    const n = arr[i - i] as number;

    // restore the initial value of snap-points to override the previous breakpoint.
    const reset =
      n % 2 === 0
        ? {[`:nth-of-type(${mid(n)}):after`]: {content: 'none'}}
        : {[`:nth-of-type(${mid(n)})`]: {scrollSnapAlign: 'initial'}};

    return {...res, [value]: Object.assign(reset, style(value))};
  }, {});

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
  margin: 0,
  padding: 0,
  paddingBottom: 'var(--recipe-carousel-item-offset)',
  // hide scroll bar
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '::-webkit-scrollbar': {display: 'none'},
});

export const listItemStyle = (options): Interpolation =>
  cx(
    options.peek && {
      ':first-of-type': {marginLeft: 0},
      ':last-of-type': {marginRight: 0},
    },
    options.gap && {margin: '0 var(--recipe-carousel-item-margin)'}
  );
