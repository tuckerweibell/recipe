import React, {forwardRef} from 'react';
import {EzIconButtonMui} from './Implementations';
import {EzIconButtonProps, Ref} from './EzIconButton.types';

const EzIconButton = forwardRef<Ref, EzIconButtonProps>(
  (
    {ariaHidden, ariaLabel, children, color, disabled, onClick, onKeyDown, size, type, variant},
    ref
  ) => (
    <EzIconButtonMui
      ref={ref}
      ariaHidden={ariaHidden}
      ariaLabel={ariaLabel}
      color={color}
      disabled={disabled}
      onClick={onClick}
      onKeyDown={onKeyDown}
      size={size}
      type={type}
      variant={variant}
    >
      {children}
    </EzIconButtonMui>
  )
);

EzIconButton.defaultProps = {
  ariaHidden: false,
  color: 'primary',
  disabled: false,
  size: 'medium',
  type: 'button',
  variant: 'filled',
};

EzIconButton.displayName = 'EzIconButton';

export default EzIconButton;
