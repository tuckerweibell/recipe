import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      'heading-text': '$text',
      'subheading-text': '$deemphasisText',
    },
    fontSizes: {
      subheading: '$100',
    },
    fontWeights: {
      subheading: '$400',
    },
    lineHeights: {
      heading: '$snug',
      subheading: '$snug',
    },
  },
});
