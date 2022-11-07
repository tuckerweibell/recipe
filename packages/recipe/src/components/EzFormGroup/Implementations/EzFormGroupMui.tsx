import React, {forwardRef} from 'react';
import {FormGroup} from '@mui/material';
import type {EzFormGroupProps, Ref} from '../EzFormGroup.types';

const EzFormGroupMui = forwardRef<Ref, EzFormGroupProps>(({ariaLabel, children, ...props}, ref) => (
  <FormGroup ref={ref} aria-label={ariaLabel} {...props}>
    {children}
  </FormGroup>
));

EzFormGroupMui.displayName = 'EzFormGroupMui';

export default EzFormGroupMui;
