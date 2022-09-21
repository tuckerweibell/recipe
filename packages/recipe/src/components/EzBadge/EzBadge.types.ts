import {ReactNode} from 'react';
import {EzThemeColors} from '../../themes';

export type Ref = HTMLDivElement;

export interface EzBadgeProps {
  alignX?: 'left' | 'right';
  alignY?: 'top' | 'bottom';
  children?: ReactNode;
  color?: EzThemeColors;
  hide?: boolean;
  max?: number;
  minimize?: boolean;
  overlap?: 'circular' | 'rectangular';
  showZero?: boolean;
  value: ReactNode;
}
