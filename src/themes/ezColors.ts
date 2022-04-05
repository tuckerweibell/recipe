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
  neutral: {
    neutral170: {
      name: 'Neutral 170',
      alternateName: 'Black Olive',
      color: '#151515',
      contrastColor: CONTRAST_LIGHT,
    },
    neutral160: {
      name: 'Neutral 160',
      color: '#565a5c',
      contrastColor: CONTRAST_LIGHT,
    },
    neutral150: {
      name: 'Neutral 150',
      color: '#787878',
      contrastColor: CONTRAST_LIGHT,
    },
    neutral140: {
      name: 'Neutral 140',
      color: '#b2b3b3',
      contrastColor: CONTRAST_LIGHT,
    },
    neutral130: {
      name: 'Neutral 130',
      color: '#e5e6e6',
      contrastColor: CONTRAST_DARK,
    },
    neutral120: {
      name: 'Neutral 120',
      color: '#f5f7f7',
      contrastColor: CONTRAST_DARK,
    },
    neutral110: {
      name: 'Neutral 110',
      color: '#fafbfc',
      contrastColor: CONTRAST_DARK,
    },
    neutral100: {
      name: 'Neutral 100',
      alternateName: 'White',
      color: '#fff',
      contrastColor: CONTRAST_DARK,
    },
  },
  primary: {
    primary120: {
      name: 'Primary 120',
      alternateName: 'Kale',
      color: '#1d3c34',
      contrastColor: CONTRAST_LIGHT,
    },
    primary110: {
      name: 'Primary 110',
      alternateName: 'Cilantro',
      color: '#034a34',
      contrastColor: CONTRAST_LIGHT,
    },
    primary100: {
      name: 'Primary 100',
      alternateName: 'ezGreen',
      color: '#00b373',
      contrastColor: CONTRAST_LIGHT,
    },
    primary90: {
      name: 'Primary 90',
      color: '#f0faf7',
      contrastColor: CONTRAST_DARK,
    },
  },
  alternative: {
    yellow110: {
      name: 'Yellow 110',
      color: '#f9d055',
      contrastColor: CONTRAST_DARK,
    },
    yellow100: {
      name: 'Yellow 100',
      alternateName: 'Vanilla Frosting',
      color: '#f9fae4',
      contrastColor: CONTRAST_DARK,
    },
    red100: {
      name: 'Red 100',
      alternateName: 'Guava',
      color: '#ff585d',
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
    blue100: {
      name: 'Blue 100',
      color: '#3f61ff',
      contrastColor: CONTRAST_LIGHT,
    },
    blue90: {
      name: 'Blue 90',
      color: '#f2f4ff',
      contrastColor: CONTRAST_DARK,
    },
  },
  success: {
    success100: {
      name: 'Success 100',
      color: '#00a40f',
      contrastColor: CONTRAST_LIGHT,
    },
    success90: {
      name: 'Success 90',
      color: '#f0fae4',
      contrastColor: CONTRAST_DARK,
    },
  },
  alert: {
    alert110: {
      name: 'Alert 110',
      color: '#972f2f',
      contrastColor: CONTRAST_LIGHT,
    },
    alert100: {
      name: 'Alert 100',
      color: '#d3302f',
      contrastColor: CONTRAST_LIGHT,
    },
    alert90: {
      name: 'Alert 90',
      color: '#f7c1c1',
      contrastColor: CONTRAST_DARK,
    },
    alert80: {
      name: 'Alert 80',
      color: '#fdefef',
      contrastColor: CONTRAST_DARK,
    },
  },
  warning: {
    warning110: {
      name: 'Warning 110',
      color: '#926a00',
      contrastColor: CONTRAST_LIGHT,
    },
    warning100: {
      name: 'Warning 100',
      color: '#e9a801',
      contrastColor: CONTRAST_LIGHT,
    },
    warning90: {
      name: 'Warning 90',
      color: '#fff3ce',
      contrastColor: CONTRAST_DARK,
    },
    warning80: {
      name: 'Warning 80',
      color: '#fcf6e5',
      contrastColor: CONTRAST_DARK,
    },
  },
} as const;

const createPalette = (colorProps: EzColors): EzPalette =>
  Object.values(colorProps).reduce((colorPalette, colors) => {
    Object.entries<EzColor>(colors).forEach(([colorName, colorDescription]) => {
      // eslint-disable-next-line no-param-reassign
      colorPalette[colorName] = colorDescription.color;
    });
    return colorPalette;
  }, {} as EzPalette);

export const ezPalette = createPalette(ezColors);
