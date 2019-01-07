import React from 'react';
import {
  Field,
  Label,
  Helper,
  InlineError,
  CharacterLimit,
  InputIconContainer,
} from './EzField.styles';
import {ErrorIcon} from '../Icons';
import {use, useRef, useFocus, useHover, useInput} from '../../utils/hooks';
import {filterValidProps} from '../../utils';
import EzChoice from './EzChoice';
import {Props} from './EzField.types';

const inputElements = ['text', 'number'];
const choiceElements = ['radio', 'checkbox'];
const htmlElements = [...inputElements, 'textarea'];

const getUniqueId = (() => {
  let index = 1;
  return () => `control$${index++}`;
})();

const Error = ({touched, error, active}: any) =>
  touched && error ? (
    <>
      <InputIconContainer>
        <ErrorIcon />
      </InputIconContainer>
      <InlineError active={active}>{error}</InlineError>
    </>
  ) : null;

const resolveInputFromType = type => {
  if (choiceElements.includes(type)) return EzChoice;
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

const wrapEvent = (handler: React.ReactEventHandler, callback: React.ReactEventHandler) => {
  if (!handler) return callback;
  return (event: React.SyntheticEvent) => {
    if (handler) handler(event);
    if (!event.defaultPrevented) {
      callback(event);
    }
  };
};

const wrapEvents = (props, events) =>
  Object.assign({}, ...Object.keys(events).map(e => ({[e]: wrapEvent(props[e], events[e])})));

/**
 * Form fields provide inputs for form data, such as text, dates, emails and other data types.
 */
const EzField = use((props: Props) => {
  const {current: id} = useRef(getUniqueId());
  const {helperText, label, touched, error, type, maxLength, disabled, labelHidden} = props;
  const isHtmlElement = htmlElements.includes(type as string);
  const isChoiceElement = choiceElements.includes(type as string);
  const [focused, {onBlur, onFocus}] = useFocus();
  const [hovered, mouseEvents] = useHover();
  const {value, onChange} = useInput(props.value || '');
  const active = focused || hovered;
  const fieldType = isChoiceElement ? 'fieldset' : undefined;
  const labelType = isChoiceElement ? 'legend' : undefined;

  return (
    <Field touched={touched} error={error} disabled={disabled} as={fieldType} {...mouseEvents}>
      <Label htmlFor={id} as={labelType} touched={touched} error={error} labelHidden={labelHidden}>
        {label}
      </Label>
      {!isHtmlElement && <Error touched={touched} error={error} active={active} />}
      {helperText && <Helper>{helperText}</Helper>}
      <Input id={id} {...props} {...wrapEvents(props, {onBlur, onFocus, onChange})} />
      {isHtmlElement && <Error touched={touched} error={error} active={active} />}
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
