import React, {forwardRef} from 'react';
import {Radio, Stack, useTheme, Zoom} from '@mui/material';
import {EzRadioProps, Ref} from '../EzRadio.types';
import {useThemeColor} from '../../../themes/hooks/useThemeColor';
import {PaletteOptions} from '../../../themes/themes.types';

const VARIANT_SIZES = {
  outlined: {
    small: {button: 16, dot: 6},
    medium: {button: 20, dot: 7},
    large: {button: 24, dot: 8},
  },
  filled: {
    small: {button: 16, dot: 6},
    medium: {button: 20, dot: 7},
    large: {button: 24, dot: 8},
  },
};

const VARIANT_COLORS = (themeColor: string, whiteColor: string, disabledColor: string) => ({
  outlined: {
    unchecked: {background: whiteColor, border: themeColor, dot: whiteColor},
    uncheckedDisabled: {background: whiteColor, border: disabledColor, dot: whiteColor},
    checked: {background: whiteColor, border: themeColor, dot: themeColor},
    checkedDisabled: {background: whiteColor, border: disabledColor, dot: disabledColor},
    hover: {background: themeColor, border: themeColor, dot: whiteColor},
  },
  filled: {
    unchecked: {background: whiteColor, border: whiteColor, dot: whiteColor},
    uncheckedDisabled: {background: whiteColor, border: whiteColor, dot: whiteColor},
    checked: {background: whiteColor, border: whiteColor, dot: themeColor},
    checkedDisabled: {background: whiteColor, border: whiteColor, dot: disabledColor},
    hover: {background: themeColor, border: themeColor, dot: whiteColor},
  },
});

const iconProps = (bgcolor: string, borderColor: string, diameter: number) => ({
  alignItems: 'center',
  bgcolor,
  border: `2px solid ${borderColor}`,
  borderRadius: '50%',
  height: diameter,
  justifyContent: 'space-around',
  width: diameter,
});

const iconDotProps = (bgcolor: string, diameter: number) => ({
  bgcolor,
  borderRadius: '50%',
  content: '""',
  height: diameter,
  width: diameter,
});

const EzRadioIcon = ({bgcolor, borderColor, diameter, dotColor, dotDiameter, opacity}) => (
  <Stack
    {...iconProps(bgcolor, borderColor, diameter)}
    className="EzRadioIcon-unchecked"
    sx={{opacity, '&:before': {...iconDotProps(dotColor, dotDiameter)}}}
  />
);

const EzRadioCheckedIcon = ({bgcolor, borderColor, diameter, dotColor, dotDiameter, opacity}) => (
  <Stack className="EzRadioIcon-checked" position="relative" sx={{opacity}}>
    <Stack
      {...iconProps(bgcolor, borderColor, diameter)}
      borderColor={borderColor}
      className="EzRadioIcon-checked-border"
    />

    <Zoom in>
      <Stack
        {...iconDotProps(dotColor, dotDiameter)}
        className="EzRadioIcon-checked-dot"
        position="absolute"
        right={diameter / 2 - dotDiameter / 2}
        top={diameter / 2 - dotDiameter / 2}
      />
    </Zoom>
  </Stack>
);

const EzRadioMui = forwardRef<Ref, EzRadioProps>(
  ({ariaLabel, color, disabled, size, variant, ...props}, ref) => {
    const theme = useTheme();
    const themeColor = useThemeColor(color);
    const getDiameter = (part: 'button' | 'dot') => VARIANT_SIZES[variant][size][part];
    const getColor = (checked: boolean, hover: boolean, style: 'background' | 'border' | 'dot') => {
      const radioState = `${checked ? 'checked' : 'unchecked'}${disabled ? 'Disabled' : ''}`;
      return VARIANT_COLORS(
        themeColor,
        theme.palette.common.white,
        theme.palette.common.neutral150
      )[variant][hover ? 'hover' : radioState][style];
    };
    const radioIconProps = (checked: boolean) => ({
      bgcolor: getColor(checked, false, 'background'),
      borderColor: getColor(checked, false, 'border'),
      diameter: getDiameter('button'),
      dotColor: getColor(checked, false, 'dot'),
      dotDiameter: getDiameter('dot'),
      opacity: disabled ? 0.4 : 1,
    });

    return (
      <Radio
        inputRef={ref}
        aria-label={ariaLabel}
        checkedIcon={<EzRadioCheckedIcon {...radioIconProps(true)} />}
        classes={{
          root: `EzRadio EzRadio-${variant}`,
          checked: 'EzRadio-checked',
          disabled: 'EzRadio-disabled',
        }}
        color={color?.startsWith('common.') ? undefined : (color as PaletteOptions)}
        disableRipple
        disabled={disabled}
        inputProps={{'aria-label': ariaLabel, className: 'EzRadio-input'}}
        icon={<EzRadioIcon {...radioIconProps(false)} />}
        sx={{
          p: '7px',
          '&:hover': {
            bgcolor: 'transparent',
            '.EzRadioIcon-unchecked': {
              bgcolor: getColor(false, true, 'background'),
              borderColor: getColor(false, true, 'border'),
              '&:before': {bgcolor: getColor(false, true, 'dot')},
            },
          },
          '&:focus-within': {
            bgcolor: `${themeColor}20`,
          },
        }}
        {...props}
      />
    );
  }
);

EzRadioMui.displayName = 'EzRadioMui';

export default EzRadioMui;
