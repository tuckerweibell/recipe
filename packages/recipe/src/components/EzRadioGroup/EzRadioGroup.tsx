import React, {forwardRef} from 'react';
import {EzRadioGroupMui} from './Implementations';
import {EzRadioGroupProps, Ref} from './EzRadioGroup.types';

const EzRadioGroup = forwardRef<Ref, EzRadioGroupProps>(({children}, ref) => (
  <EzRadioGroupMui ref={ref}>{children}</EzRadioGroupMui>
));

EzRadioGroup.displayName = 'EzRadioGroup';

export default EzRadioGroup;
