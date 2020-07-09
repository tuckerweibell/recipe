/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';
import {EzCard} from '../EzCard';
import EzLayout from '../EzLayout';
import EzHeading from '../EzHeading';
import EzTextStyle from '../EzTextStyle';
import EzTimelineIcon from './EzTimelineIcon';
import EzLink, {isLink} from '../EzLink';

const arrow: any = {
  '::before': {
    content: "''",
    position: 'absolute',
    top: '8px',
    right: '-14px',
    height: '0',
    width: '0',
    border: '7px solid transparent',
    borderRight: '7px solid #ced4d9',
  },
  '::after': {
    content: "''",
    position: 'absolute',
    top: '9px',
    right: '-14px',
    height: '0',
    width: '0',
    border: '6px solid transparent',
    borderRight: '6px solid white',
  },
};

const EzTimelineEvent = ({title, time, status, icon, children, to, as, href}) => (
  <EzLayout layout="basic">
    <EzTimelineIcon icon={icon} css={arrow} />
    <EzCard css={{flex: 1}}>
      <EzLayout layout="split" alignY="top">
        <EzLayout layout="cluster" alignY="bottom">
          <EzHeading size="3">
            {isLink({to, as, href}) ? <EzLink {...{to, as, href}}>{title}</EzLink> : title}
          </EzHeading>
          <EzTextStyle use="subdued">
            <time style={{fontSize: 14, fontWeight: 'normal', lineHeight: 1.35}}>{time}</time>
          </EzTextStyle>
        </EzLayout>
        {status && React.cloneElement(status, {size: 'small'})}
      </EzLayout>
      {children}
    </EzCard>
  </EzLayout>
);

export default EzTimelineEvent;
