import React, {forwardRef} from 'react';
import {Badge} from '@mui/material';
import {EzBadgeProps, Ref} from '../EzBadge.types';
import {PaletteOptions} from '../../../themes/themes.types';

const EzBadgeMui = forwardRef<Ref, EzBadgeProps>(
  ({alignX, alignY, children, color, hide, max, minimize, overlap, showZero, value}, ref) => {
    const isCommonColor = color?.startsWith('common.');

    return (
      <Badge
        ref={ref}
        anchorOrigin={{
          vertical: alignY,
          horizontal: alignX,
        }}
        badgeContent={value}
        classes={{
          root: 'EzBadge',
          badge: 'EzBadge-badge',
          dot: 'EzBadge-dot',
        }}
        color={isCommonColor ? undefined : (color as PaletteOptions)}
        invisible={hide}
        max={max}
        overlap={overlap}
        showZero={showZero}
        sx={{
          '& .MuiBadge-badge': {
            bgcolor: isCommonColor ? color : undefined,
            color: isCommonColor ? 'common.neutral100' : undefined,
          },
        }}
        variant={minimize ? 'dot' : 'standard'}
      >
        {children}
      </Badge>
    );
  }
);

EzBadgeMui.displayName = 'EzBadgeMui';

export default EzBadgeMui;
