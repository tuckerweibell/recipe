import React, {forwardRef} from 'react';
import {EzBadgeMui} from './Implementations';
import {EzBadgeProps, Ref} from './EzBadge.types';

const EzBadge = forwardRef<Ref, EzBadgeProps>(
  (
    {
      value,
      variant,
      backgroundColor,
      fontColor,
      hide,
      showZero,
      max,
      minimize,
      alignX,
      alignY,
      overlap,
      children,
    },
    ref
  ) => {
    return (
      <EzBadgeMui
        ref={ref}
        value={value}
        variant={variant}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        hide={hide}
        showZero={showZero}
        max={max}
        minimize={minimize}
        alignX={alignX}
        alignY={alignY}
        overlap={overlap}
      >
        {children}
      </EzBadgeMui>
    );
  }
);

EzBadge.defaultProps = {
  backgroundColor: 'common.alert100',
  fontColor: 'common.neutral100',
  hide: false,
  showZero: false,
  minimize: false,
  alignX: 'right',
  alignY: 'top',
  overlap: 'rectangular',
};

EzBadge.displayName = 'EzBadge';

export default EzBadge;
