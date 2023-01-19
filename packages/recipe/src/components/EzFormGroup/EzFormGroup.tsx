import React, {forwardRef} from 'react';
import {EzFormGroupMui} from './Implementations';
import {EzFormGroupProps, Ref} from './EzFormGroup.types';

const EzFormGroup = forwardRef<Ref, EzFormGroupProps>(({ariaLabel, children, gap, row}, ref) => (
  <EzFormGroupMui ref={ref} ariaLabel={ariaLabel} gap={gap} row={row}>
    {children}
  </EzFormGroupMui>
));

EzFormGroup.displayName = 'EzFormGroup';

export default EzFormGroup;
