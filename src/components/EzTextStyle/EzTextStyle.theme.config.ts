import {createCss} from '@stitches/core';
import root from '../theme.config';

export default createCss({
  ...root.config,
  theme: {
    fontWeights: {
      ...root.config.theme.fontWeights,
      'text-strong': '$fontWeights$bold',
    },
    colors: {
      ...root.config.theme.colors,
      'text-subdued': '$deemphasisText',
    },
  },
});
