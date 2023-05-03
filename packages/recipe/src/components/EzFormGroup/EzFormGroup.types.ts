import {ReactNode} from 'react';
import {EzThemeColors} from '../../themes/themes.types';

export type Ref = HTMLDivElement;

export type CustomColors = {
  backgroundColor: EzThemeColors;
  borderColor?: EzThemeColors;
  iconColor?: EzThemeColors;
  textColor: EzThemeColors;
};

export type EzFormGroupCustomColors = {
  selected?: CustomColors;
  unselected?: CustomColors;
  hover?: CustomColors;
};

export type EzFormGroupTheme = {
  color: EzThemeColors | EzFormGroupCustomColors;
  variant: 'filled' | 'outlined';
};

export interface EzFormGroupProps {
  ariaLabel?: string;
  children: ReactNode;
  gap?: number | string;
  labelWidth?: number;
  row?: boolean;
  theme?: EzFormGroupTheme;
}
