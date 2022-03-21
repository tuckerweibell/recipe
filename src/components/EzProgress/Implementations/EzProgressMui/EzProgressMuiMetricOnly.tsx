import React, {ReactNode} from 'react';
import Stack from '@mui/material/Stack';
import stitches from '../../../theme.config';

// todo: remove when converted to emotion themes, see below, and use brand neutral 120 instead
const COLORS = {
  gray: stitches.theme.colors.gray200.value,
};

interface EzProgressMuiMetricOnly {
  children: ReactNode;
}

const EzProgressMuiMetricOnly: React.FC<EzProgressMuiMetricOnly> = ({children}) => {
  return (
    // todo: convert to emotion theme when the emotion themes are merged
    <Stack
      alignItems="center"
      justifyContent="center"
      position="relative"
      border={`4px solid ${COLORS.gray}`}
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
