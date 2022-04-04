import {createTheme} from '@mui/material';
import ezTheme from './ezTheme';

const legacyColors = {
  blue100: '#3f61ff',
  blue200: '#ebf7ff',
  blue300: '#c1def4',
  blue500: '#77b1e2',
  blue600: '#3e90d6',
  blue650: '#3a81be',
  blue700: '#1e70bf',
  blue800: '#316da1',
  blue900: '#2b608e',
  blue950: '#0f4879',
  gray100: '#fafafb',
  gray200: '#f4f7f8',
  gray300: '#e6e9eb',
  gray400: '#ced4d9',
  gray500: '#b2b3b3',
  gray600: '#8b99a6',
  gray700: '#565a5c',
  gray800: '#373d43',
  green100: '#00b373',
  black100: '#151515',
  green200: '#f3f8eb',
  green500: '#c7dfa7',
  green600: '#88bb40',
  green700: '#609b3b',
  purple200: '#f8f3fa',
  purple600: '#9b59b6',
  purple700: '#7f379c',
  red100: '#ff585d',
  red200: '#fdefef',
  red500: '#f7c1c1',
  red600: '#ec5353',
  red700: '#ae4d4d',
  red800: '#c84646',
  red900: '#b03e3e',
  red950: '#972f2f',
  teal200: '#effaf8',
  teal600: '#1bbc9b',
  teal700: '#008066',
  white: '#fff',
  yellow100: '#f9d055',
  yellow200: '#fcf6e5',
  yellow500: '#f4d689',
  yellow600: '#e9a801',
  yellow700: '#926a00',
};

/**
 * @deprecated
 * This legacy theme is provided to support downstream apps that have not yet moved to the new
 * supported themes: ezTheme, ezFulfillmentTheme, and ezMarketplaceTheme. While this theme will
 * provide access to legacy theme properties, it is recommended that you only use this theme as
 * a stop gap until you can move to the new supported themes, which include designer-curated
 * theme properties. This theme is considered deprecated and will be removed in a future version
 * of Recipe.
 */
const ezLegacyTheme = createTheme(ezTheme, {
  palette: {
    primary: {
      main: legacyColors.teal600,
      light: legacyColors.teal200,
      dark: legacyColors.teal700,
    },
    secondary: {
      main: legacyColors.blue100,
      light: legacyColors.blue300,
      dark: legacyColors.blue950,
    },
    error: {
      main: legacyColors.red100,
      light: legacyColors.red500,
      dark: legacyColors.red950,
    },
    warning: {
      main: legacyColors.yellow100,
      light: legacyColors.yellow200,
      dark: legacyColors.yellow700,
    },
    info: {
      main: legacyColors.blue700,
      light: legacyColors.blue500,
      dark: legacyColors.blue950,
    },
    success: {
      main: legacyColors.green600,
      light: legacyColors.green500,
      dark: legacyColors.green700,
    },
    text: {
      primary: legacyColors.black100,
      secondary: legacyColors.gray800,
      disabled: legacyColors.gray400,
    },
    grey: {
      100: legacyColors.gray100,
      200: legacyColors.gray200,
      300: legacyColors.gray300,
      400: legacyColors.gray400,
      500: legacyColors.gray500,
      600: legacyColors.gray600,
      700: legacyColors.gray700,
      800: legacyColors.gray800,
    },
    common: {
      ...legacyColors,
      black: legacyColors.black100,
      white: legacyColors.white,
    },
  },
});

export default ezLegacyTheme;
