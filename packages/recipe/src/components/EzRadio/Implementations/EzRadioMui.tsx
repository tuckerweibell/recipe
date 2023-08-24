import React, {forwardRef, useEffect, useImperativeHandle, useRef} from 'react';
import {Radio, Stack, useTheme, Zoom} from '@mui/material';
import warning from 'tiny-warning';
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

const VARIANT_COLORS = (
  themeColor: string,
  whiteColor: string,
  disabledBackgroundColor: string,
  disabledBorderColor: string,
  disabledColor: string
) => ({
  outlined: {
    unchecked: {background: whiteColor, border: themeColor, dot: whiteColor},
    uncheckedDisabled: {
      background: disabledBackgroundColor,
      border: disabledBorderColor,
      dot: disabledBackgroundColor,
    },
    checked: {background: whiteColor, border: themeColor, dot: themeColor},
    checkedDisabled: {
      background: disabledBackgroundColor,
      border: disabledBorderColor,
      dot: disabledColor,
    },
    hover: {background: themeColor, border: themeColor, dot: whiteColor},
  },
  filled: {
    unchecked: {background: whiteColor, border: whiteColor, dot: whiteColor},
    uncheckedDisabled: {
      background: disabledBackgroundColor,
      border: disabledBorderColor,
      dot: disabledBackgroundColor,
    },
    checked: {background: whiteColor, border: whiteColor, dot: themeColor},
    checkedDisabled: {
      background: disabledBackgroundColor,
      border: disabledBorderColor,
      dot: disabledColor,
    },
    hover: {background: themeColor, border: themeColor, dot: whiteColor},
  },
});

const iconProps = (bgcolor: string, borderColor: string, diameter: number) => ({
  alignItems: 'center',
  bgcolor,
  border: `1px solid ${borderColor}`,
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

const EzRadioIcon = ({bgcolor, borderColor, diameter, dotColor, dotDiameter}) => (
  <Stack
    {...iconProps(bgcolor, borderColor, diameter)}
    className="EzRadioIcon-unchecked"
    sx={{'&:before': {...iconDotProps(dotColor, dotDiameter)}}}
  />
);

const EzRadioCheckedIcon = ({bgcolor, borderColor, diameter, dotColor, dotDiameter}) => (
  <Stack position="relative">
    <Stack
      {...iconProps(bgcolor, borderColor, diameter)}
      borderColor={borderColor}
      className="EzRadioIcon-checked"
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
        theme.palette.common.grey120, // disabled background color
        theme.palette.common.grey130, // disabled border color
        theme.palette.common.disabled // disabled color
      )[variant][hover ? 'hover' : radioState][style];
    };
    const radioIconProps = (checked: boolean) => ({
      bgcolor: getColor(checked, false, 'background'),
      borderColor:
        !disabled && variant === 'outlined' && !checked
          ? theme.palette.common.grey140
          : getColor(checked, false, 'border'),
      diameter: getDiameter('button'),
      dotColor: getColor(checked, false, 'dot'),
      dotDiameter: getDiameter('dot'),
    });
    const inputRef = useRef<Ref>(null);

    useImperativeHandle(ref, () => inputRef.current);

    useEffect(() => {
      if (process.env.NODE_ENV !== 'production')
        warning(
          Boolean(ariaLabel || inputRef.current?.closest('label')),
          '<EzRadio /> was used without an `ariaLabel` attribute and without being wrapped in a label'
        );
    }, [ariaLabel, inputRef]);

    return (
      <Radio
        inputRef={inputRef}
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
          '&:focus-within .EzRadioIcon-checked': {
            outline: `2px solid ${theme.palette.common.black}`,
            outlineOffset: '2px',
          },
        }}
        {...props}
      />
    );
  }
);

EzRadioMui.displayName = 'EzRadioMui';

export default EzRadioMui;
