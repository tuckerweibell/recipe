import React, {forwardRef} from 'react';
import {EzButtonLegacy, EzButtonMui} from './Implementations';
import {EzButtonProps, Ref} from './EzButton.types';
import buildDataAttributes from '../../utils/buildDataAttributes';

const EzButton = forwardRef<Ref, EzButtonProps>((props, ref) => {
  if (props.legacy === true) {
    const {legacy, ...remainingProps} = props;
    return <EzButtonLegacy ref={ref} {...remainingProps} />;
  }

  const {
    ariaHidden,
    ariaLabel,
    children,
    color,
    data,
    disabled,
    endIcon,
    fontSize,
    fullWidth,
    loading,
    onClick,
    onKeyDown,
    size,
    startIcon,
    type,
    variant,
  } = props;

  return (
    <EzButtonMui
      ref={ref}
      ariaHidden={ariaHidden}
      ariaLabel={ariaLabel}
      color={color}
      disabled={disabled}
      endIcon={endIcon}
      fontSize={fontSize}
      fullWidth={fullWidth}
      loading={loading}
      onClick={onClick}
      onKeyDown={onKeyDown}
      size={size}
      startIcon={startIcon}
      type={type}
      variant={variant}
      {...buildDataAttributes({data})}
    >
      {children}
    </EzButtonMui>
  );
});

EzButton.displayName = 'EzButton';

EzButton.defaultProps = {
  ariaHidden: false,
  color: 'primary',
  disabled: false,
  fontSize: 'medium',
  fullWidth: false,
  legacy: false, // deprecated
  loading: false,
  size: 'medium',
  type: 'button',
  variant: 'filled',
};

export default EzButton;
