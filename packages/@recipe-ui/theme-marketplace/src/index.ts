import {Theme} from '@react-types/provider';
import {createTheme} from '@ezcater/recipe';

const marketplace = createTheme({
  colors: {
    'page-bg': 'white',
  },
  radii: {
    'card-rounded': 0,
    'flash-message-rounded': 0,
  },
  shadows: {
    card: '0px 2px 20px 5px rgba(0, 0, 0, 0.1)',
  },
  space: {
    'carousel-item-offset': '$250',
  },
} as any);

export const theme: Theme = {
  global: {
    'recipe-marketplace': marketplace.toString(),
  },
};
