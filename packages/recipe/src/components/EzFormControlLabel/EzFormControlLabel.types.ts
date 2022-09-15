import {ReactElement, ReactNode} from 'react';
import {EzIconTypes} from '../EzIcon/EzIcon.types';

export type Ref = HTMLDivElement;

export interface EzFormControlLabelProps {
  control: ReactElement<any, any>;
  disabled?: boolean;
  helperText?: string;
  icon?: EzIconTypes;
  label: ReactNode;
  labelIcons?: EzIconTypes[];
  value: any;
}
