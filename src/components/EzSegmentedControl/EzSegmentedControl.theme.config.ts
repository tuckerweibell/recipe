import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      'segmented-control-color': '$gray700',
      'segmented-control-bg': '$white',
      'segmented-control-border': '1px solid $gray400',
      'segmented-control-bg-hover': '$gray100',
      'segmented-control-border-hover': '$gray500',
      'segmented-control-color-input-checked': '$blue700',
      'segmented-control-bg-input-checked': '$blue200',
      'segmented-control-border-input-checked': '1px solid $blue500',
      'segmented-control-bg-input-active': '$gray300',
    },
    fontSizes: {
      'segmented-control-font-size': '$100',
    },
    lineHeights: {
      'segmented-control-line-height': '1.25rem',
    },
    radii: {
      'segmented-control-border-radius': '$regular',
    },
    shadows: {
      'segmented-control-box-shadow': '$sm',
      'segmented-control-box-shadow-input-focus': '$focus-ring',
    },
    space: {
      'segmented-control-label-py': 'calc($100 - 0.125rem)',
      'segmented-control-label-px': '$150',
      'segmented-control-ml': '-1px',
      'segmented-control-fieldset-m': '-1px',
    },
    sizes: {
      'segmented-control-flex-basis': 'auto',
      'segmented-control-fieldset-h': '1px',
      'segmented-control-fieldset-w': '1px',
    },
  },
});
