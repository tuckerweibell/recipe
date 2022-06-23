import {createTheme, PaletteOptions, responsiveFontSizes} from '@mui/material';
import {ezPalette} from '../ezColors';

declare module '@mui/material/styles/createPalette' {
  type EzPalette = typeof ezPalette;

  interface CommonColors extends EzPalette {
    green?: string;
  }
}

const palette: PaletteOptions = {
  primary: {
    main: ezPalette.primary100,
    light: ezPalette.primary90,
    dark: ezPalette.primary110,
    contrastText: ezPalette.neutral100,
  },
  secondary: {
    main: ezPalette.yellow110,
    light: ezPalette.yellow100,
  },
  error: {
    main: ezPalette.alert100,
    light: ezPalette.alert90,
    dark: ezPalette.alert110,
    contrastText: ezPalette.neutral100,
  },
  warning: {
    main: ezPalette.warning100,
    light: ezPalette.warning90,
    dark: ezPalette.warning110,
    contrastText: ezPalette.neutral100,
  },
  info: {
    main: ezPalette.blue100,
    light: ezPalette.blue90,
  },
  success: {
    main: ezPalette.success100,
    light: ezPalette.success90,
  },
  text: {
    primary: ezPalette.neutral170,
    secondary: ezPalette.neutral150,
    disabled: ezPalette.neutral120,
  },
  grey: {
    100: ezPalette.neutral110,
    200: ezPalette.neutral120,
    300: ezPalette.neutral130,
    500: ezPalette.neutral140,
    700: ezPalette.neutral150,
    800: ezPalette.neutral160,
    900: ezPalette.neutral170,
  },
  common: {
    ...ezPalette,
    black: ezPalette.neutral170,
    green: ezPalette.primary100,
    white: ezPalette.neutral100,
  },
};

declare module '@mui/material/styles/createTypography' {
  type IconSizes = 'small' | 'medium' | 'large';

  interface FontStyle {
    icon: {
      size: Record<IconSizes, number>;
    };
  }
}

const typography = {
  fontFamily: ['Lato', 'Helvetica Neue', 'Arial', 'Helvetica', 'sans-serif'].join(', '),
  icon: {
    size: {
      small: 16,
      medium: 24,
      large: 32,
    },
  },
};

const ezTheme = responsiveFontSizes(
  createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 900,
        lg: 1061,
        xl: 1536,
      },
    },
    palette,
    typography,
  })
);

export default ezTheme;
