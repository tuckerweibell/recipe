import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      'dismiss-background': '$transparent',
      'dismiss-translucent-dark': 'rgba(241, 241, 244, $shadows$opacity40)',
      'dismiss-translucent-darker': 'rgba(196, 203, 207, $shadows$opacity40)',
    },
    space: {
      'dismiss-padding': '$250',
    },
  },
});
