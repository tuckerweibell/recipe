import {type ReactElement, type ReactNode} from 'react';

export type Ref = HTMLDivElement;

export interface EzSuperFormControlLabelProps {
  checked?: boolean | undefined;
  control: ReactElement;
  disabled?: boolean;
  icon: ReactNode;
  label?: ReactNode;
  value?: any;
}
