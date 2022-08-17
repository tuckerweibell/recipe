import {FormControlLabel} from '@mui/material';
import React, {forwardRef} from 'react';
import {EzFormControlLabelProps, Ref} from '../EzFormControlLabel.types';

const EzFormControlLabelMui = forwardRef<Ref, EzFormControlLabelProps>((props, ref) => (
  <FormControlLabel {...props} ref={ref} />
));

EzFormControlLabelMui.displayName = 'EzFormControlLabelMui';

export default EzFormControlLabelMui;
