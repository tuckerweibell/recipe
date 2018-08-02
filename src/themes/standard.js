const white = '#FFFFFF';
const black = '#0F131A';

const blues = {
  50: '#EBF7FF',
  100: '#77b1e2',
  200: '#2484d7',
  300: '#3E90D6',
};

const reds = {
  100: '#db2828',
};

const grays = {
  100: '#f4f7f8',
  400: '#CED4D9',
  600: 'rgba(0, 0, 0, 0.6)',
  700: '#767676',
};

const blueGrays = {
  100: '#8B99A6',
};

export const baseFontSize = '14px';

const rem = pixels => `${pixels / baseFontSize.replace('px', '')}rem`;

export const spacing = {
  xs2: rem(4),
  xs: rem(8),
  sm: rem(12),
  md: rem(16),
  lg: rem(20),
  xl: rem(24),
  xl2: rem(36),
  xl3: rem(48),
  xl4: rem(60),
  xl5: rem(84),
};

export const borderRadius = ['1px', '4px', '6px'];
export const borderWidth = ['1px', '2px', '4px'];

export const colors = {
  primary: {
    main: blues[200],
    contrastText: white,
  },
  destructive: {
    main: reds[100],
    contrastText: white,
  },
  white,
  black,
  blues,
  grays,
  blueGrays,
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
