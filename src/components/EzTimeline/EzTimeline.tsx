/** @jsx jsx */
import {jsx} from '@emotion/core';
import EzButton from '../EzButton';
import {TimelineProps} from './EzTimeline.types';

const psuedo: any = {
  content: "''",
  position: 'absolute',
  height: '100%',
  width: '100%',
  pointerEvents: 'none',
};

const stem: any = {
  background:
    'linear-gradient(90deg, transparent, transparent calc(1rem - 1px), #ced4d757 calc(1rem - 1px), #ced4d757 calc(1rem + 1px), transparent calc(1rem + 1px))',
};

const EzTimeline: React.FC<TimelineProps> = ({children, expandable}) => (
  <div
    css={{
      '> section > h3': stem,
      '> section > ol > li': {
        position: 'relative',
        '::before': {...stem, ...psuedo},
      },
      '> section > ol > li + li:before': {
        marginTop: -12,
        height: 'calc(100% + 12px)',
      },
      '> section:first-child > ol > li:first-child:before': {
        marginTop: '2rem',
        height: 'calc(100% - 2rem)',
      },
      '> section:last-child > ol > li:last-child::before': {
        height: '2rem',
      },
      '> section:only-child > ol > li:only-child:before': {
        height: 0,
      },
    }}
  >
    {children}
    {Boolean(expandable) && (
      <section
        css={{
          paddingTop: 12,
          paddingLeft: 44,
          position: 'relative',
          '::before': {
            ...stem,
            ...psuedo,
            marginTop: -12,
            marginLeft: -44,
            height: 'calc(100% + 32px)',
          },
        }}
      >
        <EzButton
          use="secondary"
          type="button"
          onClick={expandable.onClick}
          css={{
            width: '100%',
            borderRadius: 6,
            backgroundColor: '#fafafb',
            fontSize: 12,
            letterSpacing: 1,
            padding:
              'calc(12rem / var(--recipe-base-font-size,16)) calc(20rem / var(--recipe-base-font-size,16))',
            textTransform: 'uppercase',
          }}
        >
          {expandable.expandLabel}
        </EzButton>
      </section>
    )}
  </div>
);

export default EzTimeline;
