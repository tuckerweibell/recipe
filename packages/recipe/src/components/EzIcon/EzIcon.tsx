import React, {forwardRef, isValidElement} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzIcon.theme.config';
import {
  Ref,
  EzIconProps,
  FontAwesomeIconProps,
  EzCaterIconProps,
  SvgIconProps,
} from './EzIcon.types';
import EzIconMui from './Implementations/EzIconMui/EzIconMui';
import EzIconFontAwesome from './Implementations/EzIconFontAwesome/EzIconFontAwesome';
import EzIconEzCater from './Implementations/EzIconEzCater/EzIconEzCater';

const iconStyles = theme.css({
  variants: {
    color: {
      green: {color: '$icon-color-green', fill: '$icon-color-green'},
      white: {color: '$icon-color-white', fill: '$icon-color-white'},
      inherit: {color: 'inherit', fill: 'inherit'},
    },
    size: {
      xsmall: {fonSize: '$icon-size-xsmall'},
      small: {fontSize: '$icon-size-small'},
      medium: {fontSize: '$icon-size-medium'},
      large: {fontSize: '$icon-size-large'},
      xlarge: {fontSize: '$icon-size-xlarge'},
      inherit: {fontSize: 'inherit'},
    },
  },
});

const isFontAwesomeIcon = (object: any): object is FontAwesomeIconProps => {
  return 'icon' in object;
};

const isEzcaterIcon = (object: any): object is EzCaterIconProps => {
  return typeof object === 'function';
};

const isSvgIcon = (object: any): object is SvgIconProps => {
  return isValidElement(object);
};

const EzIcon = forwardRef<Ref, EzIconProps>(({icon, title, ...initProps}, ref) => {
  const {props} = iconStyles(initProps);

  let iconComponent;
  if (isEzcaterIcon(icon)) iconComponent = <EzIconEzCater title={title} icon={icon} />;
  else if (isFontAwesomeIcon(icon)) iconComponent = <EzIconFontAwesome title={title} icon={icon} />;
  else if (isSvgIcon(icon)) iconComponent = <EzIconMui title={title} icon={icon} />;
  else return null;

  return (
    <Style ruleset={theme}>
      <span {...props} ref={ref}>
        {iconComponent}
      </span>
    </Style>
  );
});

EzIcon.defaultProps = {
  size: 'inherit',
  color: 'inherit',
};

EzIcon.displayName = 'EzIcon';

export default EzIcon;
