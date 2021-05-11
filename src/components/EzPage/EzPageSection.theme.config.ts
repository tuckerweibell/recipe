import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    space: {
      'page-section-gap-tight': '$150',
      'page-section-gap': '$300',
      'page-section-gap-double': '$250',
      'page-section-gap-horizontal': '$600',
    },
    sizes: {
      'page-section-main-w': 'calc(100% - 290px - 48px)',
      'page-section-aside-w': '290px',
    },
  },
});
