import React from 'react';

import styled from 'react-emotion';

const Icon = styled.img`
  width: 14px;
  margin: 0;
`;

const TIMELINE_STATUS = Object.freeze({
  active: {
    icon: '/images/icons/in-progress.png',
    label: 'In progress',
  },
  pending: {
    icon: '/images/icons/under-consideration.png',
    label: 'Under consideration',
  },
  unknown: {
    icon: '/images/icons/not-currently-planned.png',
    label: 'Not currently planned',
  },
});

const TimelineStatus = ({type = 'unknown', link}) => {
  if (!TIMELINE_STATUS[type]) throw new Error('Invalid timeline status type');

  return (
    <span>
      <Icon alt={TIMELINE_STATUS[type].label} src={TIMELINE_STATUS[type].icon} />{' '}
      {link ? <a href={link}>{TIMELINE_STATUS[type].label}</a> : TIMELINE_STATUS[type].label}
    </span>
  );
};
export default TimelineStatus;
