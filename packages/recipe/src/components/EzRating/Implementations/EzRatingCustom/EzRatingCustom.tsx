import React from 'react';
import EzIcon from '../../../EzIcon';
import {EzRatingProps} from '../../EzRating.types';

const EzRatingCustom: React.FC<EzRatingProps> = ({
  max,
  value,
  label,
  emptyIcon,
  halfIcon,
  fullIcon,
  size,
  color,
}) => {
  const valueRoundedToClosestHalfInteger = Math.round(value * 2) / 2;
  const fullIconCount = Math.floor(valueRoundedToClosestHalfInteger);
  const halfIconCount = Math.round(valueRoundedToClosestHalfInteger - fullIconCount);
  const emptyIconCount = max - Math.ceil(valueRoundedToClosestHalfInteger);

  return (
    <span role="img" aria-label={label}>
      {fullIconCount > 0 &&
        [...Array(fullIconCount).keys()].map(i =>
          React.createElement(EzIcon, {size, color, icon: fullIcon, key: `full-icon-${i}`})
        )}
      {halfIconCount > 0 &&
        [...Array(halfIconCount).keys()].map(i =>
          React.createElement(EzIcon, {size, color, icon: halfIcon, key: `half-icon-${i}`})
        )}
      {emptyIconCount > 0 &&
        [...Array(emptyIconCount).keys()].map(i =>
          React.createElement(EzIcon, {size, color, icon: emptyIcon, key: `empty-icon-${i}`})
        )}
    </span>
  );
};

EzRatingCustom.displayName = 'EzRatingCustom';

export default EzRatingCustom;
