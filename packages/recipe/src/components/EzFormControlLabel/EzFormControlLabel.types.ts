import type {ReactElement, ReactNode} from 'react';

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
  labelIcons?: ReactNode[];
};

export type SuperFormControlLabelProps = EzFormControlLabelCommonProps & {
  icon: ReactNode;
  label?: ReactNode;
};

export type EzFormControlLabelProps = FormControlLabelProps | SuperFormControlLabelProps;
