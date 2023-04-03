import React, {cloneElement, forwardRef} from 'react';
import {Box, FormControlLabel, Stack, useTheme} from '@mui/material';
import {EzFormControlLabelProps, Ref} from '../EzFormControlLabel.types';
import EzSuperFormControlLabel from '../../EzSuperFormControlLabel';
import {useThemeColor} from '../../../themes/hooks/useThemeColor';
import {EzIconTypes} from '../../EzIcon/EzIcon.types';
import {isSuperFormControlLabel} from '../utils';

const EzFormControlLabelMui = forwardRef<Ref, EzFormControlLabelProps>((props, ref) => {
  const {checked, control, disabled, label, value} = props;
  const theme = useTheme();
  const themeColor = useThemeColor(control.props.color);

  if (isSuperFormControlLabel(props)) {
    return (
      <EzSuperFormControlLabel
        ref={ref}
        checked={checked}
        control={cloneElement(control, {ariaLabel: control.props.ariaLabel || null})}
        disabled={disabled}
        icon={props.icon}
        label={label}
        value={value}
      />
    );
  }

  const {labelIcons, helperText, ...remainingProps} = props;
  return (
    <FormControlLabel
      inputRef={ref}
      checked={checked}
      classes={{root: 'EzFormControlLabel', label: 'EzFormControlLabel-label'}}
      control={cloneElement(control, {ariaLabel: control.props.ariaLabel || null})}
      disabled={disabled}
      {...remainingProps}
      label={
        <Stack>
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
        alignItems: 'start',
        ml: '-7px',
        '.EzFormControlLabel-label': {
          ml: '5px',
          mt: '5px',
        },
        '&:hover .EzRadioIcon-unchecked': {
          bgcolor: disabled ? undefined : themeColor,
          borderColor: disabled ? undefined : themeColor,
        },
      }}
    />
  );
});

EzFormControlLabelMui.displayName = 'EzFormControlLabelMui';

export default EzFormControlLabelMui;
