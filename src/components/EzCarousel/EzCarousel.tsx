import React, {useEffect, useRef, useState, HTMLAttributes} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzCarousel.theme.config';
import {useUniqueId} from '../../utils/hooks';
import {clsx, responsiveProps} from '../../utils';
import {slidesPerPageStyles} from './EzCarousel.styles';
import {ResponsiveValue, VariantProps} from '../../utils/responsiveProps';

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

const nextPrevClick =
  (pageOffset: number, scrollerRef: React.MutableRefObject<HTMLUListElement>) =>
  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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

function useCurrentPage(scrollerRef: React.MutableRefObject<HTMLUListElement>, onPageChange) {
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
      if (index !== data.index) onPageChange?.({previous: data.index, current: index});
    };

    const setCurrentPage = debounce(measure, 50);

    // initially measure the container to see if the first/last button needs to be hidden.
    // This has to happen AFTER the first paint, so use requestAnimationFrame to request a callback
    requestAnimationFrameId.current = requestAnimationFrame(measure);

    scroller.addEventListener('scroll', setCurrentPage);
    scroller.ownerDocument.defaultView.addEventListener('resize', setCurrentPage);

    return () => {
      scroller.removeEventListener('scroll', setCurrentPage);
      scroller.ownerDocument.defaultView.removeEventListener('resize', setCurrentPage);
      cancelAnimationFrame(requestAnimationFrameId.current);
    };
  }, [scrollerRef, onPageChange, data.index]);

  return data;
}

const containment = theme.css({
  // pagination buttons are inset using absolute positioning
  position: 'relative',
  // prevent margin collapse on children
  display: 'flex',
});

const paginationButton = theme.css({
  position: 'absolute',
  top: 0,
  bottom: 0,
  border: 'none',
  backgroundColor: '$carousel-button-bg',
  color: '$carousel-button-text',
  width: '$carousel-button-width',
  '&:hover': {
    background: '$carousel-button-bg-hover',
  },
  transition: 'opacity 0.3s, visibility 0.3s',
  variants: {
    position: {
      before: {left: 0},
      after: {right: 0},
    },
    hidden: {
      true: {
        opacity: 0,
        visibility: 'hidden',
        pointerEvents: 'none',
      },
    },
  },
});

const listStyle = theme.css({
  // flex to prevent margin collapse
  display: 'flex',
  flexGrow: 1,
  overflowX: 'scroll',
  scrollSnapType: 'x mandatory',
  listStyle: 'none',
  margin: '-$carousel-item-offset 0',
  padding: '$carousel-item-offset 0',
  // hide scroll bar
  scrollbarWidth: 'none',
  '-ms-overflow-style': 'none',
  '&::-webkit-scrollbar': {display: 'none'},
  outline: 'none',
  // '> *': slidesPerPageStyles(options),
});

const listItemStyle = theme.css({
  position: 'relative',
  flexShrink: 0,
  // ignore the intrinsic width of the carousel item content, so flex-basis takes precedence
  width: 0,
  variants: {
    peek: {
      true: {
        '&:first-of-type': {marginLeft: 0},
        '&:last-of-type': {marginRight: 0},
      },
    },
    gap: {
      true: {margin: '0 $carousel-item-gap'},
    },
  },
});

const dynamicStyles = theme.css({});

type SlidesPerPage = {
  slidesPerPage?: ResponsiveValue<number>;
};

type PageIndices = {
  previous: number;
  current: number;
};

type Props = VariantProps<typeof listItemStyle> &
  SlidesPerPage &
  Omit<HTMLAttributes<HTMLElement>, 'as' | 'css'> & {
    onPageChange?: (indices: PageIndices) => void;
  };

/**
 * Carousels allow users to browse through a set of items,
 * to find items that may be of interest to them.
 */
const EzCarousel: React.FC<Props> = ({children, gap, peek, onPageChange, ...initProps}) => {
  const {slidesPerPage} = responsiveProps(initProps as any, 'slidesPerPage');
  const id = useUniqueId();
  const scroller = React.useRef<HTMLUListElement>();
  const {isFirst, isLast} = useCurrentPage(scroller, onPageChange);

  return (
    <Style ruleset={theme}>
      <section className={containment()}>
        <ul
          id={id}
          aria-roledescription="carousel"
          // ensure that scrollable region has keyboard access
          // see: https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
          className={listStyle()}
          ref={scroller}
        >
          {React.Children.map(children, (child, index) => (
            <li
              key={typeof child === 'object' && 'key' in child ? child.key : index}
              className={clsx(
                listItemStyle({gap, peek}),
                dynamicStyles({
                  css: slidesPerPageStyles({
                    gap,
                    peek,
                    slidesPerPage,
                    count: React.Children.count(children),
                  }),
                })
              )}
            >
              {child}
            </li>
          ))}
        </ul>
        <div>
          <button
            type="button"
            tabIndex={-1}
            aria-controls={id}
            aria-label="Previous Page"
            className={paginationButton({position: 'before', hidden: isFirst})}
            onClick={nextPrevClick(-1, scroller)}
          >
            <svg {...svgProps}>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            tabIndex={-1}
            aria-controls={id}
            aria-label="Next Page"
            className={paginationButton({position: 'after', hidden: isLast})}
            onClick={nextPrevClick(1, scroller)}
          >
            <svg {...svgProps}>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </section>
    </Style>
  );
};

/**
 * @component
 */
export default EzCarousel;
