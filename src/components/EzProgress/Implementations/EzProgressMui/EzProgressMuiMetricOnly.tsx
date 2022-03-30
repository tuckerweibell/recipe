import React, {ReactNode} from 'react';
import Stack from '@mui/material/Stack';

const COLORS = {
  gray: 'common.neutral120',
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
      borderColor={COLORS.gray}
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
