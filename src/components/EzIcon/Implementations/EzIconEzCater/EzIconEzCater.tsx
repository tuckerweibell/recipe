import React from 'react';
import EzIconMui from '../EzIconMui/EzIconMui';
import {EzCaterIconProps} from '../../EzIcon.types';

interface EzIconEzCaterProps {
  icon: EzCaterIconProps;
  title?: string;
}

const EzIconEzCater: React.FC<EzIconEzCaterProps> = ({icon, title}) => {
  const ezcaterIcon = React.createElement(icon);
  return <EzIconMui icon={ezcaterIcon} title={title} />;
};

EzIconEzCater.displayName = 'EzIconEzCater';

export default EzIconEzCater;
