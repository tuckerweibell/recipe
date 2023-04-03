import {HTMLAttributes, ReactNode} from 'react';

export type Ref = HTMLInputElement;
type ariaKeys = 'aria-label' | 'aria-labelledby';
type domProps = 'className' | 'id';

export interface EzWellProps extends Pick<HTMLAttributes<HTMLDivElement>, ariaKeys | domProps> {
  /**
   * The contents of the Well.
   */
  children: ReactNode;
  /**
   * An accessibility role for the well.
   */
  role?: string;
}
