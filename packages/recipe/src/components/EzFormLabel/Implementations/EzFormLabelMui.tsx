import React, {forwardRef} from 'react';
import FormLabel from '@mui/material/FormLabel';
import {EzFormLabelProps, Ref} from '../EzFormLabel.types';

const EzFormLabelMui = forwardRef<Ref, EzFormLabelProps>(({children, ...props}, ref) => (
  <FormLabel ref={ref} classes={{root: 'EzFormLabel'}} {...props}>
    {children}
  </FormLabel>
));

EzFormLabelMui.displayName = 'EzFormLabelMui';

export default EzFormLabelMui;
