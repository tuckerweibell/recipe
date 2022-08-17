import React, {forwardRef} from 'react';
import {EzFormControlLabelMui} from './Implementations';
import type {EzFormControlLabelProps, Ref} from './EzFormControlLabel.types';

const EzFormControlLabel = forwardRef<Ref, EzFormControlLabelProps>(({control, label}, ref) => (
  <EzFormControlLabelMui control={control} label={label} ref={ref} />
));

EzFormControlLabel.displayName = 'EzFormControlLabel';

export default EzFormControlLabel;
