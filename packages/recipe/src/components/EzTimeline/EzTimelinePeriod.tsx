import React from 'react';
import Style from '@ezcater/snitches';
import theme from './EzTimeline.theme.config';

const heading = theme.css({
  position: 'relative',
  textTransform: 'uppercase',
  fontSize: 11,
  letterSpacing: 1,
  color: '$deemphasisText',
  paddingLeft: 64,
  py: '$300',
  margin: 0,
  // hide the very first heading
  ':first-of-type > &': {display: 'none'},

  // dot connecting timeline stem and branch
  '&::after': {
    content: `' '`,
    width: '9px',
    height: '9px',
    display: 'block',
    background: '$deemphasisText',
    position: 'absolute',
    top: 'calc(50% - 5px)',
    left: 11,
    borderRadius: '20px',
  },
  // branch joining to timeline stem
  '&::before': {
    content: `' '`,
    width: '40px',
    height: '2px',
    position: 'absolute',
    top: 'calc(50% - 1px)',
    backgroundColor: `$timeline-stem`,
    left: 'auto',
    right: 'calc(100% - 56px)',
  },
});

const list = theme.css({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  '&& > * + *': {marginTop: '$sizes$timeline-gap'},
});

const EzTimelinePeriod: React.FC<{label: string}> = ({label, children}) => (
  <Style ruleset={theme}>
    <section>
      <h3 className={heading()}>{label}</h3>
      <ol className={list()}>
        {React.Children.map(children, (child, i) => (
          <li key={i}>{child}</li>
        ))}
      </ol>
    </section>
  </Style>
);

export default EzTimelinePeriod;
