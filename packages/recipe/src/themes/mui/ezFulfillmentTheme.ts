import {createTheme} from '@mui/material';
import ezTheme from './ezTheme';

const defaultFont = '"Roboto Flex", "Helvetica Neue", Arial, Helvetica, sans-serif';
const headerFont = 'Montserrat, "Helvetica Neue", Arial, Helvetica, sans-serif';

const typography = {
  defaultFont,
  fontFamily: defaultFont,
  headerFont,
};

const ezFulfillmentTheme = createTheme(ezTheme, {
  typography,
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
});

export default ezFulfillmentTheme;
