const CONTRAST_LIGHT = '#fff';
const CONTRAST_DARK = '#151515';

type EzColors = typeof ezColors;
export type EzColorsCategories = keyof EzColors;

export type EzPalette = Record<
  {
    [K in EzColorsCategories]-?: keyof EzColors[K];
  }[EzColorsCategories],
  string
>;

export type EzColor = {
  name: string;
  alternateName?: string;
  color: string;
  contrastColor: string;
};

export const ezColors = {
  black: {
    black: {
      name: 'Black', // was neutral 170
      alternateName: 'Black Olive',
      color: '#151515',
      contrastColor: CONTRAST_LIGHT,
    },
  },
  blue: {
    blue120: {
      name: 'Blue 120',
      color: '#0f4879',
      contrastColor: CONTRAST_LIGHT,
    },
    blue110: {
      name: 'Blue 110',
      color: '#273da3',
      contrastColor: CONTRAST_LIGHT,
    },
    blue100: {
      name: 'Blue 100',
      color: '#3f61ff',
      contrastColor: CONTRAST_LIGHT,
    },
    blue90: {
      name: 'Blue 90',
      color: '#3e90d6',
      contrastColor: CONTRAST_DARK,
    },
    blue80: {
      name: 'Blue 80',
      color: '#c1def4',
      contrastColor: CONTRAST_DARK,
    },
    blue75: {
      name: 'Blue 75',
      color: `#ebf7ff`,
      contrastColor: CONTRAST_DARK,
    },
    blue70: {
      name: 'Blue 70', // was blue 90
      color: '#f2f4ff',
      contrastColor: CONTRAST_DARK,
    },
  },
  green: {
    green120: {
      name: 'Green 120', // was primary 120
      alternateName: 'Kale',
      color: '#1d3c34',
      contrastColor: CONTRAST_LIGHT,
    },
    green110: {
      name: 'Green 110', // was primary 110
      alternateName: 'Cilantro',
      color: '#034a34',
      contrastColor: CONTRAST_LIGHT,
    },
    green108: {
      name: 'Green 108',
      color: '#026b0c',
      contrastColor: CONTRAST_LIGHT,
    },
    green105: {
      name: 'Green 105',
      color: '#407560',
      contrastColor: CONTRAST_LIGHT,
    },
    green103: {
      name: 'Green 103', // was success 100
      color: '#00a40f',
      contrastColor: CONTRAST_LIGHT,
    },
    green100: {
      name: 'Green 100', // was primary 100
      alternateName: 'ezGreen',
      color: '#00b373',
      contrastColor: CONTRAST_LIGHT,
    },
    green95: {
      name: 'Green 95', // was success 90
      color: '#f0fae4',
      contrastColor: CONTRAST_DARK,
    },
    green90: {
      name: 'Green 90', // was primary 90
      color: '#f0faf7',
      contrastColor: CONTRAST_DARK,
    },
  },
  grey: {
    grey160: {
      name: 'Grey 160', // was neutral 160
      color: '#565a5c',
      contrastColor: CONTRAST_LIGHT,
    },
    grey150: {
      name: 'Grey 150', // was neutral 150
      color: '#787878',
      contrastColor: CONTRAST_LIGHT,
    },
    grey140: {
      name: 'Grey 140', // was neutral 140
      color: '#b2b3b3',
      contrastColor: CONTRAST_LIGHT,
    },
    grey130: {
      name: 'Grey 130', // was neutral 130
      color: '#e5e6e6',
      contrastColor: CONTRAST_DARK,
    },
    grey120: {
      name: 'Grey 120', // was neutral 120
      color: '#f5f7f7',
      contrastColor: CONTRAST_DARK,
    },
    grey110: {
      name: 'Grey 110', // was neutral 110
      color: '#fafbfc',
      contrastColor: CONTRAST_DARK,
    },
  },
  orange: {
    orange110: {
      name: 'Orange 110', // was warning 110
      color: '#926a00',
      contrastColor: CONTRAST_LIGHT,
    },
    orange100: {
      name: 'Orange 100', // was warning 100
      color: '#e9a801',
      contrastColor: CONTRAST_LIGHT,
    },
    orange90: {
      name: 'Orange 90', // was warning 90
      color: '#fff3ce',
      contrastColor: CONTRAST_DARK,
    },
    orange80: {
      name: 'Orange 80', // was warning 80
      color: '#fcf6e5',
      contrastColor: CONTRAST_DARK,
    },
  },
  purple: {
    purple110: {
      name: 'Purple 110',
      color: '#5f2975',
      contrastColor: CONTRAST_LIGHT,
    },
    purple100: {
      name: 'Purple 100',
      color: '#7f379c',
      contrastColor: CONTRAST_LIGHT,
    },
    purple90: {
      name: 'Purple 90',
      color: '#f8f3fa',
      contrastColor: CONTRAST_DARK,
    },
  },
  red: {
    red120: {
      name: 'Red 120', // was alert 110
      color: '#972f2f',
      contrastColor: CONTRAST_LIGHT,
    },
    red110: {
      name: 'Red 110', // was alert 100
      color: '#d3302f',
      contrastColor: CONTRAST_LIGHT,
    },
    red100: {
      name: 'Red 100',
      alternateName: 'Guava',
      color: '#ff585d',
      contrastColor: CONTRAST_LIGHT,
    },
    red90: {
      name: 'Red 90', // was alert 90
      color: '#f7c1c1',
      contrastColor: CONTRAST_DARK,
    },
    red80: {
      name: 'Red 80', // was alert 80
      color: '#fdefef',
      contrastColor: CONTRAST_DARK,
    },
  },
  yellow: {
    yellow110: {
      name: 'Yellow 110',
      color: '#cfb108',
      contrastColor: CONTRAST_DARK,
    },
    yellow100: {
      name: 'Yellow 100', // was yellow 110
      color: '#f9d055',
      contrastColor: CONTRAST_DARK,
    },
    yellow90: {
      name: 'Yellow 90', // was yellow 100
      alternateName: 'Vanilla Frosting',
      color: '#f9fae4',
      contrastColor: CONTRAST_DARK,
    },
  },
  white: {
    white: {
      name: 'White', // was neutral 100
      alternateName: 'White',
      color: '#fff',
      contrastColor: CONTRAST_DARK,
    },
  },
} as const;

