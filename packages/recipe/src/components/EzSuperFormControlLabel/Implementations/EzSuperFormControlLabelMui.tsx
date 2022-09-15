import React, {forwardRef} from 'react';
import {Box, FormControlLabel, Stack, useRadioGroup, useTheme} from '@mui/material';
import {darken, lighten} from '@mui/material/styles';
import {EzSuperFormControlLabelProps, Ref} from '../EzSuperFormControlLabel.types';
import EzIcon from '../../EzIcon';

const EzSuperFormControlLabelMui = forwardRef<Ref, EzSuperFormControlLabelProps>(
  ({control, disabled, icon, label, value, ...props}, ref) => {
    const theme = useTheme();
    const radioGroup = useRadioGroup();
    const checked = control.props.checked || radioGroup?.value === value;
    const themeColor = control.props.color?.startsWith('common.')
      ? theme.palette.common[control.props.color.split('.')[1]]
      : theme.palette[control.props.color].main;
    const themeColorDark = darken(themeColor, 0.5);
    const disabledColor = theme.palette.common.neutral140;

    return (
      <FormControlLabel
        ref={ref}
        classes={{
          root: `EzSuperFormControlLabel${checked ? ' EzSuperFormControlLabel-checked' : ''}`,
          label: 'EzSuperFormControlLabel-label',
        }}
        control={control}
        disabled={disabled}
        label={
          <Stack alignItems="center" fontSize="14px">
            <Box
              fontSize="68px"
              className="EzSuperFormControlLabel-icon"
              color={disabled ? disabledColor : themeColorDark}
              lineHeight={1}
            >
              <EzIcon size="inherit" icon={icon} />
            </Box>

            <Box
              className="EzSuperFormControlLabel-text"
              color={disabled ? disabledColor : themeColorDark}
              height="20px"
            >
              {label}
            </Box>
          </Stack>
        }
        value={value}
        sx={{
          bgcolor: checked ? lighten(disabled ? disabledColor : themeColor, 0.92) : undefined,
          border: `2px solid ${
            checked ? (disabled ? disabledColor : themeColor) : theme.palette.common.neutral130
          }`,
          borderRadius: '4px',
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'center',
          m: '0 16px 16px 0',
          minHeight: '170px',
          p: '5px',
          position: 'relative',
          maxWidth: '150px',
          width: '150px',
          '&:hover': {
            bgcolor: disabled ? undefined : lighten(disabled ? disabledColor : themeColor, 0.92),
            borderColor: disabled ? undefined : themeColor,
            '.EzSuperFormControlLabel-text': {
              color: disabled ? undefined : themeColor,
              fontWeight: disabled ? undefined : 700,
            },
            '.EzRadioIcon-unchecked': {
              bgcolor: disabled ? undefined : themeColor,
            },
          },
          '.EzRadio': {
            position: 'absolute',
            top: 0,
            right: 0,
          },
          '.EzSuperFormControlLabel-text': {
            fontWeight: checked ? 700 : 400,
            color: disabled ? disabledColor : checked ? themeColor : undefined,
            textAlign: 'center',
            '&.Mui-disabled': {
              color: 'common.neutral150',
              opacity: 0.4,
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
