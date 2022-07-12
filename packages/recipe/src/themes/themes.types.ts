import {CommonColors} from '@mui/material/styles/createPalette';
import {EzPalette} from './ezColors';

type PaletteOptions =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'alert';

export type EzThemeCommonColors = `common.${keyof EzPalette}` | `common.${keyof CommonColors}`;
export type EzThemeColors = PaletteOptions | EzThemeCommonColors | 'inherit';
export type EzThemeSizes = 'small' | 'medium' | 'large' | 'inherit';
