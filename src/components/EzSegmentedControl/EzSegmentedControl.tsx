import React, {Fragment} from 'react';
import {Option, Fieldset} from './EzSegmentedControl.styles';
import Label from '../EzLabel';

const getId = (name, {value}) => `${name}-${value}`;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Button = {
  value: string;
  label: string;
  disabled?: boolean;
};

type Props = Omit<React.FieldsetHTMLAttributes<any>, 'onChange'> & {
  active?: any;
  label: React.ReactNode;
  labelPosition: 'left' | 'hidden';
  name: string;
  options: Button[];
  onChange: (value: string) => void;
};

/**
 * EzSegmentedControls present mutually exclusive options as buttons.
 */
const EzSegmentedControl: React.FC<Props> = ({
  active,
  className,
  label,
  labelPosition,
  name,
  onChange,
  options,
}) => (
  <Fieldset className={className} role="radiogroup" aria-labelledby={`radiogroup-${name}`}>
    <Label id={`radiogroup-${name}`} position={labelPosition}>
      {label}
    </Label>
    {options.map(option => (
      <Fragment key={option.value}>
        <input
          id={getId(name, option)}
          type="radio"
          name={name}
          {...(onChange
            ? {checked: option.value === active}
            : {defaultChecked: option.value === active})}
          onChange={() => onChange && onChange(option.value)}
          disabled={option.disabled}
        />
        <Option key={option.value} htmlFor={getId(name, option)}>
          {option.label}
        </Option>
      </Fragment>
    ))}
  </Fieldset>
);

/**
 * defaultProps
 * @property {bool} active - No option is selected by default.
 * @property {string} labelPosition - The label is positioned on the left of the control by default.
 */
EzSegmentedControl.defaultProps = {
  labelPosition: 'left',
};

/**
 * @component
 */
export default EzSegmentedControl;
