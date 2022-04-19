import {createTheme} from '@mui/material';
import ezTheme from './ezTheme';

const ezFulfillmentTheme = createTheme(ezTheme, {
  typography: {
    fontFamily: ['Montserrat', 'Helvetica Neue', 'Arial', 'Helvetica', 'sans-serif'].join(', '),
  },
});

export default ezFulfillmentTheme;
