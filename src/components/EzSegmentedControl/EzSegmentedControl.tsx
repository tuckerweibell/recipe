import React, {Fragment} from 'react';
import {Label, Legend, Fieldset} from './EzSegmentedControl.styles';

const getId = (name, {value}) => `${name}-${value}`;

type Button = {
  value: string;
  label: string;
};

type SegmentedControlProps = {
  active: any;
  label: React.ReactNode;
  labelPosition: 'left' | 'hidden';
  name: string;
  options: Button[];
};

/**
 * EzSegmentedControls present mutually exclusive options as buttons.
 */
const EzSegmentedControl = ({active, className, label, labelPosition, name, onChange, options}) => (
  <Fieldset className={className} role="radiogroup" aria-labelledby={`radiogroup-${name}`}>
    <Legend id={`radiogroup-${name}`} labelPosition={labelPosition}>
      {label}
    </Legend>
    {options.map(option => (
      <Fragment key={option.value}>
        <input
          id={getId(name, option)}
          type="radio"
          name={name}
          defaultChecked={option.value === active}
          onChange={() => onChange && onChange(option.value)}
          disabled={option.disabled}
        />
        <Label key={option.value} htmlFor={getId(name, option)}>
          {option.label}
        </Label>
      </Fragment>
    ))}
  </Fieldset>
);

/**
 * defaultProps
 * @property {bool} active - No option is selected by default.
 * @property {string} labelPosition - The label is positioned on the left of the control by default.
 * @property {object} theme - uses the standard theme by default.
 */
EzSegmentedControl.defaultProps = {
  active: undefined,
  labelPosition: 'left',
};

/**
 * @component
 */
export default EzSegmentedControl;
