import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      label: '$text',
      'label-small': '$deemphasisText',
    },
    fontSizes: {
      label: '$100',
      'label-small': '$75',
    },
    fontWeights: {
      label: '$bold',
    },
    lineHeights: {
      label: '$snug',
    },
    space: {
      'label-my': '$space$50',
      'label-mx': '$space$150',
    },
  },
});
