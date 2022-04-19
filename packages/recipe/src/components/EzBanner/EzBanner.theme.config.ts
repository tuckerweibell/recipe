import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      'banner-bg-marketing': '$purple600',
      'banner-text-marketing': '#fff',
      'banner-bg-ezordering': '$teal600',
      'banner-text-ezordering': '#fff',
      'banner-button-bg': '#fff',
      'banner-button-bg-hover': '#fff',
      'banner-button-text': '$gray700',
      'banner-button-text-hover': '$blue800',
      'banner-button-text-down': '$blue900',
    },
    radii: {
      'banner-rounded': '$regular',
      'banner-button-rounded': '$regular',
    },
    shadows: {
      'banner-shadow': '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
      'banner-button-shadow': '0 4px 12px 0 rgba(0, 0, 0, 0.12)',
      'banner-button-shadow-dark': '0 6px 12px 0 rgba(0, 0, 0, 0.2)',
    },
    space: {
      'banner-body-px': '$400',
      'banner-body-py': '$300',
      'banner-button-px': '$200',
      'banner-button-py': '$100',
    },
  },
});
