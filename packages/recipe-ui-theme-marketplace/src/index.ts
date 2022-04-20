import {Theme} from '@react-types/provider';
import {createTheme} from '@ezcater/recipe';

const marketplace = createTheme({
  borderStyles: {
    'card-border': 'solid',
  },
  borderWidths: {
    'card-border': '$thin',
  },
  colors: {
    'page-bg': 'white',
    'card-border': '$colors$gray150',
  },
  radii: {
    'flash-message-rounded': 0,
  },
  shadows: {
    card: 'none',
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
