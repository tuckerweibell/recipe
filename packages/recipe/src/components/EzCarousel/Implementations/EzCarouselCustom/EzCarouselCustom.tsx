import React, {Children, forwardRef, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {Box, Stack} from '@mui/material';
import useResizeObserver from '@react-hook/resize-observer';
import {EzCarouselProps, Ref} from '../../EzCarousel.types';
import EzCarouselNavButton from './EzCarouselNavButton';
import EzHeading from '../../../EzHeading';
import EzButton from '../../../EzButton';

const CARD_SPACING = 12;

const EzCarouselCustom = forwardRef<Ref, EzCarouselProps>(
  ({children, title, description, link, onPageChange}, ref) => {
    const [containerSize, setContainerSize] = useState(0);
    const [page, setPage] = useState(1);
    const [showMobile, setShowMobile] = useState(false);
    const containerRef = useRef(null);

    const items = Children.toArray(children);
    const numCardsPerPage = containerSize > 1024 ? 4 : containerSize > 650 ? 3 : 2;
    const carouselPadding = CARD_SPACING * (numCardsPerPage - 1);
    const desktopCardWidth =
      containerSize === 0
        ? '240px'
        : `${Math.ceil((containerSize - carouselPadding) / numCardsPerPage)}px`;
    const mobileCardWidth = containerSize > 430 ? '280px' : '240px';
    const hasMultiplePages = numCardsPerPage < items.length;
    const numPages = Math.ceil(items.length / numCardsPerPage);
    const shouldFitContent = page === numPages && items.length % numCardsPerPage !== 0;

    // monitors the window resize and sets the showMobile state appropriately
    useEffect(() => {
      const handleResize = () => setShowMobile(window.innerWidth < 768);
      window.addEventListener('resize', handleResize, {passive: true});
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    // monitors the container resize and sets the containerSize state appropriately
    useResizeObserver(containerRef, entry => setContainerSize(entry.contentRect.width));

    // sets the initial state of containerSize
    useLayoutEffect(() => {
      setContainerSize(containerRef.current.getBoundingClientRect().width);
    }, [containerRef]);

    const handlePageChange = (type: 'prev' | 'next') => {
      const newPage = type === 'prev' ? page - 1 : page + 1;
      setPage(newPage);
      if (onPageChange) onPageChange(page, newPage);
    };

    return (
      <Box ref={ref}>
        <Stack ref={containerRef}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
            mx={showMobile ? `${CARD_SPACING}px` : 0}
            spacing={`${CARD_SPACING}px`}
          >
            <EzHeading size="3">{title}</EzHeading>

            <Stack direction="row" spacing={`${CARD_SPACING}px`}>
              {link && (
                <EzButton variant="outlined" color="info" size="small">
                  {link}
                </EzButton>
              )}

              {hasMultiplePages && !showMobile && (
                <>
                  <EzCarouselNavButton
                    type="prev"
                    disabled={page === 1}
                    onClick={() => handlePageChange('prev')}
                  />
                  <EzCarouselNavButton
                    type="next"
                    disabled={page === numPages}
                    onClick={() => handlePageChange('next')}
                  />
                </>
              )}
            </Stack>
          </Stack>

          <Stack direction="row" spacing={`${CARD_SPACING}px`} aria-roledescription={description}>
            {showMobile ? (
              <Stack
                direction="row"
                pb="1px"
                px={`${CARD_SPACING}px`}
                spacing={`${CARD_SPACING}px`}
                sx={{overflowX: 'scroll'}}
              >
                {items.map((item, index) => (
                  <Stack
                    key={index}
                    maxWidth={mobileCardWidth}
                    minWidth={mobileCardWidth}
                    sx={{'>*': {height: '100%'}}}
                  >
                    {item}
                  </Stack>
                ))}
              </Stack>
            ) : (
              items
                .slice((page - 1) * numCardsPerPage, page * numCardsPerPage)
                .map((item, index) => (
                  <Stack
                    key={index}
                    flex={shouldFitContent ? 'unset' : '1'}
                    width={shouldFitContent ? desktopCardWidth : 'inherit'}
                    sx={{'>*': {height: '100%'}}}
                  >
                    {item}
                  </Stack>
                ))
            )}
          </Stack>
        </Stack>
      </Box>
    );
  }
);

EzCarouselCustom.displayName = 'EzCarouselCustom';

export default EzCarouselCustom;
