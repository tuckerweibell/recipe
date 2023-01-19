import {ReactElement, ChangeEvent} from 'react';
import {EzThemeColors} from '../../themes/themes.types';

export type Ref = HTMLDivElement;

type EzRadioButtonThemeColors = {
  backgroundColor: EzThemeColors;
  borderColor?: EzThemeColors;
  textColor: EzThemeColors;
};

type EzRadioButtonTheme = {
  selected?: EzRadioButtonThemeColors;
  unselected?: EzRadioButtonThemeColors;
};

export type EzRadioGroupTheme = {
  color: EzThemeColors | EzRadioButtonTheme;
  variant: 'filled' | 'outlined';
};

export interface EzRadioGroupProps {
  ariaLabel?: string;
  children: ReactElement;
  defaultValue?: any;
  gap?: number | string;
  labelWidth?: number;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  row?: boolean;
  theme?: EzRadioGroupTheme;
  value?: any;
}
