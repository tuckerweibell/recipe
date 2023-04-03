import {ReactNode} from 'react';

export type Ref = HTMLDivElement;

export interface EzFormControlProps {
  children: ReactNode;
  error?: boolean;
}
