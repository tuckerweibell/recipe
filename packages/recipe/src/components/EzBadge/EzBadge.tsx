import React, {forwardRef} from 'react';
import {EzBadgeMui} from './Implementations';
import {EzBadgeProps, Ref} from './EzBadge.types';

/**
 * Badges indicate notifications or events that are relevant and relatively close to or overlapping another element, like a button or an icon.
 * @component
 */
const EzBadge = forwardRef<Ref, EzBadgeProps>(
  ({alignX, alignY, children, color, hide, max, minimize, overlap, showZero, value}, ref) => (
    <EzBadgeMui
      ref={ref}
      alignX={alignX}
      alignY={alignY}
      color={color}
      hide={hide}
      max={max}
      minimize={minimize}
      overlap={overlap}
      showZero={showZero}
      value={value}
    >
      {children}
    </EzBadgeMui>
  )
);

EzBadge.defaultProps = {
  alignX: 'right',
  alignY: 'top',
  color: 'common.red110',
  hide: false,
  minimize: false,
  overlap: 'rectangular',
  showZero: false,
};

EzBadge.displayName = 'EzBadge';

export default EzBadge;
