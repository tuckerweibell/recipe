import React, {forwardRef} from 'react';
import {SvgIcon} from '@mui/material';
import {EzIconMuiProps, Ref, SvgIconColorType} from '../../EzIcon.types';

const EzIconMui = forwardRef<Ref, EzIconMuiProps>(
  ({color, fontSize, children, title, ...props}, ref) => {
    const isCommonColor = color?.startsWith('common.');

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
