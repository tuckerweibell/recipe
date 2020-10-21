/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';

const EzTimelinePeriod: React.FC<{label: string}> = ({label, children}) => (
  <section css={{':first-of-type > h3': {display: 'none'}}}>
    <h3
      css={{
        position: 'relative',
        textTransform: 'uppercase',
        fontSize: 11,
        letterSpacing: 1,
        color: 'var(--recipe-alias-deemphasis-text-color)',
        paddingLeft: 64,
        paddingTop: 'var(--recipe-global-static-size-300)',
        paddingBottom: 'var(--recipe-global-static-size-300)',
        margin: 0,
        // dot connecting timeline stem and branch
        '::after': {
          content: `' '`,
          width: '9px',
          height: '9px',
          display: 'block',
          background: 'var(--recipe-alias-deemphasis-text-color)',
          position: 'absolute',
          top: 'calc(50% - 5px)',
          left: 11,
          borderRadius: '20px',
        },
        // branch joining to timeline stem
        '::before': {
          content: `' '`,
          width: '40px',
          height: '2px',
          position: 'absolute',
          top: 'calc(50% - 1px)',
          background: `var(--recipe-timeline-stem-color)`,
          left: 'auto',
          right: 'calc(100% - 56px)',
        },
      }}
    >
      {label}
    </h3>
    <ol
      css={{
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        '&& > * + *': {marginTop: 'var(--recipe-global-static-size-150)'},
      }}
    >
      {React.Children.map(children, (child, i) => (
        <li key={i}>{child}</li>
      ))}
    </ol>
  </section>
);

export default EzTimelinePeriod;
