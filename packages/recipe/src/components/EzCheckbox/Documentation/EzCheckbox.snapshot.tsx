import React from 'react';
import EzCheckbox from '../EzCheckbox';
import EzFormControlLabel from '../../EzFormControlLabel';

const EzCheckboxSnapshot = () => (
  <EzFormControlLabel
    control={<EzCheckbox defaultChecked name="checkbox" />}
    label="Checkbox"
    value="checkbox"
  />
);

export default EzCheckboxSnapshot;
