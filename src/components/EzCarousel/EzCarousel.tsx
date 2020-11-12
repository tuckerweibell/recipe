/** @jsx jsx */
import {Interpolation, jsx} from '@emotion/core';
import React, {useEffect, useState} from 'react';
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
  bottom: 'var(--recipe-carousel-item-offset)',
  width: 'var(--recipe-carousel-button-width)',
  ':hover': {
    background: 'var(--recipe-carousel-button-background-hover)',
  },
  transition: 'opacity 0.3s',
};

const nextStyle: Interpolation = {...nextPrevStyle, right: 0};
const prevStyle: Interpolation = {...nextPrevStyle, left: 0};
const hiddenStyle: Interpolation = {opacity: 0};

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

// ideally, we'd be able to set a CSS var for this, but that would break IE11 (as the polyfill can't handle it)
const calcButtonWidth = gap => {
  return gap
    ? `(var(--recipe-carousel-button-width) + var(--recipe-carousel-item-double-margin))`
    : 'var(--recipe-carousel-button-width)';
};

/**
 * Provisions enough space for all the slides, including optional space between slides and the optional next/previous slide preview
 */
const calcSlideWidthStyles = options => {
  const {n, gap = false, peek = false} = options;

  let slideWidth = `${100 / n}%`;

  // subtract the total margin (left & right) between items (i.e `n-1`), spread over each item (i.e. `/ n`)
  if (gap)
    slideWidth = `${slideWidth} - (var(--recipe-carousel-item-double-margin) * ${n - 1} / ${n})`;

  // when peek is enabled, we need to provision space for the next/prev button (i.e. `* 2` for two buttons)
  // so we divide the button width + margin between each item
  if (peek) slideWidth = `${slideWidth} - (${calcButtonWidth(gap)} * 2 / ${n})`;

  return {
    flexBasis: `calc(${slideWidth})`,
  };
};

const slidesPerPageStyles = options => {
  const {slidesPerPage = 1} = options;

  // when centering on the pseudo element, we need to offset for the gap (if one is applied)
  const right = options.gap ? 'calc(var(--recipe-carousel-item-margin) * -1)' : 0;

  const style = n =>
    cx(
      {
        position: 'relative',
        flexShrink: 0,

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

function debounce(func, ms) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func();
    }, ms);
  };
}

function useCurrentPage(scrollerRef: React.MutableRefObject<HTMLUListElement>) {
  const [data, setData] = useState({
    index: 0,
    isFirst: true,
    isLast: false,
  });

  useEffect(() => {
    const scroller = scrollerRef.current;

    const setCurrentPage = debounce(() => {
      const {scrollLeft, scrollWidth, offsetWidth} = scroller;
      const numberOfPages = Math.ceil(scrollWidth / offsetWidth);
      const index = Math.round((scrollLeft / scrollWidth) * numberOfPages);
      setData({index, isFirst: index === 0, isLast: index === numberOfPages - 1});
    }, 50);

    scroller.addEventListener('scroll', setCurrentPage);

    return () => {
      scroller.removeEventListener('scroll', setCurrentPage);
    };
  }, [scrollerRef]);

  return data;
}

/**
 * Carousels allow users to browse through a set of items,
 * to find items that may be of interest to them.
 */
const EzCarousel = ({children, ...options}) => {
  const id = useUniqueId();
  const scroller = React.useRef<HTMLUListElement>();
  const {isFirst, isLast} = useCurrentPage(scroller);
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
          paddingBottom: 'var(--recipe-carousel-item-offset)',
          // hide scroll bar
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '::-webkit-scrollbar': {display: 'none'},
        }}
        ref={scroller}
      >
        {React.Children.map(children, (child, index) => (
          <React.Fragment key={child.key || index}>
            <li
              css={cx(
                options.peek && {
                  ':first-of-type': {marginLeft: 0},
                  ':last-of-type': {marginRight: 0},
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
          css={cx(prevStyle, isFirst && hiddenStyle)}
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
          css={cx(nextStyle, isLast && hiddenStyle)}
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
