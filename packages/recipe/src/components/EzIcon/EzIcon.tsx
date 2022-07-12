import React, {forwardRef, isValidElement} from 'react';
import {useTheme} from '@mui/material';
import {EzIconEzCater, EzIconFontAwesome, EzIconReactElement} from './Implementations';
import {
  EzCaterIconProps,
  EzIconProps,
  EzIconTypes,
  FontAwesomeIconProps,
  Ref,
  SvgIconProps,
} from './EzIcon.types';

const isFontAwesomeIcon = (object: EzIconTypes): object is FontAwesomeIconProps =>
  Object.prototype.hasOwnProperty.call(object, 'icon');
const isEzcaterIcon = (object: EzIconTypes): object is EzCaterIconProps =>
  typeof object === 'function';
const isSvgIcon = (object: EzIconTypes): object is SvgIconProps => isValidElement(object);

const EzIcon = forwardRef<Ref, EzIconProps>(({color, icon, size, ...props}, ref) => {
  const theme = useTheme();
  const iconProps = {
    color,
    fontSize: size === 'inherit' ? size : theme.typography.icon.size[size],
    ref,
    ...props,
  };

  if (isFontAwesomeIcon(icon)) return <EzIconFontAwesome icon={icon} {...iconProps} />;
  if (isEzcaterIcon(icon)) return <EzIconEzCater icon={icon} {...iconProps} />;
  if (isSvgIcon(icon)) return <EzIconReactElement icon={icon} {...iconProps} />;

  return null;
});

EzIcon.defaultProps = {
  size: 'medium',
  color: 'inherit',
};

EzIcon.displayName = 'EzIcon';

export default EzIcon;
