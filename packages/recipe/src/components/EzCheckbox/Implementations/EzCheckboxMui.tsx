import React, {forwardRef, useEffect, useImperativeHandle, useRef} from 'react';
import {Checkbox, Stack, SvgIcon, useTheme, Zoom} from '@mui/material';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import warning from 'tiny-warning';
import {EzCheckboxProps, Ref} from '../EzCheckbox.types';
import {useThemeColor} from '../../../themes/hooks/useThemeColor';
import {PaletteOptions} from '../../../themes/themes.types';
import EzIcon from '../../EzIcon';

const SIZES = {
  small: 16,
  medium: 20,
  large: 24,
};

const VARIANT_COLORS = (
  themeColor: string,
  whiteColor: string,
  disabledBackgroundColor: string,
  disabledBorderColor: string,
  disabledColor: string
) => ({
  outlined: {
    unchecked: {background: whiteColor, border: themeColor, icon: whiteColor},
    uncheckedDisabled: {
      background: disabledBackgroundColor,
      border: disabledBorderColor,
      icon: disabledColor,
    },
    checked: {background: whiteColor, border: themeColor, icon: themeColor},
    checkedDisabled: {
      background: disabledBackgroundColor,
      border: disabledBorderColor,
      icon: disabledColor,
    },
  },
  filled: {
    unchecked: {background: whiteColor, border: whiteColor, icon: whiteColor},
    uncheckedDisabled: {
      background: disabledBackgroundColor,
      border: disabledBorderColor,
      icon: disabledColor,
    },
    checked: {background: whiteColor, border: whiteColor, icon: themeColor},
    checkedDisabled: {
      background: disabledBackgroundColor,
      border: disabledBorderColor,
      icon: disabledColor,
    },
  },
  'filled-inverse': {
    unchecked: {background: whiteColor, border: whiteColor, icon: whiteColor},
    uncheckedDisabled: {
      background: disabledBackgroundColor,
      border: disabledBorderColor,
      icon: disabledColor,
    },
    checked: {background: themeColor, border: themeColor, icon: whiteColor},
    checkedDisabled: {
      background: disabledColor,
      border: disabledColor,
      icon: disabledBackgroundColor,
    },
  },
});

const checkboxProps = (bgcolor: string, borderColor: string, size: number) => ({
  alignItems: 'center',
  bgcolor,
  border: `1px solid ${borderColor}`,
  borderRadius: '4px',
  height: size,
  justifyContent: 'space-around',
  width: size,
});

const IndeterminateIcon = ({iconColor, size}) => (
  <Zoom in>
    <SvgIcon className="EzCheckbox-icon" sx={{fill: iconColor, fontSize: size}}>
      <g strokeLinecap="round">
        <line x1="6" y1="12" x2="18" y2="12" stroke={iconColor} strokeWidth="3" />
      </g>
    </SvgIcon>
  </Zoom>
);

const EzCheckboxIcon = ({
  bgcolor,
  borderColor,
  checked = false,
  iconColor,
  indeterminate = false,
  size,
  opacity,
}) => {
  return (
    <Stack
      className={`EzCheckbox-${checked ? 'checked' : 'unchecked'}`}
      {...checkboxProps(bgcolor, borderColor, size)}
      sx={{opacity}}
    >
      {checked &&
        (indeterminate ? (
          <IndeterminateIcon iconColor={iconColor} size={size} />
        ) : (
          <Stack className="EzCheckbox-icon" sx={{color: iconColor, fontSize: size - 4}}>
            <EzIcon icon={faCheck} size="inherit" />
          </Stack>
        ))}
    </Stack>
  );
};

const EzCheckboxMui = forwardRef<Ref, EzCheckboxProps>(
  ({ariaLabel, color, disabled, size, variant, ...props}, ref) => {
    const theme = useTheme();
    const themeColor = useThemeColor(color);
    const inputRef = useRef<Ref>(null);

    useImperativeHandle(ref, () => inputRef.current);

    useEffect(() => {
      if (process.env.NODE_ENV !== 'production')
        warning(
          Boolean(ariaLabel || inputRef.current?.closest('label')),
          '<EzCheckbox /> was used without an `ariaLabel` attribute and without being wrapped in a label'
        );
    }, [ariaLabel, inputRef]);

    const getColor = (
      checked: boolean,
      hover: boolean,
      style: 'background' | 'border' | 'icon'
    ) => {
      const checkedState = `${checked ? 'checked' : 'unchecked'}${disabled ? 'Disabled' : ''}`;

      return VARIANT_COLORS(
        themeColor,
        theme.palette.common.white,
        theme.palette.common.neutral120, // disabled background color
        theme.palette.common.neutral130, // disabled border color
        theme.palette.common.disabled // disabled color
      )[variant][hover ? 'hover' : checkedState][style];
    };

    const checkboxIconProps = (checked: boolean) => ({
      bgcolor: getColor(checked, false, 'background'),
      borderColor:
        !disabled && (variant === 'outlined' || (variant === 'filled-inverse' && !checked))
          ? theme.palette.common.disabled
          : getColor(checked, false, 'border'),
      checked,
      iconColor: getColor(checked, false, 'icon'),
      opacity: 1,
      size: SIZES[size],
    });

    return (
      <Checkbox
        inputRef={inputRef}
        checkedIcon={<EzCheckboxIcon {...checkboxIconProps(true)} />}
        classes={{
          root: `EzCheckbox EzCheckbox-${variant}`,
          checked: 'EzCheckbox-checked',
          disabled: 'EzCheckbox-disabled',
          indeterminate: 'EzCheckbox-indeterminate',
        }}
        color={color?.startsWith('common.') ? undefined : (color as PaletteOptions)}
        disableRipple
        disabled={disabled}
        indeterminateIcon={<EzCheckboxIcon indeterminate {...checkboxIconProps(true)} />}
        inputProps={{'aria-label': ariaLabel, className: 'EzCheckbox-input'}}
        icon={<EzCheckboxIcon {...checkboxIconProps(false)} />}
        sx={{
          p: '7px',
          '&:focus-within > div': {
            outline: `2px solid ${theme.palette.common.black}`,
            outlineOffset: '2px',
          },
        }}
        {...props}
      />
    );
  }
);

EzCheckboxMui.displayName = 'EzCheckboxMui';

export default EzCheckboxMui;
