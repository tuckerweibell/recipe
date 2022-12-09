import {KeyboardEventHandler, MouseEventHandler, ReactElement} from 'react';
import {EzThemeCommonColors} from '../../themes';

export type Ref = HTMLButtonElement;

export type EzIconButtonPaletteOptions =
  | 'default'
  | 'error'
  | 'info'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';

export interface EzIconButtonProps {
  ariaHidden?: boolean;
  ariaLabel: string;
  children: ReactElement;
  color?: EzThemeCommonColors | EzIconButtonPaletteOptions;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  variant?: 'filled' | 'outlined' | 'basic';
}
