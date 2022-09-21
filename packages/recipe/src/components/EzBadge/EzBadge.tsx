import React, {forwardRef} from 'react';
import {EzBadgeMui} from './Implementations';
import {EzBadgeProps, Ref} from './EzBadge.types';

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
  color: 'error',
  hide: false,
  minimize: false,
  overlap: 'rectangular',
  showZero: false,
};

EzBadge.displayName = 'EzBadge';

export default EzBadge;
