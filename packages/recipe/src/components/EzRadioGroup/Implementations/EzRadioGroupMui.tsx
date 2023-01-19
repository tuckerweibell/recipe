import React, {forwardRef} from 'react';
import {RadioGroup} from '@mui/material';
import type {EzRadioGroupProps, Ref} from '../EzRadioGroup.types';

const EzRadioGroupMui = forwardRef<Ref, EzRadioGroupProps>(
  ({ariaLabel, children, gap, labelWidth, row, ...props}, ref) => {
    return (
      <RadioGroup
        ref={ref}
        aria-label={ariaLabel}
        classes={{
          root: 'EzRadioGroup',
        }}
        row={row}
        sx={{
          display: 'flex',
          gap: gap ?? (row ? 2 : 0),
          '.EzSuperFormControlLabel': {
            width: labelWidth ? `${labelWidth}px` : 'auto',
          },
        }}
        {...props}
      >
        {children}
      </RadioGroup>
    );
  }
);

EzRadioGroupMui.displayName = 'EzRadioGroupMui';

export default EzRadioGroupMui;
