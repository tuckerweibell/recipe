import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      'alert-bg-success': '$positiveBg',
      'alert-text-success': '$positiveText',
      'alert-bg-error': '$negativeBg',
      'alert-text-error': '$negativeText',
      'alert-bg-warning': '$cautionBg',
      'alert-text-warning': '$cautionText',
      'alert-bg-info': '$informativeBg',
      'alert-text-info': '$informativeText',
      'alert-bg-marketing': '$teal200',
      'alert-text-marketing': '$teal700',
      'alert-bg-tip': '$purple200',
      'alert-text-tip': '$purple700',
    },
    space: {
      'alert-p-icon-side': '$150',
      'alert-px': '$250',
      'alert-py': '$150',
    },
    radii: {
      'alert-rounded': '$regular',
    },
  },
});
