import React, {forwardRef} from 'react';
import {
  Field,
  Helper,
  InlineError,
  CharacterLimit,
  InputIconContainer,
  CustomInputWrapper,
} from './EzField.styles';
import Label from '../EzLabel';
import {ErrorIcon} from '../Icons';
import {useFocus, useHover, useInput, useUniqueId} from '../../utils/hooks';
import {filterValidProps, wrapEvents} from '../../utils';
import EzChoice from './EzChoice';
import EzDateInput from './EzDateInput';
import EzTimeInput from './EzTimeInput';
import EzTextArea from './EzTextArea';
import {Props, CustomInputProps} from './EzField.types';
import EzSelect from './EzSelect';
import EzTextInput from './EzTextInput';

const inputElements = ['text', 'number'];
const choiceElements = ['radio', 'checkbox'];
const inlineElements = [...inputElements];

const Error = ({showError, error, active}: any) =>
  showError ? (
    <>
      <InputIconContainer>
        <ErrorIcon />
      </InputIconContainer>
      <InlineError active={active}>{error}</InlineError>
    </>
  ) : null;

const EzCustomInput = forwardRef<HTMLElement, CustomInputProps>(({type: Input, ...props}, ref) => (
  <CustomInputWrapper {...props}>
    <Input ref={ref} {...filterValidProps(props)} />
  </CustomInputWrapper>
));

const resolveInputFromType = type => {
  if (choiceElements.includes(type)) return EzChoice;
  if (type === 'date') return EzDateInput;
  if (type === 'select') return EzSelect;
  if (type === 'time') return EzTimeInput;
  if (type === 'textarea') return EzTextArea;
  if (inputElements.includes(type)) return EzTextInput;
  return EzCustomInput;
};

/**
 * Form fields provide inputs for form data, such as text, dates, emails and other data types.
 */
const EzField = forwardRef<HTMLElement, Props>((props, ref) => {
  const id = useUniqueId();
  const labelId = useUniqueId();
  const Input = resolveInputFromType(props.type);
  const {helperText, label, touched, error, type, maxLength, disabled, labelHidden} = props;
  const showInlineError = inlineElements.includes(type as string);
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
    <Field touched={touched} error={error} disabled={disabled} as={fieldType} {...mouseEvents}>
      <Label id={labelId} htmlFor={id} as={labelType} error={showError} position={labelPosition}>
        {label}
      </Label>
      {!showInlineError && <Error showError={showError} error={error} active={active} />}
      {helperText && <Helper>{helperText}</Helper>}
      <Input
        {...props}
        {...wrapEvents(props, {onBlur, onFocus, onChange})}
        id={id}
        name={props.name || id}
        aria-labelledby={labelId}
        ref={ref}
      />
      {showInlineError && <Error showError={showError} error={error} active={active} />}
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
