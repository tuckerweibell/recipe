import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    borderWidths: {
      'button-primary': '$thin',
      'button-secondary': '$thin',
      'button-tertiary': 0,
      'button-spinner': '0.2rem',
    },
    borderStyles: {
      'button-primary': 'solid',
      'button-secondary': 'solid',
      'button-tertiary': 'none',
    },
    colors: {
      /* primary */
      'button-bg-primary': '$blue600',
      'button-bg-primary-hover': '$blue800',
      'button-bg-primary-down': '$blue900',
      'button-bg-primary-focus': '$blue650',
      'button-text-primary': '#fff',
      'button-text-primary-hover': '#fff',
      'button-text-primary-down': '#fff',
      'button-border-primary': '$blue600',
      'button-border-primary-hover': '$blue800',
      'button-border-primary-down': '$blue900',
      'button-border-primary-focus': '$blue950',

      /* primary--destructive */
      'button-bg-primary-destructive': '$red600',
      'button-bg-primary-destructive-hover': '$red800',
      'button-bg-primary-destructive-down': '$red900',
      'button-bg-primary-destructive-focus': '$red600',
      'button-text-primary-destructive': '#fff',
      'button-text-primary-destructive-hover': '#fff',
      'button-text-primary-destructive-down': '#fff',
      'button-border-primary-destructive': '$red600',
      'button-border-primary-destructive-hover': '$red800',
      'button-border-primary-destructive-down': '$red900',
      'button-border-primary-destructive-focus': '$red950',

      /* secondary */
      'button-bg-secondary': '#fff',
      'button-bg-secondary-hover': '#fff',
      'button-bg-secondary-down': '#fff',
      'button-bg-secondary-focus': '#fff',
      'button-text-secondary': '$blue600',
      'button-text-secondary-hover': '$blue800',
      'button-text-secondary-down': '$blue900',
      'button-border-secondary': '$gray400',
      'button-border-secondary-hover': '$gray500',
      'button-border-secondary-down': '$gray400',
      'button-border-secondary-focus': '$gray600',

      /* secondary--destructive */
      'button-bg-secondary-destructive': '#fff',
      'button-bg-secondary-destructive-hover': '#fff',
      'button-bg-secondary-destructive-down': '#fff',
      'button-bg-secondary-destructive-focus': '#fff',
      'button-text-secondary-destructive': '$red600',
      'button-text-secondary-destructive-hover': '$red800',
      'button-text-secondary-destructive-down': '$red900',
      'button-border-secondary-destructive': '$gray400',
      'button-border-secondary-destructive-hover': '$gray500',
      'button-border-secondary-destructive-down': '$gray400',
      'button-border-secondary-destructive-focus': '$gray600',

      /* tertiary */
      'button-bg-tertiary': 'initial',
      'button-bg-tertiary-hover': 'initial',
      'button-bg-tertiary-down': 'initial',
      'button-bg-tertiary-focus': 'initial',
      'button-text-tertiary': '$blue600',
      'button-text-tertiary-hover': '$blue800',
      'button-text-tertiary-down': '$blue900',
      'button-border-tertiary': 'initial',
      'button-border-tertiary-hover': 'initial',
      'button-border-tertiary-down': 'initial',
      'button-border-tertiary-focus': 'initial',

      /* tertiary--destructive */
      'button-bg-tertiary-destructive': 'initial',
      'button-bg-tertiary-destructive-hover': 'initial',
      'button-bg-tertiary-destructive-down': 'initial',
      'button-bg-tertiary-destructive-focus': 'initial',
      'button-text-tertiary-destructive': '$red600',
      'button-text-tertiary-destructive-hover': '$red800',
      'button-text-tertiary-destructive-down': '$red900',
      'button-border-tertiary-destructive': 'initial',
      'button-border-tertiary-destructive-hover': 'initial',
      'button-border-tertiary-destructive-down': 'initial',
      'button-border-tertiary-destructive-focus': 'initial',

      /* spinner */
      'button-spinner-bg': 'rgba(0, 0, 0, 0.15)',
    },
    fonts: {
      'button-font': '$base',
    },
    fontSizes: {
      'button-text': '$text',
    },
    fontWeights: {
      'button-bold': '$bold',
    },
    lineHeights: {
      'button-leading': '$tight',
    },
    radii: {
      'button-primary': '$regular',
      'button-secondary': '$regular',
      'button-tertiary': 0,
    },
    shadows: {
      'button-primary': '$sm',
      'button-secondary': '$sm',
      'button-tertiary': 'none',
      'button-spinner': '0 0 0 1px transparent',
    },
    sizes: {
      'button-spinner': '1.28571429rem',
    },
    space: {
      'button-px': '$200',
      'button-py': '$75',
      'button-spinner': '0.642857rem',
    },
  },
});
