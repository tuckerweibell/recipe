import React from 'react';
import Style from '@ezcater/snitches';
import theme from './EzTimeline.theme.config';

const styles = theme.css({
  position: 'relative',
  background: 'white',
  border: `1px solid $border`,
  height: '$timeline-icon',
  width: '$timeline-icon',
  borderRadius: '50%',
  flexShrink: 0,
  alignItems: 'center',
  justifyItems: 'center',
  display: 'flex',
});

const fill = theme.css({fill: '$colors$deemphasisText'});
const alignment = theme.css({alignSelf: 'flex-start', paddingTop: 18});

const PlaceholderIcon = props => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...fill(props).props}>
    <circle cx="50" cy="50" r="30" />
  </svg>
);

const EzTimelineIcon: React.FC<{icon?: React.ReactElement; className?: string}> = ({
  icon = <PlaceholderIcon />,
  className,
}) => (
  <Style ruleset={theme}>
    <span className={alignment()}>
      <span {...styles({className}).props}>
        {React.cloneElement(icon, {
          'aria-hidden': true,
          focusable: false,
          width: 30,
          height: 16,
        })}
      </span>
    </span>
  </Style>
);

export default EzTimelineIcon;
