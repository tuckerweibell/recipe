import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      'carousel-button-text': 'white',
      'carousel-button-bg': 'rgba(0, 0, 0, 0.5)',
      'carousel-button-bg-hover': 'rgba(0, 0, 0, 0.7)',
    },
    sizes: {
      'carousel-button-width': '$750',
    },
    space: {
      'carousel-item-gap': '$75',
      'carousel-item-gap-double': '$150',
      'carousel-item-offset': '$25',
    },
  },
});
