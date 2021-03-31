import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      'super-radio-text': '$blue600',
      'super-radio-text-hover': '$blue700',
      'super-radio-text-disabled': '$textDisabled',
      'super-radio-bg': 'white',
      'super-radio-bg-hover': '$gray100',
      'super-radio-bg-selected': '$blue200',
      'super-radio-bg-down': '$gray300',
      'super-radio-bg-disabled': '$gray200',
      'super-radio-border': '$border',
      'super-radio-border-hover': '$gray500',
      'super-radio-border-selected': '$blue500',
    },
    fontWeights: {
      'super-radio': '$bold',
    },
    sizes: {
      'super-radio-button-size': '150px',
      'super-radio-image-size': '$750',
    },
  },
});
