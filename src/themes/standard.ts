const brandColors = {
  ezOrange: '#ff6b1e',
  ezLogoGreen: '#88bb40',
  ezGreen: '#609b3b',
  ezBlue: '#3e90d6',
};

const white = '#ffffff';
const black = '#000000';

const grays = {
  0: white,
  100: '#fafafb',
  200: '#f4f7f8',
  300: '#e6e9eb',
  400: '#ced4d9',
  500: '#b2b3b3',
  600: '#8b99a6',
  700: '#565a5c',
  800: '#373d43',
  900: '#1b2023',
  1000: black,
};

const blues = {
  100: '#f6fbff',
  200: '#ebf7ff',
  300: '#c1def4',
  400: '#b1d5f2',
  500: '#77b1e2',
  600: brandColors.ezBlue,
  700: '#1e70bf',
};

const reds = {
  lighter: '#fdefef',
  light: '#f7c1c1',
  base: '#ec5353',
  dark: '#ae4d4d',
};

const orange = brandColors.ezOrange;

const yellows = {
  lighter: '#fcf6e5',
  light: '#f4d689',
  base: '#e9a801',
  dark: '#926a00',
};

const greens = {
  lighter: '#f3f8eb',
  light: '#c7dfa7',
  base: brandColors.ezLogoGreen,
  dark: brandColors.ezGreen,
};

const teals = {
  lighter: '#effaf8',
  light: '#6fd5c0',
  base: '#1bbc9b',
  dark: '#008066',
};

const purples = {
  lighter: '#f8f3fa',
  light: '#b98acb',
  base: '#9b59b6',
  dark: '#7f379c',
};

export const colors = {
  primary: {
    main: blues[600],
    contrastText: white,
  },
  destructive: {
    main: reds.base,
    contrastText: white,
  },
  white,
  black,
  brandColors,
  grays,
  blues,
  reds,
  orange,
  yellows,
  greens,
  teals,
  purples,
};

export const baseFontSize = '14px';

const rem = pixels => `${pixels / +baseFontSize.replace('px', '')}rem`;

const em = pixels => `${pixels / 16}em`;

export const spacing = {
  xs2: rem(4),
  xs: rem(8),
  sm: rem(12),
  md: rem(16),
  lg: rem(20),
  xl: rem(24),
  xl2: rem(32),
  xl3: rem(48),
  xl4: rem(60),
  xl5: rem(84),
};

export const borderRadius = ['1px', '4px', '6px'];
export const borderWidth = ['1px', '2px', '4px'];

export const lineHeights = {
  heading: 1.35,
};

export const fontSizes = {
  100: rem(10),
  200: rem(12),
  300: rem(14),
  400: rem(16),
  500: rem(18),
  600: rem(21),
  700: rem(32),
  900: rem(60),
};

export const fontWeights = {
  normal: 400,
  bold: 700,
};

export const breakpoints = {medium: em(768), large: em(1061)};
