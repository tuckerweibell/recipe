import React from 'react';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import EzBadge from '../EzBadge';
import EzIcon from '../../EzIcon';

const EzBadgeSnapshot = () => (
  <EzBadge value={3}>
    <EzIcon icon={faCartShopping} />
  </EzBadge>
);

export default EzBadgeSnapshot;
