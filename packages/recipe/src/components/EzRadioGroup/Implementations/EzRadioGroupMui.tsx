import React, {forwardRef} from 'react';
import {RadioGroup} from '@mui/material';
import type {EzRadioGroupProps, Ref} from '../EzRadioGroup.types';

const EzRadioGroupMui = forwardRef<Ref, EzRadioGroupProps>(({children, ...props}, ref) => (
  <RadioGroup {...props} ref={ref}>
    {children}
  </RadioGroup>
));

EzRadioGroupMui.displayName = 'EzRadioGroupMui';

export default EzRadioGroupMui;
