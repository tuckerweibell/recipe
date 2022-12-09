import React, {cloneElement, Children, forwardRef} from 'react';
import {alpha, darken, IconButton} from '@mui/material';
import {EzIconButtonProps, EzIconButtonPaletteOptions, Ref} from '../EzIconButton.types';
import {useThemeColor} from '../../../themes/hooks/useThemeColor';

const EzIconButtonMui = forwardRef<Ref, EzIconButtonProps>(
  ({ariaHidden, ariaLabel, children, color, disabled, variant, ...props}, ref) => {
    const isCommonColor = color?.startsWith('common.');
    const themeColor = useThemeColor(disabled ? 'common.disabled' : color);
    const outlineBoxShadow = `inset 0 0 0 2px ${themeColor}`;
    const focusBoxShadow = `0 0 0 3px ${themeColor}50`;
    const Child = Children.only(children);
    const iconColor = variant === 'filled' ? 'common.white' : disabled ? 'common.disabled' : color;

    return (
      <IconButton
        ref={ref}
        aria-hidden={ariaHidden}
        aria-label={ariaLabel}
        classes={{
          root: `EzIconButton EzIconButton-${variant}`,
          disabled: 'EzIconButton-disabled',
        }}
        color={isCommonColor ? undefined : (color as EzIconButtonPaletteOptions)}
        disabled={disabled}
        sx={{
          bgcolor: variant === 'filled' ? themeColor : undefined,
          boxShadow: variant === 'outlined' ? outlineBoxShadow : undefined,
          '&:focus': {
            boxShadow:
              variant === 'outlined' ? `${outlineBoxShadow}, ${focusBoxShadow}` : focusBoxShadow,
          },
          '&:hover, &:active': {
            bgcolor: variant === 'filled' ? darken(themeColor, 0.2) : alpha(themeColor, 0.1),
            borderColor: variant !== 'basic' ? themeColor : undefined,
          },
        }}
        {...props}
      >
        {cloneElement(Child, {
          color: Child.props.color === 'inherit' ? iconColor : Child.props.color,
        })}
      </IconButton>
    );
  }
);

EzIconButtonMui.displayName = 'EzIconButtonMui';

export default EzIconButtonMui;
