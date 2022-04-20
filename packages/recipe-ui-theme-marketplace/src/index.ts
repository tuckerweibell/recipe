import {Theme} from '@react-types/provider';
import {createTheme} from '@ezcater/recipe';

const marketplace = createTheme({
  borderStyles: {
    'card-border': 'solid',
  },
  borderWidths: {
    'card-border': '$thin',
    'button-secondary': '$thin',
  },
  colors: {
    'page-bg': 'white',
    'card-border': '$colors$gray150',

    /* secondary button default */
    'button-bg-secondary': '$white',
    'button-border-secondary': '$blue600',
    'button-text-secondary': '$blue600',

    /* secondary button hover */
    'button-bg-secondary-hover': '$blue200',
    'button-border-secondary-hover': '$blue600',
    'button-text-secondary-hover': '$blue600',

    /* secondary button active */
    'button-bg-secondary-down': '$blue300',
    'button-border-secondary-down': '$blue600',
    'button-text-secondary-down': '$blue800',

    /* secondary button focus */
    'button-bg-secondary-focus': '$blue200',
    'button-border-secondary-focus': 'rgba(63, 97, 255, 0.3)',
    'button-text-secondary-focus': '$blue600',
  },
  radii: {
    'flash-message-rounded': 0,
  },
  shadows: {
    card: 'none',
    'button-secondary': '0px 1px 2px rgba(0, 0, 0, 0.12)',
    'button-secondary-hover': '0px 1px 6px rgba(0, 0, 0, 0.16)',
    'button-secondary-down': '0px 0px 3px rgba(0, 0, 0, 0.2)',
    'button-secondary-focus-ring': '0 0 0 3px rgba(63, 97, 255, 0.3)',
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
