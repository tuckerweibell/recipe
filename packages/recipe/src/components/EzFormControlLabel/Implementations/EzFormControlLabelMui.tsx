import React, {cloneElement, forwardRef} from 'react';
import {Box, FormControlLabel, Stack, useTheme} from '@mui/material';
import {EzFormControlLabelProps, Ref} from '../EzFormControlLabel.types';
import EzSuperFormControlLabel from '../../EzSuperFormControlLabel';
import {useThemeColor} from '../../../themes/hooks/useThemeColor';
import {EzIconTypes} from '../../EzIcon/EzIcon.types';

const EzFormControlLabelMui = forwardRef<Ref, EzFormControlLabelProps>(
  ({control, disabled, helperText, icon, label, labelIcons, ...props}, ref) => {
    const theme = useTheme();
    const themeColor = useThemeColor(control.props.color);

    if (icon)
      return (
        <EzSuperFormControlLabel
          ref={ref}
          control={cloneElement(control, {ariaLabel: control.props.ariaLabel || null})}
          disabled={disabled}
          icon={icon}
          label={label}
          {...props}
        />
      );

    return (
      <FormControlLabel
        inputRef={ref}
        classes={{root: 'EzFormControlLabel', label: 'EzFormControlLabel-label'}}
        control={cloneElement(control, {ariaLabel: control.props.ariaLabel || null})}
        disabled={disabled}
        label={
          <Stack lineHeight="16px">
            <Stack direction="row">
              {label}

              {labelIcons?.map((labelIcon: EzIconTypes, index: number) => (
                <Box ml={1} key={index}>
                  {labelIcon}
                </Box>
              ))}
            </Stack>

            {helperText && (
              <Box
                className="EzFormControlLabel-helperText"
                color={theme.palette.common.neutral150}
                fontSize="12px"
              >
                {helperText}
              </Box>
            )}
          </Stack>
        }
        sx={{
          ml: '-7px',
          '.EzFormControlLabel-label': {
            ml: '5px',
            mt: helperText ? 2 : 0,
          },
          '.MuiFormControlLabel-label.Mui-disabled': {
            color: 'common.neutral150',
            opacity: 0.4,
          },
          '&:hover .EzRadioIcon-unchecked': {
            bgcolor: disabled ? undefined : themeColor,
            borderColor: disabled ? undefined : themeColor,
          },
        }}
        {...props}
      />
    );
  }
);

EzFormControlLabelMui.displayName = 'EzFormControlLabelMui';

export default EzFormControlLabelMui;
