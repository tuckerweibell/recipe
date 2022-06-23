import React, {Fragment} from 'react';
import Label from '../EzLabel';
import theme from '../theme.config';
import {clsx} from '../../utils';

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
  labelPosition?: 'left' | 'hidden';
  name: string;
  options: Button[];
  onChange: (value: string) => void;
};

const optionLabel = theme.css({
  cursor: 'pointer',
  backgroundColor: '$segmented-control-bg',
  border: '$segmented-control-border',
  boxShadow: '$segmented-control-box-shadow',
  color: '$segmented-control-color',
  display: 'block',
  flex: 1,
  /* 
    should be equivalent in size to inputs and buttons, but since inputs can't be a line-height lower than 1.25em
    we have to use a line-height of 1.25rem and deduct the additional 0.25rem from the vertical padding
  */
  lineHeight: '$segmented-control-line-height',
  padding: '$segmented-control-label-py $segmented-control-label-px',
  fontSize: '$segmented-control-font-size',
  textAlign: 'center',
  marginLeft: '$segmented-control-ml',
  flexBasis: '$segmented-control-flex-basis',
  userSelect: 'none',
  '&:first-of-type': {
    marginLeft: 0,
    borderTopLeftRadius: '$segmented-control-border-radius',
    borderBottomLeftRadius: '$segmented-control-border-radius',
  },
  '&:last-of-type': {
    borderTopRightRadius: '$segmented-control-border-radius',
    borderBottomRightRadius: '$segmented-control-border-radius',
  },
  '&:hover': {
    backgroundColor: '$segmented-control-bg-hover',
    borderColor: '$segmented-control-border-hover',
  },
  'input:checked + &': {
    color: '$segmented-control-color-input-checked',
    background: '$segmented-control-bg-input-checked',
    border: '$segmented-control-border-input-checked',
    position: 'relative',
  },
  'input:active + &': {
    background: '$segmented-control-bg-input-active',
  },
  'input:focus + &': {
    boxShadow: '$segmented-control-box-shadow-input-focus',
  },
  'input:disabled + &': {
    cursor: 'default',
    opacity: '0.45',
    pointerEvents: 'none',
  },
});

const fieldset = theme.css({
  display: 'flex',
  alignItems: 'center',
  '& input': {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '$segmented-control-fieldset-h',
    margin: '$segmented-control-fieldset-m',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '$segmented-control-fieldset-w',
  },
});

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
  <div
    className={clsx(fieldset(), className)}
    role="radiogroup"
    aria-labelledby={`radiogroup-${name}`}
  >
    <Label
      id={`radiogroup-${name}`}
      position={labelPosition === 'left' ? 'side' : labelPosition}
      use="primary"
      as="div"
    >
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
        <label className={optionLabel()} key={option.value} htmlFor={getId(name, option)}>
          {option.label}
        </label>
      </Fragment>
    ))}
  </div>
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
