import {ReactNode} from 'react';
import {EzThemeColors} from '../../themes';

export type Ref = HTMLDivElement;

export type EzBadgeVariants =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning'
  | 'default';

export interface EzBadgeProps {
  value: ReactNode;
  variant?: EzBadgeVariants;
  backgroundColor?: EzThemeColors;
  fontColor?: EzThemeColors;
  hide?: boolean;
  showZero?: boolean;
  max?: number;
  minimize?: boolean;
  alignX?: 'left' | 'right';
  alignY?: 'top' | 'bottom';
  overlap?: 'circular' | 'rectangular';
  children?: ReactNode;
}
