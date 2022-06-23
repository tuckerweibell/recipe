import React from 'react';
import {EzCard} from '../EzCard';
import EzLayout from '../EzLayout';
import EzHeading from '../EzHeading';
import EzTextStyle from '../EzTextStyle';
import EzTimelineIcon from './EzTimelineIcon';
import EzLink, {isLink} from '../EzLink';
import {TimelineEventProps} from './EzTimeline.types';
import theme from '../theme.config';

const arrow = theme.css({
  '&::before': {
    content: "''",
    position: 'absolute',
    top: '8px',
    right: '-14px',
    height: '0',
    width: '0',
    border: '7px solid transparent',
    borderRight: `7px solid $border`,
  },
  '&::after': {
    content: "''",
    position: 'absolute',
    top: '9px',
    right: '-14px',
    height: '0',
    width: '0',
    border: '6px solid transparent',
    borderRight: `6px solid white`,
  },
});

const cardOverrides = theme.css({flex: 1, borderRadius: 6});
const alignment = theme.css({alignItems: 'baseline'});
const timestamp = theme.css({fontSize: '$100', lineHeight: '$snug'});

const EzTimelineEvent: React.FC<TimelineEventProps> = ({
  title,
  time,
  status,
  icon,
  children,
  to,
  as,
  href,
}) => {
  return (
    <EzLayout layout="basic">
      <EzTimelineIcon icon={icon} className={arrow()} />
      <EzCard className={cardOverrides()}>
        <header>
          <EzLayout layout="split" alignY="top">
            <EzLayout layout="cluster" className={alignment()}>
              <EzHeading size="3">
                {isLink({to, as, href}) ? <EzLink {...{to, as, href}}>{title}</EzLink> : title}
              </EzHeading>
              <EzTextStyle use="subdued">
                <time className={timestamp()}>{time}</time>
              </EzTextStyle>
            </EzLayout>
            {status && React.cloneElement(status, {size: 'small'})}
          </EzLayout>
        </header>
        {children}
      </EzCard>
    </EzLayout>
  );
};

export default EzTimelineEvent;
