import {ReactNode} from 'react';
import {EzThemeColors} from '../../themes';

export type Ref = HTMLDivElement;

export type BadgeVariants =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

export interface EzBadgeProps {
  value: ReactNode;
  variant?: BadgeVariants;
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
