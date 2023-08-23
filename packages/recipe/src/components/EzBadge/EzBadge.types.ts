import {ReactNode} from 'react';
import {EzThemeColors} from '../../themes';

export type Ref = HTMLDivElement;

export interface EzBadgeProps {
  /** Horizontal alignment */
  alignX?: 'left' | 'right';
  /** Vertical alignment */
  alignY?: 'top' | 'bottom';
  /** Element the badge describes, like an icon or button */
  children?: ReactNode;
  /** Badge color */
  color?: EzThemeColors;
  /** Hide badge */
  hide?: boolean;
  /** Maximum display number */
  max?: number;
  /** Minimize badge as a dot */
  minimize?: boolean;
  /** Adjust overlap based on child element shape */
  overlap?: 'circular' | 'rectangular';
  /** Show badge wtih 0 value */
  showZero?: boolean;
  /** Value inside badge */
  value: ReactNode;
}
