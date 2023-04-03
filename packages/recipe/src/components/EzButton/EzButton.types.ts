import {
  ButtonHTMLAttributes,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from 'react';
import {EzThemeColors} from '../../themes';

export type Ref = HTMLButtonElement;

export type EzButtonCommonProps = {
  disabled?: boolean;
  loading?: boolean;
  onClick?: MouseEventHandler<any> | undefined;
};

export type EzButtonLegacyCommonProps = EzButtonCommonProps & {
  /** @deprecated */
  destructive?: boolean;
  /** @deprecated */
  disabledMessage?: string;
};

export type EzButtonLegacyRegularProps = EzButtonLegacyCommonProps & {
  /** @deprecated */
  use: 'primary' | 'secondary';
};

export type EzButtonLegacyTertiaryProps = Omit<EzButtonLegacyCommonProps, 'loading'> & {
  /** @deprecated */
  icon?: ReactElement;
  /** @deprecated */
  use: 'tertiary';
};

export type EzButtonLegacyProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'as' | 'css'> &
  (EzButtonLegacyRegularProps | EzButtonLegacyTertiaryProps);

export type EzButtonMuiProps = EzButtonCommonProps & {
  ariaHidden?: boolean;
  ariaLabel?: string;
  children: string | ReactNode;
  color?: EzThemeColors | 'destructive';
  endIcon?: ReactElement;
  fontSize?: 'small' | 'medium' | 'large' | 'inherit';
  onKeyDown?: KeyboardEventHandler<any> | undefined;
  size?: 'small' | 'medium' | 'large';
  startIcon?: ReactElement;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'filled' | 'outlined' | 'text';
};

export type EzButtonProps =
  | (EzButtonLegacyProps & {legacy: true})
  | (EzButtonMuiProps & {legacy?: false | null | undefined});
