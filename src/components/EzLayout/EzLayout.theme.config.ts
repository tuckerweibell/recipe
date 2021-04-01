import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    space: {
      'layout-gap': '$150',
    },
    sizes: {
      // flex-basis uses size instead of space
      'layout-gap': '$150',
    },
  },
});
