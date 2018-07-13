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
  100: '#CED4D9',
  600: 'rgba(0, 0, 0, 0.6)',
  700: '#767676',
};

const blueGrays = {
  100: '#8B99A6',
};

export const spacing = [0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4].map(rem => `${rem}rem`);

export const borderRadius = ['1px', '4px'];
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
  small: '0.85rem',
  normal: '1rem',
};

export const fontWeights = {
  base: 400,
  medium: 700,
};
