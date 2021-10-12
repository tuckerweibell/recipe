import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      'status-bg-neutral': '$gray200',
      'status-text-neutral': '$gray700',
      'status-bg-success': '$green200',
      'status-text-success': '$green700',
      'status-bg-informational': '$blue200',
      'status-text-informational': '$blue700',
      'status-bg-attention': '$blue200',
      'status-text-attention': '$blue700',
      'status-bg-warning': '$yellow200',
      'status-text-warning': '$yellow700',
      'status-bg-error': '$red200',
      'status-text-error': '$red700',
      'status-bg-alert': '$purple200',
      'status-text-alert': '$purple700',
    },
    space: {
      'status-px': '$150',
      'status-py': '$50',
      'status-icon-top': '0.125em',
    },
    lineHeights: {
      'status-line-height': '$1',
    },
    fontSizes: {
      'status-text-small': '$75',
      'status-text-normal': '$200',
    },
    fontWeights: {
      'status-bold': '$bold',
    },
    sizes: {
      'status-icon-size': '1em',
    },
  },
});
