import React, {ReactNode} from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress, {circularProgressClasses} from '@mui/material/CircularProgress';

interface EzProgressMuiProps {
  value?: number;
  color: string;
  children: ReactNode;
}

const CIRCULAR_PROGRESS_SIZE = 110;
const CIRCULAR_PROGRESS_THICKNESS = 2;
const CIRCULAR_PROGRESS_FULL_VALUE = 100;

const EzProgressMui: React.FC<EzProgressMuiProps> = ({value, color, children}) => {
  return (
    <Stack alignItems="center" justifyContent="center" p="20% 0" position="relative">
      <CircularProgress
        variant="determinate"
        sx={{
          position: 'absolute',
          color: 'common.neutral120',
        }}
        size={CIRCULAR_PROGRESS_SIZE}
        thickness={CIRCULAR_PROGRESS_THICKNESS}
        value={CIRCULAR_PROGRESS_FULL_VALUE}
      />
      <CircularProgress
        variant="determinate"
        sx={{
          position: 'absolute',
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
          color,
        }}
        size={CIRCULAR_PROGRESS_SIZE}
        thickness={CIRCULAR_PROGRESS_THICKNESS}
        value={value || 0}
      />
      {children}
    </Stack>
  );
};

EzProgressMui.displayName = 'EzProgressMui';

export default EzProgressMui;
