import React, {forwardRef, isValidElement} from 'react';
import {useTheme} from '@mui/material';
import warning from 'tiny-warning';
import {EzIconEzCater, EzIconFontAwesome, EzIconReactElement} from './Implementations';
import {
  EzCaterIconProps,
  EzIconProps,
  EzIconTypes,
  FontAwesomeIconProps,
  Ref,
  SvgIconProps,
} from './EzIcon.types';
import {deprecatedColors, deprecatedIconSizes} from '../../themes/deprecated';

const isFontAwesomeIcon = (object: EzIconTypes): object is FontAwesomeIconProps =>
  Object.prototype.hasOwnProperty.call(object, 'icon');
const isEzcaterIcon = (object: EzIconTypes): object is EzCaterIconProps =>
  typeof object === 'function';
const isSvgIcon = (object: EzIconTypes): object is SvgIconProps => isValidElement(object);

const EzIcon = forwardRef<Ref, EzIconProps>(({color, icon, size, ...props}, ref) => {
  const theme = useTheme();
  const iconProps = {
    color,
    fontSize: theme.typography.icon.size[size],
    ref,
    ...props,
  };
  warning(!deprecatedColors.set.has(color), deprecatedColors.warning);
  warning(!deprecatedIconSizes.set.has(size), deprecatedIconSizes.warning);

  if (isFontAwesomeIcon(icon)) return <EzIconFontAwesome icon={icon} {...iconProps} />;
  if (isEzcaterIcon(icon)) return <EzIconEzCater icon={icon} {...iconProps} />;
  if (isSvgIcon(icon)) return <EzIconReactElement icon={icon} {...iconProps} />;

  return null;
});

EzIcon.defaultProps = {
  size: 'inherit',
  color: 'inherit',
};

EzIcon.displayName = 'EzIcon';

export default EzIcon;
