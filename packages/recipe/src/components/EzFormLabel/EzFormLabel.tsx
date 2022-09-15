import React, {forwardRef} from 'react';
import {EzFormLabelMui} from './Implementations';
import {EzFormLabelProps, Ref} from './EzFormLabel.types';

const EzFormLabel = forwardRef<Ref, EzFormLabelProps>(({children, id}, ref) => (
  <EzFormLabelMui ref={ref} id={id}>
    {children}
  </EzFormLabelMui>
));

EzFormLabel.displayName = 'EzFormLabel';

export default EzFormLabel;
