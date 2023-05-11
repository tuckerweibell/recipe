import React, {ReactNode} from 'react';
import Stack from '@mui/material/Stack';

const COLORS = {
  grey: 'common.grey120',
};

interface EzProgressMuiMetricOnly {
  children: ReactNode;
}

const EzProgressMuiMetricOnly: React.FC<EzProgressMuiMetricOnly> = ({children}) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      position="relative"
      border="4px solid"
      borderColor={COLORS.grey}
      borderRadius="8px"
      height={112}
      width={112}
    >
      {children}
    </Stack>
  );
};

EzProgressMuiMetricOnly.displayName = 'EzProgressMuiMetricOnly';

export default EzProgressMuiMetricOnly;
