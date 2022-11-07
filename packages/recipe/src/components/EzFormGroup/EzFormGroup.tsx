import React, {forwardRef} from 'react';
import {EzFormGroupMui} from './Implementations';
import {EzFormGroupProps, Ref} from './EzFormGroup.types';

const EzFormGroup = forwardRef<Ref, EzFormGroupProps>(({ariaLabel, children, row}, ref) => (
  <EzFormGroupMui ref={ref} ariaLabel={ariaLabel} row={row}>
    {children}
  </EzFormGroupMui>
));

EzFormGroup.displayName = 'EzFormGroup';

export default EzFormGroup;
