import Label from '../EzLabel';

type LabelProps = React.ComponentProps<typeof Label>;

type ChoiceValue = string | number | boolean;

type Choice = {
  label: string;
  value: ChoiceValue;
};

type ListboxProps = {
  type: 'select';
  value?: ChoiceValue;
  options: Choice[];
};

type SingleChoiceProps = {
  type: 'radio';
  value?: ChoiceValue;
  options: Choice[];
  bordered?: boolean;
};

type MultipleChoiceProps = {
  type: 'checkbox';
  value?: ChoiceValue[];
  options: Choice[];
  bordered?: boolean;
};

type HtmlInputProps = {
  type?: 'text' | 'number' | 'textarea';
  value?: string | number;
};

type DateInputProps = {
  type: 'date';
  value: string | number | object;
  minDate?: string | number | object;
  maxDate?: string | number | object;
  filterDate?: (value: string) => boolean;
};

type TimeInputProps = {
  type: 'time';
  value?: string;
  start: string;
  end: string;
  step?: number;
};

type TextAreaInputProps = {
  type: 'textarea';
  size?: 'small' | 'medium' | 'large';
};

type CustomFieldProps = {
  type: React.FC<any> | React.ComponentClass<any>;
  value?: any;
};

type FieldTypeProps =
  | SingleChoiceProps
  | MultipleChoiceProps
  | ListboxProps
  | HtmlInputProps
  | DateInputProps
  | TimeInputProps
  | TextAreaInputProps
  | CustomFieldProps;

type ErrorOrMessage = string | boolean;

type BaseProps = React.InputHTMLAttributes<HTMLInputElement> & {
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
   * Visually hide the label
   * */
  labelSize?: LabelProps['size'];
  /**
   * Restricts the input to the specified length
   */
  maxLength?: number;
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
export type CustomInputProps = Omit<Props, 'type'> & {type: React.ComponentType<any>};