export const legacyColors = {
  blue100: '#3f61ff',
  blue200: '#ebf7ff',
  blue300: '#c1def4',
  blue500: '#77b1e2',
  blue600: '#3e90d6',
  blue650: '#3a81be',
  blue700: '#1e70bf',
  blue800: '#316da1',
  blue900: '#2b608e',
  blue950: '#0f4879',
  gray100: '#fafafb',
  gray200: '#f4f7f8',
  gray300: '#e6e9eb',
  gray400: '#ced4d9',
  gray500: '#b2b3b3',
  gray600: '#8b99a6',
  gray700: '#565a5c',
  gray800: '#373d43',
  green100: '#00b373',
  black100: '#151515',
  green200: '#f3f8eb',
  green500: '#c7dfa7',
  green600: '#88bb40',
  green700: '#609b3b',
  purple200: '#f8f3fa',
  purple600: '#9b59b6',
  purple700: '#7f379c',
  red100: '#ff585d',
  red200: '#fdefef',
  red500: '#f7c1c1',
  red600: '#ec5353',
  red700: '#ae4d4d',
  red800: '#c84646',
  red900: '#b03e3e',
  red950: '#972f2f',
  teal200: '#effaf8',
  teal600: '#1bbc9b',
  teal700: '#008066',
  white: '#fff',
  yellow100: '#f9d055',
  yellow200: '#fcf6e5',
  yellow500: '#f4d689',
  yellow600: '#e9a801',
  yellow700: '#926a00',
};

const createPalette = (colorProps: EzColors): EzPalette =>
  Object.values(colorProps).reduce((colorPalette, colors) => {
    Object.entries<EzColor>(colors).forEach(([colorName, colorDescription]) => {
      // eslint-disable-next-line no-param-reassign
      colorPalette[colorName] = colorDescription.color;
    });
    return colorPalette;
  }, {} as EzPalette);

export const ezPalette = createPalette(ezColors);
