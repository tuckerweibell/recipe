/** @jsx jsx */
import {Interpolation, jsx} from '@emotion/core';
import React from 'react';
import {useUniqueId} from '../../utils/hooks';
import {responsive} from '../../styles';
import './vars.css';

const cx = (...args): Interpolation => Object.assign({}, ...args);

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
};

const nextStyle: Interpolation = {...nextPrevStyle, right: 0};
const prevStyle: Interpolation = {...nextPrevStyle, left: 0};

const svgProps: React.ComponentProps<'svg'> = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '42',
  height: '42',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.5',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const nextPrevClick = (
  pageOffset: number,
  scrollerRef: React.MutableRefObject<HTMLUListElement>
) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.preventDefault();
  e.stopPropagation();
  const {scrollLeft, scrollWidth, offsetWidth} = scrollerRef.current;
  const numberOfPages = Math.round(scrollWidth / offsetWidth);
  const currentPageIndex = Math.round((scrollLeft / scrollWidth) * numberOfPages);
  const nextPageIndex = currentPageIndex + pageOffset;

  scrollerRef.current.scrollTo({
    left: Math.floor(scrollWidth * (nextPageIndex / numberOfPages)),
    behavior: 'smooth',
  });
};

const pseudo: Interpolation = {content: "''", position: 'absolute'};

const mid = n => `${n}n - ${Math.floor(n / 2)}`;

const calcMargin = double =>
  double ? 'var(--recipe-carousel-item-double-margin)' : 'var(--recipe-carousel-item-margin)';

// ideally, we'd be able to set a CSS var for this, but that would break IE11 (as the polyfill can't handle it)
const calcButtonWidth = (gap, outer = false) => {
  // for the first and last items, we have to double the margin to account for left/right margin between on sibling items
  const margin = calcMargin(outer);
  return gap
    ? `calc(var(--recipe-carousel-button-width) + ${margin})`
    : 'var(--recipe-carousel-button-width)';
};

/**
 * Provisions enough space for all the slides, including optional space between slides and the optional next/previous slide preview
 */
const calcSlideWidth = options => {
  const {n, gap = false, peek = false} = options;

  let slideWidth = `${100 / n}%`;

  // note: when peek = true, the carousel has outer margin (between the button and the slides) that needs to be accounted for
  slideWidth = gap ? `calc(${slideWidth} - ${calcMargin(peek)})` : slideWidth;

  slideWidth = peek ? `calc(${slideWidth} - ${calcButtonWidth(gap)} / ${n / 2})` : slideWidth;

  return slideWidth;
};

const slidesPerPageStyles = options => {
  const {slidesPerPage = 1} = options;

  // when centering on the pseudo element, we need to offset for the gap (if one is applied)
  const right = options.gap ? 'calc(var(--recipe-carousel-item-margin) * -1)' : 0;

  const style = n => ({
    position: 'relative',
    flexShrink: 0,
    flexBasis: calcSlideWidth({n, ...options}),

    ...(n % 2 === 0
      ? {[`:nth-of-type(${mid(n)}):after`]: {...pseudo, right, scrollSnapAlign: 'center'}}
      : {[`:nth-of-type(${mid(n)})`]: {scrollSnapAlign: 'center'}}),

    // for lists that aren't evenly divided, ensure the last item snaps to the end of the list
    ':last-of-type': {scrollSnapAlign: 'start'},
  });

  if (typeof slidesPerPage === 'number') return style(slidesPerPage);

  const breakpoints = Object.values(slidesPerPage).reduce((res: any, value: number, i, arr) => {
    if (i === 0) return {[value]: style(value)};

    const n = arr[i - i] as number;

    // restore the initial value of snap-points to override the previous breakpoint.
    const reset =
      n % 2 === 0
        ? {[`:nth-of-type(${mid(n)}):after`]: {content: 'none'}}
        : {[`:nth-of-type(${mid(n)})`]: {scrollSnapAlign: 'initial'}};

    return {...res, [value]: {...reset, ...style(value)}};
  }, {});

  return responsive('slidesPerPage', breakpoints)({slidesPerPage});
};

/**
 * Carousels allow users to browse through a set of items,
 * to find items that may be of interest to them.
 */
const EzCarousel = ({children, ...options}) => {
  const id = useUniqueId();
  const scroller = React.useRef<HTMLUListElement>();
  return (
    <section aria-roledescription="carousel" css={{position: 'relative'}}>
      <ul
        id={id}
        // assistive technology users are informed about changes to the region
        // at the next available opportunity.
        // This causes screen readers to automatically announce the content of
        // slides when the next and previous slide buttons are activated.
        aria-live="polite"
        css={{
          display: 'flex',
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
          '> *': slidesPerPageStyles(options),
          // reset list styles
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
        ref={scroller}
      >
        {React.Children.map(children, (child, index) => (
          <React.Fragment key={child.key || index}>
            <li
              css={cx(
                options.peek && {
                  ':first-of-type': {
                    marginLeft: calcButtonWidth(options.gap, true),
                  },
                  ':last-of-type': {
                    marginRight: calcButtonWidth(options.gap, true),
                  },
                  // Padding/margin when applied inside a scroll container gets
                  // absorbed (but only on the right side). Apply a
                  // pseudo element as a workaround - see: https://github.com/w3c/csswg-drafts/issues/129#issuecomment-501855090
                  position: 'relative',
                  '&:before': {
                    ...pseudo,
                    left: '100%',
                    width: calcButtonWidth(options.gap, true),
                    height: '1px',
                  },
                },
                options.gap && {margin: '0 var(--recipe-carousel-item-margin)'}
              )}
            >
              {child}
            </li>
          </React.Fragment>
        ))}
      </ul>
      <div>
        <button
          type="button"
          aria-controls={id}
          aria-label="Previous Page"
          css={prevStyle}
          onClick={nextPrevClick(-1, scroller)}
        >
          <svg {...svgProps}>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          aria-controls={id}
          aria-label="Next Page"
          css={nextStyle}
          onClick={nextPrevClick(1, scroller)}
        >
          <svg {...svgProps}>
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

/**
 * @component
 */
export default EzCarousel;
