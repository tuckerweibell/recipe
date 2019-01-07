type ChoiceValue = string | number | boolean;

type Choice = {
  label: string;
  value: ChoiceValue;
};

type ChoiceProps = {};

type SingleChoiceProps = {
  type: 'radio';
  value?: ChoiceValue;
  options: Choice[];
};

type MultipleChoiceProps = ChoiceProps & {
  type: 'checkbox';
  value?: ChoiceValue[];
  options: Choice[];
};

type HtmlInputProps = {
  type?: 'text' | 'number' | 'textarea';
  value?: string | number;
};

type CustomFieldProps = {
  type: React.SFC<any> | React.ComponentClass<any>;
  value?: any;
};

type FieldTypeProps = SingleChoiceProps | MultipleChoiceProps | HtmlInputProps | CustomFieldProps;

type ErrorOrMessage = string | boolean;

type BaseProps = {
  /**
   * Fires when the input loses focus
   */
  onBlur?: React.FocusEventHandler;
  /**
   * Fires when the value is changed
   * */
  onChange?: React.ChangeEventHandler;
  /**
   * Fires when the input is focused
   * */
  onFocus?: React.FocusEventHandler;
  /**
   * Disable the input
   */
  disabled?: boolean;
  /**
   * Display that the input has an error
   */
  error?: ErrorOrMessage;
  /**
   * Additional hint text to display
   */
  helperText?: string;
  /**
   * Label for the input
   */
  label: string;
  /**
   * Visually hide the label
   * */
  labelHidden?: boolean;
  /**
   * Restricts the input to the specified length
   */
  maxLength?: number;
  /**
   * The name of the inputs
   */
  name?: string;
  /**
   * Text hint to display inside the input
   */
  placeholder?: string;
  /**
   * Text to display before the input
   */
  prefix?: string;
  /**
   * Text to display after the input
   */
  suffix?: string;
  /**
   * Indicates that the input has been interacted with
   */
  touched?: boolean;
};

export type Props = FieldTypeProps & BaseProps;
