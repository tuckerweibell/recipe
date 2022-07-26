import React, {forwardRef} from 'react';
import {Badge} from '@mui/material';
import {EzBadgeProps, Ref} from '../EzBadge.types';

const isCommonColor = color => color?.startsWith('common.');

const EzBadgeMui = forwardRef<Ref, EzBadgeProps>(
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
      <Badge
        ref={ref}
        color={variant}
        badgeContent={value}
        invisible={hide}
        showZero={showZero}
        max={max}
        variant={minimize ? 'dot' : 'standard'}
        anchorOrigin={{
          vertical: alignY,
          horizontal: alignX,
        }}
        overlap={overlap}
        sx={{
          '& .MuiBadge-badge': {
            color: isCommonColor(fontColor) && fontColor,
            backgroundColor: isCommonColor(backgroundColor) && backgroundColor,
          },
        }}
      >
        {children}
      </Badge>
    );
  }
);

EzBadgeMui.displayName = 'EzBadgeMui';

export default EzBadgeMui;
