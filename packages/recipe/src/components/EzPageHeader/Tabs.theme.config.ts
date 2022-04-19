import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      'tabs-outline-color': '$blue600',
      'tabs-active-color': '$gray700',
      'tabs-focus-outline-color': '$blue600',
    },
    shadows: {
      'tabs-active-box-shadow': 'inset 0 -2px 0 0 $colors$blue600',
      'tabs-hover-box-shadow': 'inset 0 -2px 0 0 $colors$gray400',
    },
    space: {
      'tabs-ml': '$150',
      'tabs-py': '$150',
      'tabs-px': '$100',
    },
  },
});
