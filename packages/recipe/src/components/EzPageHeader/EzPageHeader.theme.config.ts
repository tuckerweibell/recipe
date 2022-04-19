import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      'page-header-bg': '$white',
    },
    shadows: {
      'page-header-box-shadow': 'inset 0 -1px 0 0 $colors$gray400',
    },
    space: {
      'page-header-py': '$150',
      'page-header-px': '$250',
      'page-header-md-py': '$200',
      'page-header-md-px': '$400',
      'page-header-md-subheader-py': '$250',
    },
  },
});
