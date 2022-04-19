import React from 'react';
import EzLayout from '../EzLayout';

type ContentGroupProps = {
  children: React.ReactNode;
  horizontal?: boolean;
};

/**
 * @deprecated Please use EzPageSection or EzLayout instead.
 */
const EzContentGroup: React.FC<ContentGroupProps> = ({horizontal, children}) => {
  return <EzLayout layout={horizontal ? 'basic' : 'stack'}>{children}</EzLayout>;
};

EzContentGroup.displayName = 'EzContentGroup';

/**
 * @component
 */
export default EzContentGroup;
