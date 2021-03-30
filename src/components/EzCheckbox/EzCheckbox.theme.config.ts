import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      'checkbox-checkmark': '$blue600',
      'checkbox-checkmark-disabled': '$textDisabled',
      'checkbox-border': '$border',
      'checkbox-border-hover': '$gray500',
      'checkbox-bg': 'white',
      'checkbox-bg-hover': '$gray100',
      'checkbox-bg-down': '$gray300',
      'checkbox-bg-disabled': '$gray200',
    },
    fonts: {
      'checkbox-acknowledgement': '$sans',
    },
    fontSizes: {
      'checkbox-acknowledgement': '$100',
    },
    fontWeights: {
      'checkbox-acknowledgement': '$regular',
    },
    radii: {
      checkbox: '3px',
    },
    sizes: {
      checkbox: '$200',
    },
  },
});
