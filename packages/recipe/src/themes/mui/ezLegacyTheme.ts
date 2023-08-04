import {createTheme} from '@mui/material';
import ezTheme from './ezTheme';
import {legacyColors} from '../ezColors';

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
