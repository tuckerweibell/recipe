import React, {forwardRef} from 'react';
import {EzCarouselCustom} from './Implementations';
import {EzCarouselProps, Ref} from './EzCarousel.types';

const EzCarousel = forwardRef<Ref, EzCarouselProps>(
  ({children, title, link, description, onPageChange}, ref) => {
    return (
      <EzCarouselCustom
        title={title}
        link={link}
        description={description}
        onPageChange={onPageChange}
        ref={ref}
      >
        {children}
      </EzCarouselCustom>
    );
  }
);

EzCarousel.displayName = 'EzCarousel';

export default EzCarousel;
