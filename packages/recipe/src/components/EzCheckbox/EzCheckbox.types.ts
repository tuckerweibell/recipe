import {ChangeEvent, FocusEventHandler} from 'react';
import {type EzThemeColors} from '../../themes';

export type Ref = HTMLInputElement;

export type EzCheckboxProps = {
  ariaLabel?: string;
  checked?: boolean;
  color?: EzThemeColors;
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  indeterminate?: boolean;
  name?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  size?: string;
  value?: any;
  variant?: 'outlined' | 'filled' | 'filled-inverse';
};
