import React, {forwardRef, useContext} from 'react';
import {Box, FormControlLabel, Stack, useRadioGroup, useTheme} from '@mui/material';
import {lighten} from '@mui/material/styles';
import {EzSuperFormControlLabelProps, Ref} from '../EzSuperFormControlLabel.types';
import {RadioGroupThemeContext} from '../../EzRadioGroup/EzRadioGroup';
import {FormGroupThemeContext} from '../../EzFormGroup/EzFormGroup';

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
          iconColor: getThemeColor(variant === 'outlined' ? 'dark' : 'light'),
          textColor: getThemeColor(variant === 'outlined' ? 'dark' : 'light'),
        },
        unselected: {
          backgroundColor: getThemeColor('light'),
          borderColor: getThemeColor('light'),
          iconColor: getThemeColor('dark'),
          textColor: getThemeColor('dark'),
        },
        hover: {
          backgroundColor: getThemeColor(variant === 'outlined' ? 'light' : 'dark'),
          borderColor: getThemeColor('dark'),
          iconColor: getThemeColor(variant === 'outlined' ? 'dark' : 'light'),
          textColor: getThemeColor(variant === 'outlined' ? 'dark' : 'light'),
        },
      };
    }

    const getColor = (
      state: 'selected' | 'unselected' | 'hover',
      style: 'backgroundColor' | 'borderColor' | 'iconColor' | 'textColor'
    ) => groupTheme[state][style];

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
              sx={{'& svg': {color: getColor(isChecked ? 'selected' : 'unselected', 'iconColor')}}}
            >
              {icon}
            </Box>

            {label && (
              <Stack
                className="EzSuperFormControlLabel-text"
                color={getColor(isChecked ? 'selected' : 'unselected', 'textColor')}
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
          bgcolor: getColor(isChecked ? 'selected' : 'unselected', 'backgroundColor'),
          border: '1px solid',
          borderColor: getColor(isChecked ? 'selected' : 'unselected', 'borderColor'),
          borderRadius: '8px',
          justifyContent: 'space-around',
          p: 2,
          position: 'relative',
          '&:focus-visible': {outline: 'none'},
          '&:focus-within': {
            outline: `2px solid ${palette.common.black}`,
            outlineOffset: '2px',
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
          '&.EzSuperFormControlLabel:hover:not(.Mui-disabled)': {
            bgcolor: getColor('hover', 'backgroundColor'),
            borderColor: getColor('hover', 'borderColor'),
            '.EzSuperFormControlLabel-text': {color: getColor('hover', 'textColor')},
            '.EzSuperFormControlLabel-icon svg': {color: getColor('hover', 'iconColor')},
          },
        }}
        {...props}
      />
    );
  }
);

EzSuperFormControlLabelMui.displayName = 'EzSuperFormControlLabelMui';

export default EzSuperFormControlLabelMui;
