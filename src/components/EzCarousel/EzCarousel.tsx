/** @jsx jsx */
import {jsx} from '@emotion/core';
import React, {useEffect, useRef, useState} from 'react';
import {useUniqueId} from '../../utils/hooks';
import {nextStyle, prevStyle, listStyle, listItemStyle} from './EzCarousel.styles';
import './vars.css';

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

const measureCarouselPosition = scroller => {
  const count = scroller.children.length;
  const {scrollLeft, scrollWidth, offsetWidth} = scroller;
  // NOTE: we measure the number of items per page, rather than figuring it out from props
  // as slidesPerPage can vary based on a media query.
  // It's possible to use `window.matchMedia` but this is WAY simpler.
  const itemWidths = Array.from(scroller.children).reduce(
    (res: number, child: HTMLElement) => res + child.clientWidth,
    0
  ) as number;
  const averageItemWidth = itemWidths / count;
  const itemsPerPage = Math.floor(offsetWidth / averageItemWidth);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const index =
    scrollWidth - offsetWidth === scrollLeft
      ? numberOfPages - 1
      : Math.round((scrollLeft / scrollWidth) * numberOfPages);
  return {index, numberOfPages, isAwaitingPaint: itemWidths === 0};
};

const nextPrevClick = (
  pageOffset: number,
  scrollerRef: React.MutableRefObject<HTMLUListElement>
) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.preventDefault();
  e.stopPropagation();
  const {current: scroller} = scrollerRef;
  const {scrollWidth} = scroller;
  const {index, numberOfPages} = measureCarouselPosition(scroller);
  scroller.scrollTo({
    left: Math.floor(scrollWidth * ((index + pageOffset) / numberOfPages)),
    behavior: 'smooth',
  });
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
  const [data, setData] = useState({index: 0, isFirst: true, isLast: true});
  const requestAnimationFrameId = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    const measure = () => {
      const {index, numberOfPages, isAwaitingPaint} = measureCarouselPosition(scroller);

      if (isAwaitingPaint) {
        requestAnimationFrameId.current = requestAnimationFrame(measure);
        return;
      }

      setData({index, isFirst: index === 0, isLast: index === numberOfPages - 1});
    };

    const setCurrentPage = debounce(measure, 50);

    // initially measure the container to see if the first/last button needs to be hidden.
    // This has to happen AFTER the first paint, so use requestAnimationFrame to request a callback
    requestAnimationFrameId.current = requestAnimationFrame(measure);

    scroller.addEventListener('scroll', setCurrentPage);

    return () => {
      scroller.removeEventListener('scroll', setCurrentPage);
      cancelAnimationFrame(requestAnimationFrameId.current);
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
    <section
      aria-roledescription="carousel"
      // display flex to prevent margin collapse, position relative to contain pagination buttons
      css={{position: 'relative', display: 'flex'}}
    >
      <ul
        id={id}
        // assistive technology users are informed about changes to the region
        // at the next available opportunity.
        // This causes screen readers to automatically announce the content of
        // slides when the next and previous slide buttons are activated.
        aria-live="polite"
        css={listStyle({...options, count: React.Children.count(children)})}
        ref={scroller}
      >
        {React.Children.map(children, (child, index) => (
          <li key={child.key || index} css={listItemStyle(options)}>
            {child}
          </li>
        ))}
      </ul>
      <div>
        <button
          type="button"
          aria-controls={id}
          aria-label="Previous Page"
          css={prevStyle(isFirst)}
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
          css={nextStyle(isLast)}
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
