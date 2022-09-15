import React, {forwardRef} from 'react';
import {RadioGroup} from '@mui/material';
import type {EzRadioGroupProps, Ref} from '../EzRadioGroup.types';

const EzRadioGroupMui = forwardRef<Ref, EzRadioGroupProps>(
  ({ariaLabel, children, ...props}, ref) => (
    <RadioGroup ref={ref} aria-label={ariaLabel} {...props}>
      {children}
    </RadioGroup>
  )
);

EzRadioGroupMui.displayName = 'EzRadioGroupMui';

export default EzRadioGroupMui;
