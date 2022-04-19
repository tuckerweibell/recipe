import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      'timeline-stem': '#ced4d957',
      'footer-button-text': '$blue600',
      'footer-button-text-hover': '$blue800',
      'footer-button-bg': '$gray100',
    },
    fontSizes: {
      'footer-button-text': '$75',
    },
    radii: {
      'footer-button-rounded': '6px',
    },
    shadows: {
      'footer-button': '$sm',
    },
    sizes: {
      'timeline-icon': '2rem',
      'timeline-gap': '$150',
      'timeline-gutter': 'calc($timeline-icon + $timeline-gap)',
      'timeline-page-gutter-sm': '$200',
      'timeline-page-gutter-lg': '$400',
    },
    space: {
      'footer-button-x': '$250',
      'footer-button-y': '$150',
    },
  },
});
