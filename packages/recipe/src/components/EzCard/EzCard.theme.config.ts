import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    borderWidths: {
      'card-accent': '5px',
    },
    colors: {
      'card-accent': '$blue600',
      'card-bg': 'white',
      'card-border': '$border',
      'card-footer-bg': '$gray100',
      'card-mask': 'rgba(0, 0, 0, 0.05)',
      'card-mask-active': 'rgba(0, 0, 0, 0.1)',
    },
    shadows: {
      card: '0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15)',
      'card-quiet': '0 0 0 1px $colors$gray400',
      // double up the shadow on hover
      'card-hover': '$card, $card',
      'card-focus': '$card, rgb(0, 95, 204) 0 0px 0px 2px',
    },
    space: {
      'card-p': '$250',
      'card-sm-p': '$150',
      'card-md-p': '$250',
      'card-content-gap': '$200',
    },
    radii: {
      'card-rounded': '6px',
    },
  },
});
