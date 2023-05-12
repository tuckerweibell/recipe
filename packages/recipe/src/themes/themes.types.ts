import {CommonColors} from '@mui/material/styles/createPalette';
import {PaletteOptions as MuiPaletteOptions, SimplePaletteColorOptions} from '@mui/material';
import {EzPalette} from './ezColors';

export type PaletteOptions =
  | 'alert'
  | 'error'
  | 'info'
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';

export type EzPaletteOptions = Omit<
  MuiPaletteOptions,
  'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'alert' | 'neutral'
> & {
  primary?: SimplePaletteColorOptions;
  secondary?: SimplePaletteColorOptions;
  error?: SimplePaletteColorOptions;
  warning?: SimplePaletteColorOptions;
  info?: SimplePaletteColorOptions;
  success?: SimplePaletteColorOptions;
  alert?: SimplePaletteColorOptions;
  neutral?: SimplePaletteColorOptions;
};

export type EzThemeCommonColors = `common.${keyof EzPalette}` | `common.${keyof CommonColors}`;
export type EzThemeColors = PaletteOptions | EzThemeCommonColors | 'inherit';
export type EzThemeIconSizes = 'small' | 'medium' | 'large' | 'xlarge' | 'inherit';
