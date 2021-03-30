import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      'radiobutton-checkmark': '$blue600',
      'radiobutton-checkmark-disabled': '$textDisabled',
      'radiobutton-border': '$border',
      'radiobutton-border-hover': '$gray500',
      'radiobutton-bg': 'white',
      'radiobutton-bg-hover': '$gray100',
      'radiobutton-bg-down': '$gray300',
      'radiobutton-bg-disabled': '$gray200',
    },
    sizes: {
      radiobutton: '$200',
    },
  },
});
