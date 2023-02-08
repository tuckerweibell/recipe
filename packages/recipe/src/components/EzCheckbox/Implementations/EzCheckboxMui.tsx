import React, {forwardRef} from 'react';
import {Checkbox, Stack, SvgIcon, useTheme, Zoom} from '@mui/material';
import {EzCheckboxMuiProps, Ref} from '../EzCheckbox.types';
import {useThemeColor} from '../../../themes/hooks/useThemeColor';
import {PaletteOptions} from '../../../themes/themes.types';

const SIZES = {
  small: 16,
  medium: 20,
  large: 24,
};

const VARIANT_COLORS = (themeColor: string, whiteColor: string, disabledColor: string) => ({
  outlined: {
    unchecked: {background: whiteColor, border: themeColor, icon: whiteColor},
    uncheckedDisabled: {background: whiteColor, border: disabledColor, icon: whiteColor},
    checked: {background: whiteColor, border: themeColor, icon: themeColor},
    checkedDisabled: {background: whiteColor, border: disabledColor, icon: disabledColor},
  },
  filled: {
    unchecked: {background: whiteColor, border: whiteColor, icon: whiteColor},
    uncheckedDisabled: {background: whiteColor, border: whiteColor, icon: whiteColor},
    checked: {background: whiteColor, border: whiteColor, icon: themeColor},
    checkedDisabled: {background: whiteColor, border: whiteColor, icon: disabledColor},
  },
  'filled-inverse': {
    unchecked: {background: whiteColor, border: whiteColor, icon: whiteColor},
    uncheckedDisabled: {background: whiteColor, border: whiteColor, icon: whiteColor},
    checked: {background: themeColor, border: themeColor, icon: whiteColor},
    checkedDisabled: {background: whiteColor, border: whiteColor, icon: disabledColor},
  },
});

const checkboxProps = (bgcolor: string, borderColor: string, size: number) => ({
  alignItems: 'center',
  bgcolor,
  border: `2px solid ${borderColor}`,
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

const CheckedIcon = ({iconColor, size}) => (
  <Zoom in>
    <SvgIcon className="EzCheckbox-icon" sx={{fill: iconColor, fontSize: size}}>
      <path d="M9.58301 17.7644C9.87598 18.0785 10.374 18.0785 10.667 17.7644L19.2803 8.5288C19.5732 8.21466 19.5732 7.68063 19.2803 7.36649L18.2256 6.2356C17.9326 5.92147 17.4639 5.92147 17.1709 6.2356L10.1396 13.7749L6.8291 10.2565C6.53613 9.94241 6.06738 9.94241 5.77441 10.2565L4.71973 11.3874C4.42676 11.7016 4.42676 12.2356 4.71973 12.5497L9.58301 17.7644Z" />
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
}) => (
  <Stack
    className={`EzCheckbox-${checked ? 'checked' : 'unchecked'}`}
    {...checkboxProps(bgcolor, borderColor, size)}
    sx={{opacity}}
  >
    {checked &&
      (indeterminate ? (
        <IndeterminateIcon iconColor={iconColor} size={size} />
      ) : (
        <CheckedIcon iconColor={iconColor} size={size} />
      ))}
  </Stack>
);

const EzCheckboxMui = forwardRef<Ref, EzCheckboxMuiProps>(
  ({ariaLabel = 'checkbox', color, disabled, size, variant, ...props}, ref) => {
    const theme = useTheme();
    const themeColor = useThemeColor(color);

    const getColor = (
      checked: boolean,
      hover: boolean,
      style: 'background' | 'border' | 'icon'
    ) => {
      const checkedState = `${checked ? 'checked' : 'unchecked'}${disabled ? 'Disabled' : ''}`;

      return VARIANT_COLORS(
        themeColor,
        theme.palette.common.white,
        theme.palette.common.neutral150
      )[variant][hover ? 'hover' : checkedState][style];
    };

    const checkboxIconProps = (checked: boolean) => ({
      bgcolor: getColor(checked, false, 'background'),
      borderColor: getColor(checked, false, 'border'),
      checked,
      iconColor: getColor(checked, false, 'icon'),
      opacity: disabled ? 0.4 : 1,
      size: SIZES[size],
    });

    return (
      <Checkbox
        inputRef={ref}
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
          '&:focus-within': {
            bgcolor: `${themeColor}20`,
            borderRadius: '4px',
          },
        }}
        {...props}
      />
    );
  }
);

EzCheckboxMui.displayName = 'EzCheckboxMui';

export default EzCheckboxMui;
