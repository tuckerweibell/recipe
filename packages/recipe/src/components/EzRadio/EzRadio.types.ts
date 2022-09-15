import {ChangeEvent} from 'react';
import {type EzThemeColors} from '../../themes';

export type Ref = HTMLDivElement;

export interface EzRadioProps {
  ariaLabel?: string;
  checked?: boolean;
  color?: EzThemeColors;
  disabled?: boolean;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  size?: string;
  value?: any;
  variant?: 'outlined' | 'filled';
}
