import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIconProps} from '../../EzIcon.types';

export interface EzIconFontAwesomeProps {
  icon: FontAwesomeIconProps;
  title?: string;
}

const EzIconFontAwesome: React.FC<EzIconFontAwesomeProps> = ({icon, title}) => (
  <FontAwesomeIcon icon={icon} title={title} />
);

EzIconFontAwesome.displayName = 'EzIconFontAwesome';

export default EzIconFontAwesome;
