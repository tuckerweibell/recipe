import {stitches} from '@ezcater/recipe';

export const theme = stitches.createTheme({
  borderStyles: {
    'card-border': 'solid',
  },
  borderWidths: {
    'button-secondary': '$thin',
    'card-border': '$thin',
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
  fonts: {
    defaultFont: `Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif`,
    headerFont: `Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif`,
  },
  fontSizes: {
    h1: '$800',
    h2: '$600',
    h3: '$300',
    h4: '$200',
    h5: '$100',
    h6: '$75',
  },
  fontWeights: {
    bold: 700,
    regular: 400,

    // EzHeading
    h1: '$regular',
    h2: '$bold',
    h3: '$bold',
    h4: '$regular',
    h5: '$bold',
    h6: '$regular',
  },
  lineHeights: {
    snug: 1.35,

    // EzHeading
    h1: '$snug',
    h2: '$snug',
    h3: '$snug',
    h4: '$snug',
    h5: '$snug',
    h6: '$snug',
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
});
