import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    fontWeights: {
      'text-strong': '$fontWeights$bold',
    },
    colors: {
      'text-subdued': '$deemphasisText',
    },
  },
});
