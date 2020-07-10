/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';
import {useTheme} from '../../themes/styled';

const PlaceholderIcon = props => {
  const theme = useTheme();
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="50" cy="50" r="30" fill={theme.colors.text.deemphasis} />
    </svg>
  );
};

const EzTimelineIcon: React.FC<{icon?: React.ReactElement; className?: string}> = ({
  icon = <PlaceholderIcon />,
  className,
}) => {
  const theme = useTheme();
  const iconDiameter = '2rem';
  return (
    <span
      className={className}
      css={{
        position: 'relative',
        background: theme.colors.content.background,
        border: `1px solid ${theme.colors.border.base}`,
        height: iconDiameter,
        width: iconDiameter,
        borderRadius: '50%',
        flexShrink: 0,
        alignItems: 'center',
        display: 'flex',
        justifyItems: 'center',
        alignSelf: 'flex-start',
        marginTop: 18,
      }}
    >
      {React.cloneElement(icon, {
        'aria-hidden': true,
        focusable: false,
        width: 30,
        height: 16,
      })}
    </span>
  );
};

export default EzTimelineIcon;
