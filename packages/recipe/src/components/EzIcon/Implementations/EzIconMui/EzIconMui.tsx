import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import {SvgIconProps} from '../../EzIcon.types';

interface EzIconMuiProps {
  icon: SvgIconProps;
  title?: string;
}

const EzIconMui: React.FC<EzIconMuiProps> = ({icon, title}) => {
  return (
    <SvgIcon color="inherit" fontSize="inherit" titleAccess={title}>
      {icon}
    </SvgIcon>
  );
};

EzIconMui.displayName = 'EzIconMui';

export default EzIconMui;
