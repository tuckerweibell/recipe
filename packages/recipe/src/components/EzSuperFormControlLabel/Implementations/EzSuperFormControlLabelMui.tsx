import React, {forwardRef, useContext} from 'react';
import {Box, FormControlLabel, Stack, useRadioGroup, useTheme} from '@mui/material';
import {lighten} from '@mui/material/styles';
import {EzSuperFormControlLabelProps, Ref} from '../EzSuperFormControlLabel.types';
import {RadioGroupThemeContext} from '../../EzRadioGroup/EzRadioGroup';
import {FormGroupThemeContext} from '../../EzFormGroup/EzFormGroup';
import {useThemeColor} from '../../../themes/hooks/useThemeColor';

const EzSuperFormControlLabelMui = forwardRef<Ref, EzSuperFormControlLabelProps>(
  ({checked, control, disabled, icon, label, value, ...props}, ref) => {
    const {palette} = useTheme();
    const radioGroup = useRadioGroup();
    const isCheckbox = radioGroup === undefined;
    const {color, variant} = useContext(
      isCheckbox ? FormGroupThemeContext : RadioGroupThemeContext
    );
    const isChecked = isCheckbox ? checked : radioGroup?.value === value;
    const hasCustomTheme = typeof color == 'object';
    const isPaletteColor = !hasCustomTheme && !color?.startsWith('common.');

    const getThemeColor = (contrast: string) => {
      if (disabled) return lighten(palette.common.disabled, contrast === 'dark' ? 0.3 : 0.8);
      if (isPaletteColor) return palette[color][contrast === 'dark' ? 'main' : 'light'];
      const commonColor = palette.common[(color as string).split('.')[1]];
      return contrast === 'dark' ? commonColor : lighten(commonColor, 0.5);
    };

    let groupTheme = color;
    if (!hasCustomTheme) {
      groupTheme = {
        selected: {
          backgroundColor: getThemeColor(variant === 'outlined' ? 'light' : 'dark'),
          borderColor: getThemeColor('dark'),
          textColor: getThemeColor(variant === 'outlined' ? 'dark' : 'light'),
        },
        unselected: {
          backgroundColor: getThemeColor('light'),
          borderColor: getThemeColor('light'),
          textColor: getThemeColor('dark'),
        },
      };
    }

    const getColor = (selected: boolean, style: 'backgroundColor' | 'borderColor' | 'textColor') =>
      groupTheme[selected ? 'selected' : 'unselected'][style];

    return (
      <FormControlLabel
        ref={ref}
        classes={{
          root: `EzSuperFormControlLabel EzSuperFormControlLabel-${
            isChecked ? '' : 'un'
          }checked EzSuperFormControlLabel-${isCheckbox ? 'checkbox' : 'radio'}`,
          label: 'EzSuperFormControlLabel-label',
        }}
        checked={isChecked}
        control={control}
        disabled={disabled}
        label={
          <Stack alignItems="center">
            <Box
              className="EzSuperFormControlLabel-icon"
              lineHeight={1}
              sx={{'& svg': {color: getColor(isChecked, 'textColor')}}}
            >
              {icon}
            </Box>

            {label && (
              <Stack
                className="EzSuperFormControlLabel-text"
                color={getColor(isChecked, 'textColor')}
                textAlign="center"
                lineHeight="1em"
                mt={1}
              >
                {label}
              </Stack>
            )}
          </Stack>
        }
        value={value}
        sx={{
          bgcolor: getColor(isChecked, 'backgroundColor'),
          border: '3px solid',
          borderColor: getColor(isChecked, 'borderColor'),
          borderRadius: '16px',
          justifyContent: 'space-around',
          p: 2,
          position: 'relative',
          '&:focus-visible': {outline: 'none'},
          '&:focus-within': {
            boxShadow: `0 0 0 3px ${
              isPaletteColor
                ? getColor(true, 'borderColor')
                : useThemeColor(getColor(true, 'borderColor'))
            }50`,
          },
          '.EzRadio, .EzCheckbox': {
            cursor: 'inherit',
            height: '100%',
            left: 0,
            margin: 0,
            opacity: 0,
            padding: 0,
            position: 'absolute',
            top: 0,
            width: '100%',
            zIndex: 1,
          },
          '&.EzSuperFormControlLabel-radio:hover:not(.Mui-disabled)': {
            bgcolor: getColor(true, 'backgroundColor'),
            borderColor: getColor(true, 'borderColor'),
            '.EzSuperFormControlLabel-text': {color: getColor(true, 'textColor')},
            '& svg': {
              color: getColor(true, 'textColor'),
            },
          },
        }}
        {...props}
      />
    );
  }
);

EzSuperFormControlLabelMui.displayName = 'EzSuperFormControlLabelMui';

export default EzSuperFormControlLabelMui;
