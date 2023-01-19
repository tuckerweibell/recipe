import {
  type EzFormControlLabelProps,
  type SuperFormControlLabelProps,
} from './EzFormControlLabel.types';

export const isSuperFormControlLabel = (
  props: EzFormControlLabelProps
): props is SuperFormControlLabelProps => (props as SuperFormControlLabelProps).icon != null;
