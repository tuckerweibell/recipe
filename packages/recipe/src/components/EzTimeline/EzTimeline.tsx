import React from 'react';
import {TimelineProps} from './EzTimeline.types';
import theme from '../theme.config';
import {clsx} from '../../utils';

const pseudo: any = {
  content: "''",
  position: 'absolute',
  height: '100%',
  width: '100%',
  pointerEvents: 'none',
};

const stem: any = {
  background: `linear-gradient(90deg, transparent, transparent calc(1rem - 1px), 
    var(--colors-timeline-stem) calc(1rem - 1px), var(--colors-timeline-stem) calc(1rem + 1px), transparent calc(1rem + 1px))`,
};

const footerButton = theme.css({
  color: '$footer-button-text',
  boxShadow: '$footer-button',
  border: 'solid $borderWidths$thin $colors$border',
  fontWeight: '$bold',
  fontFamily: '$defaultFont',
  width: '$full',
  borderRadius: '$footer-button-rounded',
  backgroundColor: '$footer-button-bg',
  fontSize: '$footer-button-text',
  letterSpacing: 1,
  padding: `$footer-button-y $footer-button-x`,
  textTransform: 'uppercase',
  '&:hover': {
    color: '$footer-button-text-hover',
    backgroundColor: 'white',
  },
  '&:focus': {
    outline: 'none',
    boxShadow: '$focus-ring',
  },
});

const footerStem = theme.css({
  paddingTop: '$sizes$timeline-gap',
  paddingLeft: '$sizes$timeline-gutter',

  position: 'relative',
  '&::before': {
    ...stem,
    ...pseudo,
    marginTop: '-$sizes$timeline-gap',
    marginLeft: '-$sizes$timeline-gutter',

    height: 'calc($full + $timeline-page-gutter-sm)',

    '@medium': {
      height: 'calc($full + $timeline-page-gutter-lg)',
    },
  },
});

const layout = theme.css({
  px: '$100',
  '@medium': {px: 0},
});

const timelineStem = theme.css({
  '> section': {
    '> h3': stem,
    '> ol > li': {
      position: 'relative',
      my: 0,
      '&::before': {...stem, ...pseudo},
      // extend the stem of "sibling" events to fill the gap between events
      '& + li:before': {
        marginTop: '-$sizes$timeline-gap',
        height: `calc(100% + $timeline-gap)`,
      },
    },
    // offset the stem of the timeline (so that it starts with the first icon/event)
    '&:first-of-type > ol > li:first-of-type:before': {
      marginTop: '$sizes$timeline-icon',
      height: `calc(100% - $timeline-icon)`,
    },
    // cap the stem of the timeline (so that it ends with the last icon/event)
    '&:last-child > ol > li:last-child::before': {
      height: '$timeline-icon',
    },
    // if there is only one event, we don't need a stem
    '&:only-of-type > ol > li:only-of-type:before': {
      height: 0,
    },
  },
});

const EzTimeline: React.FC<TimelineProps> = ({children, expandable}) => {
  return (
    <div className={clsx(layout(), timelineStem())}>
      {children}
      {Boolean(expandable) && (
        <div className={footerStem()}>
          <button type="button" onClick={expandable.onClick} className={footerButton()}>
            {expandable.expandLabel}
          </button>
        </div>
      )}
    </div>
  );
};

export default EzTimeline;
