import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      'flash-message-bg-success': '$green200',
      'flash-message-border-success': '$green500',
      'flash-message-accent-success': '$green600',
      'flash-message-bg-error': '$red200',
      'flash-message-border-error': '$red500',
      'flash-message-accent-error': '$red600',
      'flash-message-bg-warning': '$yellow200',
      'flash-message-border-warning': '$yellow500',
      'flash-message-accent-warning': '$yellow600',
      'flash-message-bg-info': '$blue200',
      'flash-message-border-info': '$blue500',
      'flash-message-accent-info': '$blue600',
    },
    shadows: {
      'flash-message-box-shadow-success': '0 0 0 0 $green600',
      'flash-message-box-shadow-error': '0 0 0 0 $red600',
      'flash-message-box-shadow-warning': '0 0 0 0 $yellow600',
      'flash-message-box-shadow-info': '0 0 0 0 $blue600',
    },
    borderWidths: {
      'flash-message-border-width': '$thin',
      'flash-message-border-left-width': '5px',
    },
    borderStyles: {
      'flash-message-border-style': 'solid',
    },
  },
});
