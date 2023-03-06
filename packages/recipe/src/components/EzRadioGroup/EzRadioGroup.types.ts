import {ReactNode, ChangeEvent} from 'react';
import {EzThemeColors} from '../../themes/themes.types';

export type Ref = HTMLDivElement;

export type CustomColors = {
  backgroundColor: EzThemeColors;
  borderColor?: EzThemeColors;
  textColor: EzThemeColors;
};

export type EzRadioGroupCustomColors = {
  selected?: CustomColors;
  unselected?: CustomColors;
};

export type EzRadioGroupTheme = {
  color: EzThemeColors | EzRadioGroupCustomColors;
  variant: 'filled' | 'outlined';
};

export interface EzRadioGroupProps {
  ariaLabel?: string;
  children: ReactNode;
  defaultValue?: any;
  gap?: number | string;
  labelWidth?: number;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  row?: boolean;
  theme?: EzRadioGroupTheme;
  value?: any;
}
