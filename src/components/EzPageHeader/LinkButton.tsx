import React, {forwardRef} from 'react';
import {EzButton, EzLink} from '..';
import {Link, LinkButton, Clickable} from '../EzLink/EzLink.types';

function isLink(props: Clickable | Link): props is Link {
  return (props as any).href !== undefined || (props as any).to !== undefined;
}

export default forwardRef<HTMLElement, LinkButton>(
  ({label, accessibilityLabel, ...propsIn}, ref) => {
    const buttonProps = {use: 'tertiary' as 'tertiary', type: 'button'};
    const commonProps = {ref, 'aria-label': accessibilityLabel, children: label};

    return isLink(propsIn) ? (
      <EzLink {...commonProps} {...propsIn} />
    ) : (
      <EzButton {...buttonProps} {...commonProps} {...propsIn} />
    );
  }
);
