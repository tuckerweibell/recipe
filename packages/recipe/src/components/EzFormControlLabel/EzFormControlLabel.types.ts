import {ReactElement, ReactNode} from 'react';
import {EzIconTypes} from '../EzIcon/EzIcon.types';

export type Ref = HTMLDivElement;

export type EzFormControlLabelCommonProps = {
  checked?: boolean;
  control: ReactElement;
  disabled?: boolean;
  value: any;
};

export type FormControlLabelProps = EzFormControlLabelCommonProps & {
  helperText?: string;
  label: ReactNode;
  labelIcons?: EzIconTypes[];
};

export type SuperFormControlLabelProps = EzFormControlLabelCommonProps & {
  icon: EzIconTypes;
  label?: ReactNode;
};

export type EzFormControlLabelProps = FormControlLabelProps | SuperFormControlLabelProps;
