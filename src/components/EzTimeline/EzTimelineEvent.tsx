/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';
import {EzCard} from '../EzCard';
import EzLayout from '../EzLayout';
import EzHeading from '../EzHeading';
import EzTextStyle from '../EzTextStyle';
import EzTimelineIcon from './EzTimelineIcon';
import EzLink, {isLink} from '../EzLink';
import {TimelineEventProps} from './EzTimeline.types';
import {useTheme} from '../../themes/styled';

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
  const {colors, lineHeights, fontSizes} = useTheme();
  const arrow: any = {
    '::before': {
      content: "''",
      position: 'absolute',
      top: '8px',
      right: '-14px',
      height: '0',
      width: '0',
      border: '7px solid transparent',
      borderRight: `7px solid ${colors.border.base}`,
    },
    '::after': {
      content: "''",
      position: 'absolute',
      top: '9px',
      right: '-14px',
      height: '0',
      width: '0',
      border: '6px solid transparent',
      borderRight: `6px solid ${colors.content.background}`,
    },
  };
  return (
    <EzLayout layout="basic">
      <EzTimelineIcon icon={icon} css={arrow} />
      <EzCard css={{flex: 1}}>
        <header>
          <EzLayout layout="split" alignY="top">
            <EzLayout layout="cluster" css={{alignItems: 'baseline'}}>
              <EzHeading size="3">
                {isLink({to, as, href}) ? <EzLink {...{to, as, href}}>{title}</EzLink> : title}
              </EzHeading>
              <EzTextStyle use="subdued">
                <time css={{fontSize: fontSizes[300], lineHeight: lineHeights.heading}}>
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
