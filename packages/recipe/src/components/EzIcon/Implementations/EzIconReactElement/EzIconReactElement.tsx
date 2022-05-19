import React, {forwardRef} from 'react';
import EzIconMui from '../EzIconMui/EzIconMui';
import {EzIconMuiProps, Ref, SvgIconProps} from '../../EzIcon.types';

interface EzIconReactElementProps extends EzIconMuiProps {
  icon: SvgIconProps;
}

const EzIconReactElement = forwardRef<Ref, EzIconReactElementProps>(({icon, ...props}, ref) => (
  <EzIconMui ref={ref} {...props}>
    {icon}
  </EzIconMui>
));

EzIconReactElement.displayName = 'EzIconReactElement';

export default EzIconReactElement;
