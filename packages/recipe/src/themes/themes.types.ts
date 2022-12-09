import {CommonColors} from '@mui/material/styles/createPalette';
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

export type EzThemeCommonColors = `common.${keyof EzPalette}` | `common.${keyof CommonColors}`;
export type EzThemeColors = PaletteOptions | EzThemeCommonColors | 'inherit';
export type EzThemeSizes = 'small' | 'medium' | 'large' | 'inherit';
