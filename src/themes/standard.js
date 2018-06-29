const white = '#FFFFFF';
const black = '#0F131A';

const blues = {
  100: '#2484d7',
  200: '#3E90D6',
};

const reds = {
  100: '#db2828',
};

const greys = {
  100: '#CED4D9',
};

export const spacing = [0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4].map(rem => `${rem}rem`);

export const borderRadius = ['1px', '4px'];
export const borderWidth = ['1px', '2px', '4px'];

export const colors = {
  primary: {
    main: blues[100],
    contrastText: white,
  },
  destructive: {
    main: reds[100],
    contrastText: white,
  },
  white,
  black,
  blues,
  greys,
};
