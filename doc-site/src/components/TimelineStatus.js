import React from 'react';

const TIMELINE_STATUS = Object.freeze({
  active: {
    icon: '/images/icons/in-progress.png',
    label: 'In Progress',
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
  if (!TIMELINE_STATUS[type]) {
    throw new Error('Invalid timeline status type');
  }

  return (
    <span>
      <img
        alt={TIMELINE_STATUS[type].label}
        src={TIMELINE_STATUS[type].icon}
        width="14"
        style={{
          marginBottom: 0,
        }}
      />{' '}
      {link ? <a href={link}>{TIMELINE_STATUS[type].label}</a> : TIMELINE_STATUS[type].label}
    </span>
  );
};
export default TimelineStatus;
