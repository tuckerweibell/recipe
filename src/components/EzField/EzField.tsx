import React, {forwardRef} from 'react';
import {Field, Helper, InlineError, CharacterLimit, InputIconContainer} from './EzField.styles';
import Label from '../EzLabel';
import {ErrorIcon} from '../Icons';
import {useFocus, useHover, useInput, useUniqueId} from '../../utils/hooks';
import {filterValidProps, wrapEvents} from '../../utils';
import EzChoice from './EzChoice';
import EzDateInput from './EzDateInput';
import EzTimeInput from './EzTimeInput';
import EzTextArea from './EzTextArea';
import {Props} from './EzField.types';
import EzSelect from './EzSelect';

const inputElements = ['text', 'number'];
const choiceElements = ['radio', 'checkbox'];
const dateElements = ['date'];
const htmlElements = [...inputElements, 'select'];
const timeElements = ['time'];

const Error = ({showError, error, active}: any) =>
  showError ? (
    <>
      <InputIconContainer>
        <ErrorIcon />
      </InputIconContainer>
      <InlineError active={active}>{error}</InlineError>
    </>
  ) : null;

const resolveInputFromType = type => {
  if (choiceElements.includes(type)) return EzChoice;
  if (dateElements.includes(type)) return EzDateInput;
  if (type === 'select') return EzSelect;
  if (timeElements.includes(type)) return EzTimeInput;
  if (type === 'textarea') return EzTextArea;
  if (inputElements.includes(type)) return 'input';
  return type;
};

const Input = props => {
  const Component = resolveInputFromType(props.type);
  const inputProps = {
    name: props.name || props.id,
    ...(typeof Component === 'function' ? props : filterValidProps(props)),
  };
  return <Component {...inputProps} />;
};

/**
 * Form fields provide inputs for form data, such as text, dates, emails and other data types.
 */
const EzField = forwardRef<HTMLElement, Props>((props, ref) => {
  const id = useUniqueId();
  const labelId = useUniqueId();
  const {helperText, label, touched, error, type, maxLength, disabled, labelHidden} = props;
  const isHtmlElement = htmlElements.includes(type as string);
  const isChoiceElement = choiceElements.includes(type as string);
  const [focused, {onBlur, onFocus}] = useFocus();
  const [hovered, mouseEvents] = useHover();
  const {value, onChange} = useInput(props.value || '');
  const active = focused || hovered;
  const showError = Boolean(touched && error);
  const fieldType = isChoiceElement ? 'fieldset' : undefined;
  const labelType = isChoiceElement ? 'legend' : 'label';
  const labelPosition = labelHidden ? 'hidden' : undefined;

  return (
    <Field
      touched={touched}
      error={error}
      disabled={disabled}
      as={fieldType}
      {...mouseEvents}
      innerRef={ref}
    >
      <Label id={labelId} htmlFor={id} as={labelType} error={showError} position={labelPosition}>
        {label}
      </Label>
      {!isHtmlElement && <Error showError={showError} error={error} active={active} />}
      {helperText && <Helper>{helperText}</Helper>}
      <Input
        id={id}
        aria-labelledby={labelId}
        {...props}
        {...wrapEvents(props, {onBlur, onFocus, onChange})}
      />
      {isHtmlElement && <Error showError={showError} error={error} active={active} />}
      {'maxLength' in props && typeof value === 'string' && (
        <CharacterLimit>
          {value.length}/{maxLength}
        </CharacterLimit>
      )}
    </Field>
  );
});

/**
 * defaultProps
 * @property {FieldTypes} type - uses 'text' by default.
 */
EzField.defaultProps = {
  type: 'text',
};

/**
 * @component
 */
export default EzField;
