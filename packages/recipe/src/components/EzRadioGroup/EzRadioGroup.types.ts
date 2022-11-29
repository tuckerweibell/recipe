import {ReactNode, ChangeEvent} from 'react';

export type Ref = HTMLDivElement;

export interface EzRadioGroupProps {
  ariaLabel?: string;
  children: ReactNode;
  defaultValue?: any;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  row?: boolean;
  value?: any;
}
