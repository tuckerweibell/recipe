import {ReactNode} from 'react';

export type Ref = HTMLDivElement;

export interface EzFormGroupProps {
  ariaLabel?: string;
  children: ReactNode;
  gap?: number | string;
  row?: boolean;
}
