/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';

const EzTimelinePeriod: React.FC<{label: string}> = ({label, children}) => (
  <section css={{':first-child > h3': {display: 'none'}}}>
    <h3
      css={{
        position: 'relative',
        textTransform: 'uppercase',
        fontSize: 11,
        letterSpacing: 1,
        color: '#8b99a6',
        paddingLeft: 64,
        paddingTop: 24,
        paddingBottom: 24,
        margin: 0,
        // dot connecting timeline stem and branch
        '::after': {
          content: `' '`,
          width: '9px',
          height: '9px',
          display: 'block',
          background: '#8b99a6',
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
          background: '#ced4d757',
          left: 'auto',
          right: 'calc(100% - 56px)',
        },
      }}
    >
      {label}
    </h3>
    <ol css={{listStyleType: 'none', padding: 0, margin: 0, '> * + *': {marginTop: 12}}}>
      {React.Children.map(children, (child, i) => (
        <li key={i}>{child}</li>
      ))}
    </ol>
  </section>
);

export default EzTimelinePeriod;
