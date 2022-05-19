import React, {forwardRef} from 'react';
import {SvgIcon} from '@mui/material';
import {EzIconMuiProps, Ref, SvgIconColorType} from '../../EzIcon.types';
import {deprecatedColors} from '../../../../themes/deprecated';

const EzIconMui = forwardRef<Ref, EzIconMuiProps>(
  ({color, fontSize, children, title, ...props}, ref) => {
    const isCommonColor = color?.startsWith('common.') || deprecatedColors.set.has(color);

    return (
      <SvgIcon
        color={isCommonColor ? undefined : (color as SvgIconColorType)}
        ref={ref}
        sx={{color: isCommonColor ? color : undefined, fontSize}}
        titleAccess={title}
        {...props}
      >
        {children}
      </SvgIcon>
    );
  }
);

EzIconMui.displayName = 'EzIconMui';

export default EzIconMui;
