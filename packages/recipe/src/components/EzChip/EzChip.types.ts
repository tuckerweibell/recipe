import {EventHandler, MouseEventHandler, ReactElement} from 'react';
import {EzThemeColors} from '../../themes';

export type Ref = HTMLDivElement;

type StatusVariants =
  | 'neutral'
  | 'success'
  | 'informational'
  | 'attention'
  | 'warning'
  | 'error'
  | 'alert';

export interface EzChipProps {
  label: string;
  className?: string;
  color?: EzThemeColors;
  icon?: ReactElement;
  onClick?: MouseEventHandler<any> | undefined;
  onDelete?: EventHandler<any> | undefined;
  size?: 'small' | 'medium' | 'inherit';
  variant?: 'filled' | 'outlined' | StatusVariants;
}
