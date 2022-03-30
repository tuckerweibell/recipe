import {createTheme, PaletteOptions} from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  type EzPalette = typeof ezPalette;

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface CommonColors extends EzPalette {}
}

const ezPalette = {
  primary100: '#00b373', // ezGreen
  yellow110: '#f9d055',
  red100: '#ff585d', // guava
  blue100: '#3f61ff',
  neutral120: '#f5f7f7',
  // additional supported colors to follow
} as const;

const palette: PaletteOptions = {
  common: ezPalette,
};

const ezTheme = createTheme({
  palette,
});

export default ezTheme;
