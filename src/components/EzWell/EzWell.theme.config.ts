import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    borderWidths: {
      well: '$thin',
    },
    colors: {
      'well-bg': 'rgba(75,75,75,0.02)',
      'well-border': 'rgba(44,44,44,0.05)',
    },
    sizes: {
      'well-min-w': '160px',
    },
    space: {
      'well-p': '$250',
    },
  },
});
