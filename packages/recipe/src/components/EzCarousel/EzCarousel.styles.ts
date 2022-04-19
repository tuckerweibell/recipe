type Interpolation = Record<string, any>;

const cx = (...args): Interpolation => Object.assign({}, ...args);

const pseudo: Interpolation = {content: "''", position: 'absolute'};

const showPeek = ({count, n, peek}: {count: number; n: number; peek: boolean}): boolean =>
  peek && count > n;

const getButtonWidthCalc = ({gap}) =>
  gap ? `($carousel-button-width + $space$carousel-item-gap-double)` : '$carousel-button-width';

const getSlideWidthCalc = ({gap, peek, n, count}) => {
  let slideWidth = `${100 / n}%`;

  // subtract the total margin (left & right) between items (i.e `n-1`), spread over each item (i.e. `/ n`)
  if (gap) slideWidth = `${slideWidth} - ($space$carousel-item-gap-double * ${n - 1} / ${n})`;

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
  const {n, count} = options;
  const slideWidth = getSlideWidthCalc(options);
  const buttonWidth = getButtonWidthCalc(options);

  if (!showPeek(options)) return false;

  // grow the items on the first and last page to account for only having a single button
  const firstAndLast = {
    flexBasis: `calc(${slideWidth} + (${buttonWidth} / ${n}))`,
  };

  // for the last page, we need to select only the items on the page (vs the slidesPerPage size)
  const lastPageCount = count % n || n;
  const padLastPageItems = n - lastPageCount > 0 && count / n > 2;

  return cx(
    {
      [`&:nth-of-type(-n+${n})`]: firstAndLast,
      [`&:nth-last-of-type(-n+${lastPageCount})`]: firstAndLast,
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
      '&:last-of-type:before': {
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

const snapPoints = ({n, gap}: {n: number; gap: boolean}): Interpolation => {
  // when centering on the pseudo element, we need to offset for the gap between items (if one is applied)
  const right = gap ? '-$space$carousel-item-gap' : 0;
  const usePseudo = n % 2 === 0;

  return {
    // target the mid-point of each page of carousel items, setting the scrollSnapAlign to center
    [`&:nth-of-type(${mid(n)})${usePseudo ? ':after' : ''}`]: {
      ...(usePseudo ? {right, position: 'absolute', content: "''"} : {}),
      scrollSnapAlign: 'center',
    },
    // for lists that aren't evenly divided, ensure the last item snaps to the end of the list
    '&:last-of-type': {scrollSnapAlign: 'start'},
  };
};

export const slidesPerPageStyles = options => {
  const {slidesPerPage = 1, gap} = options;

  const style = (n: number) =>
    cx(setFlexBasis({n, ...options}), snapPoints({n, gap}), resizeForPeek({n, ...options}));

  if (typeof slidesPerPage === 'number') return style(slidesPerPage);

  return Object.keys(slidesPerPage).reduce((res: Record<string, any>, bp: string) => {
    const n = slidesPerPage[bp];
    const styles = style(n);

    if (bp === 'base') return {...res, ...styles};

    return {
      ...res,
      [`@${bp}`]: styles,
    };
  }, {});
};
