import React, {forwardRef} from 'react';
import EzLink, {isLink} from '../EzLink';
import EzButton from '../EzButton';
import {LabelledLink} from '../EzLink/EzLink.types';

export default forwardRef<HTMLElement, LabelledLink>(
  ({label, accessibilityLabel, ...propsIn}, ref) => {
    const buttonProps = {use: 'tertiary' as const, type: 'button' as const};
    const commonProps = {ref: ref as any, 'aria-label': accessibilityLabel, children: label};

    return isLink(propsIn) ? (
      <EzLink {...commonProps} {...propsIn} />
    ) : (
      // TODO: refactor to new EzButton after EzLink refactored -- styles need to match
      <EzButton legacy {...buttonProps} {...commonProps} {...propsIn} />
    );
  }
);
