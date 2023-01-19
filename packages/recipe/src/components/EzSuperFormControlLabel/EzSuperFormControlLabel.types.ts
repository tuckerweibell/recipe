import {ReactElement, ReactNode} from 'react';
import {EzIconTypes} from '../EzIcon/EzIcon.types';

export type Ref = HTMLDivElement;

export interface EzSuperFormControlLabelProps {
  control: ReactElement;
  disabled?: boolean;
  icon: EzIconTypes;
  label?: ReactNode;
  value: any;
}
