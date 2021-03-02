/* eslint-disable */
import {createCss} from '@stitches/core';

export default createCss({
  theme: {
    colors: {
      gray600: '#8b99a6',

      // aliases
      deemphasisText: '$gray600',
    },
    fontWeights: {
      bold: 700,
    },
  },
  utils: {},
  conditions: {
    base: '@media all',
    medium: '@media (min-width: 768px)',
    large: '@media (min-width: 1061px)',
  },
});
