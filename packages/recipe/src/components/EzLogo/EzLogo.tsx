import React, {forwardRef} from 'react';
import {EzLogoSvg} from './Implementations';
import {EzLogoProps, Ref} from './EzLogo.types';

const EzLogo = forwardRef<Ref, EzLogoProps>(({color, size, variant}, ref) => (
  <EzLogoSvg ref={ref} color={color} size={size} variant={variant} />
));

EzLogo.defaultProps = {
  color: 'default',
  size: 'medium',
  variant: 'horizontal',
};

EzLogo.displayName = 'EzLogo';

export default EzLogo;
