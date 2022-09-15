import {ReactElement, ReactNode} from 'react';
import {EzIconTypes} from '../EzIcon/EzIcon.types';

export type Ref = HTMLDivElement;

export interface EzSuperFormControlLabelProps {
  control: ReactElement<any, any>;
  disabled?: boolean;
  icon?: EzIconTypes;
  label: ReactNode;
  value: any;
}
