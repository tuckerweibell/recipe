/** @jsx jsx */
import {jsx, Interpolation} from '@emotion/core';
import EzButton from '../EzButton';
import {TimelineProps} from './EzTimeline.types';
import {mq} from '../../themes/styled';
import './vars.css';

const psuedo: Interpolation = {
  content: "''",
  position: 'absolute',
  height: '100%',
  width: '100%',
  pointerEvents: 'none',
};

const minus = v => `calc(-1 * ${v})`;

const EzTimeline: React.FC<TimelineProps> = ({children, expandable}) => {
  const gap = 'var(--recipe-global-static-size-150)';
  const stemColor = `var(--recipe-timeline-stem-color)`; // NOTE: the 57 suffix is to adjust the hex color transparency
  const stem: Interpolation = {
    background: `linear-gradient(90deg, transparent, transparent calc(1rem - 1px), 
      ${stemColor} calc(1rem - 1px), ${stemColor} calc(1rem + 1px), transparent calc(1rem + 1px))`,
  };
  const iconDiameter = '2rem';
  const stemWidth = `calc(${iconDiameter} + ${gap})`;
  return (
    <div
      css={{
        paddingRight: 'var(--recipe-global-static-size-100)',
        paddingLeft: 'var(--recipe-global-static-size-100)',
        ...(mq('medium', {paddingRight: 0, paddingLeft: 0}) as any),
        '> section': {
          '> h3': stem,
          '> ol > li': {
            position: 'relative',
            marginTop: 0,
            marginBottom: 0,
            '::before': {...stem, ...psuedo},
            // extend the stem of "sibling" events to fill the gap between events
            '+ li:before': {marginTop: minus(gap), height: `calc(100% + ${gap})`},
          },
          // offset the stem of the timeline (so that it starts with the first icon/event)
          ':first-of-type > ol > li:first-of-type:before': {
            marginTop: iconDiameter,
            height: `calc(100% - ${iconDiameter})`,
          },
          // cap the stem of the timeline (so that it ends with the last icon/event)
          ':last-child > ol > li:last-child::before': {
            height: iconDiameter,
          },
          // if there is only one event, we don't need a stem
          ':only-of-type > ol > li:only-of-type:before': {
            height: 0,
          },
        },
      }}
    >
      {children}
      {Boolean(expandable) && (
        <section
          css={{
            paddingTop: gap,
            paddingLeft: stemWidth,
            position: 'relative',
            '::before': {
              ...stem,
              ...psuedo,
              marginTop: minus(gap),
              marginLeft: minus(stemWidth),
              // height varies based on ez-page bottom padding (at different breakpoints)
              height: `calc(100% + var(--recipe-global-static-size-200))`,
              ...(mq('medium', {
                height: 'calc(100% + var(--recipe-global-static-size-400))',
              }) as any),
            },
          }}
        >
          <EzButton
            use="secondary"
            type="button"
            onClick={expandable.onClick}
            css={{
              width: '100%',
              borderRadius: 'var(--recipe-timeline-footer-border-radius)',
              backgroundColor: 'var(--recipe-timeline-footer-background-color)',
              fontSize: 'var(--recipe-global-font-size-75)',
              letterSpacing: 1,
              padding: `var(--recipe-global-static-size-150) var(--recipe-global-static-size-250)`,
              textTransform: 'uppercase',
            }}
          >
            {expandable.expandLabel}
          </EzButton>
        </section>
      )}
    </div>
  );
};

export default EzTimeline;
