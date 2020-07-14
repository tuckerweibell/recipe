/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';
import {useTheme} from '../../themes/styled';

const EzTimelinePeriod: React.FC<{label: string}> = ({label, children}) => {
  const theme = useTheme();
  return (
    <section css={{':first-of-type > h3': {display: 'none'}}}>
      <h3
        css={{
          position: 'relative',
          textTransform: 'uppercase',
          fontSize: 11,
          letterSpacing: 1,
          color: theme.colors.text.deemphasis,
          paddingLeft: 64,
          paddingTop: theme.spacing.xl,
          paddingBottom: theme.spacing.xl,
          margin: 0,
          // dot connecting timeline stem and branch
          '::after': {
            content: `' '`,
            width: '9px',
            height: '9px',
            display: 'block',
            background: theme.colors.text.deemphasis,
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
            background: `${theme.colors.border.base}57`, // NOTE: the 57 suffix is to adjust the hex color transparency,
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
          '&& > * + *': {marginTop: theme.spacing.sm},
        }}
      >
        {React.Children.map(children, (child, i) => (
          <li key={i}>{child}</li>
        ))}
      </ol>
    </section>
  );
};

export default EzTimelinePeriod;
