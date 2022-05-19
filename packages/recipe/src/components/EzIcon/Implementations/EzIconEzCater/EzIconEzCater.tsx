import React, {createElement, forwardRef} from 'react';
import EzIconMui from '../EzIconMui/EzIconMui';
import {EzCaterIconProps, EzIconMuiProps, Ref} from '../../EzIcon.types';

interface EzIconEzCaterProps extends EzIconMuiProps {
  icon: EzCaterIconProps;
}

const EzIconEzCater = forwardRef<Ref, EzIconEzCaterProps>(({icon, ...props}, ref) => (
  <EzIconMui ref={ref} {...props}>
    {createElement(icon)}
  </EzIconMui>
));

EzIconEzCater.displayName = 'EzIconEzCater';

export default EzIconEzCater;
