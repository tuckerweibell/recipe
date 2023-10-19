const FONT_SIZE_MAP = {
  25: {displayText: '12px', value: '0.75rem'},
  50: {displayText: '14px', value: '0.875rem'},
  100: {displayText: '16px', value: '1rem'},
  200: {displayText: '20px', value: '1.25rem'},
  300: {displayText: '24px', value: '1.5rem'},
  400: {displayText: '28px', value: '1.75rem'},
  500: {displayText: '32px', value: '2rem'},
  600: {displayText: '40px', value: '2.5rem'},
  700: {displayText: '48px', value: '3rem'},
  800: {displayText: '56px', value: '3.5rem'},
  900: {displayText: '64px', value: '4rem'},
};

const fontFamilyTokens = {
  'typography-fontfamily-demand': {
    value: 'Lato, "Helvetica Neue", Arial, Helvetica, sans-serif',
  },
  'typography-fontfamily-supply': {
    value: 'Roboto, "Helvetica Neue", Arial, Helvetica, sans-serif',
  },
};

const fontSizeTokens = Object.keys(FONT_SIZE_MAP).reduce(
  (tokens, fontSizeKey) => ({
    ...tokens,
    [`typography-fontsize-${fontSizeKey}`]: {
      displayText: `(${FONT_SIZE_MAP[fontSizeKey].displayText})`,
      value: FONT_SIZE_MAP[fontSizeKey].value,
    },
  }),
  {}
);

const lineHeightTokens = {
  'typography-lineheight-default': {value: '1.45em'},
  'typography-lineheight-dense': {value: '1.2em'},
};

const fontStyleTokens = {
  'typography-fontstyle-normal': {value: 'normal'},
  'typography-fontstyle-italic': {value: 'italic'},
};

const fontWeightTokens = {
  'typography-fontweight-normal': {value: '400'},
  'typography-fontweight-semibold': {value: '600'},
  'typography-fontweight-bold': {value: '700'},
};

const textDecorationTokens = {
  'typography-textdecoration-none': {value: 'none'},
  'typography-textdecoration-underline': {value: 'underline'},
};

export const typography = {
  ...fontFamilyTokens,
  ...fontSizeTokens,
  ...lineHeightTokens,
  ...fontStyleTokens,
  ...fontWeightTokens,
  ...textDecorationTokens,
};
