import React, {forwardRef} from 'react';
import {Box, Button, alpha, darken, useTheme} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import {EzButtonMuiProps, Ref} from '../EzButton.types';
import {PaletteOptions} from '../../../themes/themes.types';
import {useThemeColor} from '../../../themes/hooks/useThemeColor';

const EzButtonMui = forwardRef<Ref, EzButtonMuiProps>(
  ({ariaHidden, ariaLabel, children, color, fontSize, loading, variant, ...props}, ref) => {
    const theme = useTheme();
    const isCommonColor = color?.startsWith('common.') || color === 'destructive';
    const themeColor = useThemeColor(color === 'destructive' ? 'common.alert100' : color);
    const ButtonComponent = loading ? LoadingButton : Button;

    return (
      <ButtonComponent
        ref={ref}
        aria-hidden={ariaHidden}
        aria-label={ariaLabel}
        classes={{
          root: `EzButton EzButton-${variant}`,
          startIcon: 'EzButton-startIcon',
          endIcon: 'EzButton-endIcon',
          disabled: 'EzButton-disabled',
        }}
        color={isCommonColor ? undefined : (color as PaletteOptions)}
        disableElevation
        loading={loading ? true : undefined}
        sx={{
          bgcolor: isCommonColor && variant === 'filled' ? themeColor : undefined,
          borderColor: isCommonColor && variant === 'outlined' ? alpha(themeColor, 0.5) : undefined,
          color: isCommonColor && variant !== 'filled' ? themeColor : undefined,
          fontSize:
            fontSize === 'inherit' ? fontSize : theme.typography?.font?.size[fontSize] || undefined,
          '&:focus': {boxShadow: `0 0 0 3px ${themeColor}50`},
          '&:hover, &:active': {
            bgcolor: variant === 'filled' ? darken(themeColor, 0.2) : alpha(themeColor, 0.1),
            borderColor: variant !== 'text' ? themeColor : undefined,
          },
        }}
        variant={variant === 'filled' ? 'contained' : variant}
        {...props}
      >
        <Box whiteSpace="nowrap">{children}</Box>
      </ButtonComponent>
    );
  }
);

EzButtonMui.displayName = 'EzButtonMui';

export default EzButtonMui;
