import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      'table-bg-alt': '$gray100',
      'table-bg-hover': '$gray100',
      'table-message-bg': '$blue200',
      'table-message-border': '$blue300',
      'table-text': '$text',
      'table-heading-text': '$deemphasisText',
    },
    fontSizes: {
      table: '$100',
      'table-heading': '$75',
    },
    fontWeights: {
      'table-heading': '$bold',
    },
    lineHeights: {
      table: '1.3em',
    },
    radii: {
      'table-rounded': '6px',
    },
  },
});
