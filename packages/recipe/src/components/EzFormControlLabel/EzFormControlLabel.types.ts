import {ReactElement, ReactNode} from 'react';

export type Ref = HTMLDivElement;

export interface EzFormControlLabelProps {
  control: ReactElement<any, any>;
  label: ReactNode;
}
