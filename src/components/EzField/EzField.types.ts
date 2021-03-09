import {Key} from 'react';
import Label from '../EzLabel';

type LabelProps = React.ComponentProps<typeof Label>;

type ChoiceValue = string | number | boolean;

type Choice = {
  label: string;
  value: ChoiceValue;
  disabled?: boolean;
};

type ListboxProps = {
  type: 'select';
  value?: ChoiceValue;
  options: Choice[];
  /** Handler that is called when the selection changes. */
  onSelectionChange?: (key: Key) => any;
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

type EmailProps = {
  type: 'email';
};

type HtmlInputProps = {
  type?: 'text' | 'number' | 'textarea' | 'password';
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

type AutosuggestInputProps = {
  type: 'autosuggest';
  /** The currently selected value in the collection. */
  value?: ChoiceValue;
  /** The filtered list of suggested values to present the user. */
  options: Choice[];
  /** Handler that is called when text is typed into the combobox. */
  onFilter?: (value: string) => void;
  /** Handler that is called when the selection changes. */
  onSelectionChange?: (key: Key) => any;
};

type CustomFieldProps = {
  type: React.FC<any> | React.ComponentClass<any>;
  value?: any;
};

type FieldTypeProps =
  | SingleChoiceProps
  | MultipleChoiceProps
  | ListboxProps
  | EmailProps
  | HtmlInputProps
  | DateInputProps
  | TimeInputProps
  | TextAreaInputProps
  | AutosuggestInputProps
  | CustomFieldProps;

type ErrorOrMessage = string | boolean;

type BaseProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> & {
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

export interface FocusState {
  /** The current focused key in the collection. */
  readonly focusedKey: Key;
  /** Sets the focused key. */
  setFocusedKey(key: Key): void;
}
export interface SelectionState extends FocusState {
  readonly selectedKey: Key;
  /** Sets the selected key in the collection. */
  replaceSelection(key: Key): void;
}

export type Props = FieldTypeProps & BaseProps;
export type CustomInputProps = Omit<Props, 'type'> & {type: React.ComponentType<any>};
