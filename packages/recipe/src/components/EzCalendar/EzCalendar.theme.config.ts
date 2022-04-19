import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      'calendar-day-text': '$blue600',
      'calendar-day-border-selected': '$blue500',
      'calendar-day-bg-selected': '$blue200',
    },
    fontWeights: {
      'calendar-day-of-week': '$bold',
    },
  },
});
