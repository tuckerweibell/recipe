import React, {forwardRef} from 'react';
import {EzChipMui} from './Implementations';
import {EzChipProps, Ref} from './EzChip.types';

const EzChip = forwardRef<Ref, EzChipProps>(
  ({label, color, icon, onClick, onDelete, size, variant}, ref) => (
    <EzChipMui
      ref={ref}
      label={label}
      color={color}
      icon={icon}
      onClick={onClick}
      onDelete={onDelete}
      size={size}
      variant={variant}
    />
  )
);

EzChip.defaultProps = {
  color: 'common.grey130',
  size: 'medium',
  variant: 'filled',
};

EzChip.displayName = 'EzChip';

export default EzChip;
