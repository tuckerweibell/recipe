import React, {forwardRef} from 'react';
import {Ref, EzRatingProps} from './EzRating.types';
import EzRatingCustom from './Implementations/EzRatingCustom/EzRatingCustom';

const EzRating = forwardRef<Ref, EzRatingProps>(
  ({max, value, label, emptyIcon, halfIcon, fullIcon, color, size}, ref) => {
    
    let ratingValue;
    if(value > max) ratingValue = max;
    else if(value < 0 ) ratingValue = 0;
    else ratingValue = value;

    return (
      <span ref={ref}>
        <EzRatingCustom
          max={max}
          value={ratingValue}
          label={label}
          emptyIcon={emptyIcon}
          halfIcon={halfIcon}
          fullIcon={fullIcon}
          color={color}
          size={size}
        />
      </span>
    );
  }
);

EzRating.defaultProps = {
  size: 'inherit',
  color: 'inherit',
};

EzRating.displayName = 'EzRating';

export default EzRating;
