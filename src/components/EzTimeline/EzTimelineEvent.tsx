/** @jsx jsx */
import {jsx, Interpolation} from '@emotion/core';
import React from 'react';
import {EzCard} from '../EzCard';
import EzLayout from '../EzLayout';
import EzHeading from '../EzHeading';
import EzTextStyle from '../EzTextStyle';
import EzTimelineIcon from './EzTimelineIcon';
import EzLink, {isLink} from '../EzLink';
import {TimelineEventProps} from './EzTimeline.types';

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
  const arrow: Interpolation = {
    '::before': {
      content: "''",
      position: 'absolute',
      top: '8px',
      right: '-14px',
      height: '0',
      width: '0',
      border: '7px solid transparent',
      borderRight: `7px solid var(--recipe-alias-border-color)`,
    },
    '::after': {
      content: "''",
      position: 'absolute',
      top: '9px',
      right: '-14px',
      height: '0',
      width: '0',
      border: '6px solid transparent',
      borderRight: `6px solid var(--recipe-global-color-static-white)`,
    },
  };
  return (
    <EzLayout layout="basic">
      <EzTimelineIcon icon={icon} css={arrow} />
      <EzCard css={{flex: 1, borderRadius: 6}}>
        <header>
          <EzLayout layout="split" alignY="top">
            <EzLayout layout="cluster" css={{alignItems: 'baseline'}}>
              <EzHeading size="3">
                {isLink({to, as, href}) ? <EzLink {...{to, as, href}}>{title}</EzLink> : title}
              </EzHeading>
              <EzTextStyle use="subdued">
                <time
                  css={{
                    fontSize: 'var(--recipe-global-font-size-100)',
                    lineHeight: 'var(--recipe-global-leading-snug)',
                  }}
                >
                  {time}
                </time>
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
