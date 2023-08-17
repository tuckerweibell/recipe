import {createTheme} from '@mui/material';
import ezTheme from './ezTheme';
import {ezPalette} from '../ezColors';
import type {EzPaletteOptions} from '../themes.types';

const defaultFont = '"Roboto Flex", "Helvetica Neue", Arial, Helvetica, sans-serif';
const headerFont = 'Montserrat, "Helvetica Neue", Arial, Helvetica, sans-serif';

const typography = {
  defaultFont,
  fontFamily: defaultFont,
  headerFont,
};

const palette: EzPaletteOptions = {
  primary: {
    main: ezPalette.blue90,
    light: ezPalette.blue60,
    dark: ezPalette.blue130,
    contrastText: ezPalette.white,
  },
  secondary: {
    main: ezPalette.green100,
    light: ezPalette.green90,
    dark: ezPalette.green110,
    contrastText: ezPalette.white,
  },
};

const ezFulfillmentTheme = createTheme(ezTheme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: defaultFont,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: defaultFont,
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          fontFamily: defaultFont,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: headerFont,
        },
      },
    },
  },
  palette,
  typography,
});

export default ezFulfillmentTheme;
