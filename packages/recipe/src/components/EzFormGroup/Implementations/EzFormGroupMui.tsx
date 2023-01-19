import React, {forwardRef} from 'react';
import {FormGroup} from '@mui/material';
import type {EzFormGroupProps, Ref} from '../EzFormGroup.types';

const EzFormGroupMui = forwardRef<Ref, EzFormGroupProps>(
  ({ariaLabel, children, gap, row, ...props}, ref) => {
    return (
      <FormGroup
        ref={ref}
        aria-label={ariaLabel}
        classes={{
          root: 'EzFormGroup',
        }}
        row={row}
        sx={{
          display: 'flex',
          gap: gap ?? (row ? 2 : 0),
        }}
        {...props}
      >
        {children}
      </FormGroup>
    );
  }
);

EzFormGroupMui.displayName = 'EzFormGroupMui';

export default EzFormGroupMui;
