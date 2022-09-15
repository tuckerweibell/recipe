import {ReactNode} from 'react';

export type Ref = HTMLDivElement;

export interface EzRadioGroupProps {
  ariaLabel?: string;
  children: ReactNode;
  defaultValue?: any;
  name?: string;
  onChange?: () => any;
  row?: boolean;
  value?: any;
}
