import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {standard} from '../../themes';
import {Label, Legend, Fieldset} from './styles';

const getId = (name, {value}) => `${name}-${value}`;

/**
 * EzSegmentedControls present mutually exclusive options as buttons.
 */
const EzSegmentedControl = ({
  active,
  className,
  label,
  labelPosition,
  name,
  onChange,
  options,
  theme,
}) => (
  <Fieldset className={className} role="radiogroup" aria-labelledby={`radiogroup-${name}`}>
    <Legend id={`radiogroup-${name}`} labelPosition={labelPosition} theme={theme}>
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
        <Label theme={theme} key={option.value} htmlFor={getId(name, option)}>
          {option.label}
        </Label>
      </Fragment>
    ))}
  </Fieldset>
);

EzSegmentedControl.propTypes = {
  /**
   * The value that represents the active option.
   */
  active: PropTypes.oneOfType([PropTypes.any]),
  /**
   * Add label text describing the purpose of the group of options.
   */
  label: PropTypes.node.isRequired,
  /**
   * Optionally position (or visually hide) the label.
   */
  labelPosition: PropTypes.oneOf(['left', 'hidden']),
  /**
   * A unique name identifying the group of controls that make up the segmented control options.
   */
  name: PropTypes.string.isRequired,
  /**
   * An array of objects representing each button in the segmented control. Each object must have:
   * - value: the value to provide if this option is selected
   * - label: the label used to describe the option value
   */
  options: PropTypes.array.isRequired,
  /**
   * The theme controlling the default styles for the segmented control.
   */
  theme: PropTypes.shape({
    colors: PropTypes.object,
  }),
};

/**
 * defaultProps
 * @property {bool} active - No option is selected by default.
 * @property {stribg} labelPosition - The label is positioned on the left of the control by default.
 * @property {bool} theme - uses the standard theme by default.
 */

EzSegmentedControl.defaultProps = {
  active: undefined,
  labelPosition: 'left',
  theme: standard,
};

/**
 * @component
 */
export default EzSegmentedControl;
