import {ChangeEvent, FocusEventHandler} from 'react';
import {type EzThemeColors} from '../../themes';

export type Ref = HTMLInputElement;

export type EzCheckboxCommonProps = {
  id?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
};

export type EzCheckboxLegacyAcknowledgementProps = EzCheckboxCommonProps & {
  /** @deprecated */
  acknowledgement: true;
  /** @deprecated */
  terms: string;
};

export type EzCheckboxLegacyClassicProps = EzCheckboxCommonProps & {
  acknowledgement?: boolean;
  terms?: undefined;
};

export type EzCheckboxLegacyProps = (
  | EzCheckboxLegacyAcknowledgementProps
  | EzCheckboxLegacyClassicProps
) & {
  /** @deprecated */
  className?: string;
  /** @deprecated */
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
};

export type EzCheckboxMuiProps = EzCheckboxCommonProps & {
  ariaLabel?: string;
  color?: EzThemeColors;
  defaultChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  size?: string;
  value?: any;
  variant?: 'outlined' | 'filled' | 'filled-inverse';
};

export type EzCheckboxProps =
  | (EzCheckboxLegacyProps & {legacy: true})
  | (EzCheckboxMuiProps & {legacy?: false | null | undefined});
