import React, {ReactNode} from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress, {circularProgressClasses} from '@mui/material/CircularProgress';

interface EzProgressMuiProps {
  children: ReactNode;
  color: string;
  label: string;
  value?: number;
}

const CIRCULAR_PROGRESS_SIZE = 112;
const CIRCULAR_PROGRESS_THICKNESS = 2;
const CIRCULAR_PROGRESS_FULL_VALUE = 100;

const EzProgressMui: React.FC<EzProgressMuiProps> = ({children, color, label, value}) => {
  return (
    <Stack alignItems="center" justifyContent="center" p="20% 0" position="relative">
      <CircularProgress
        aria-hidden="true"
        size={CIRCULAR_PROGRESS_SIZE}
        sx={{
          position: 'absolute',
          color: 'common.grey120',
        }}
        thickness={CIRCULAR_PROGRESS_THICKNESS}
        value={CIRCULAR_PROGRESS_FULL_VALUE}
        variant="determinate"
      />
      <CircularProgress
        aria-label={label}
        aria-valuemax={CIRCULAR_PROGRESS_FULL_VALUE}
        aria-valuemin={0}
        role="meter"
        size={CIRCULAR_PROGRESS_SIZE}
        sx={{
          position: 'absolute',
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
          color,
        }}
        thickness={CIRCULAR_PROGRESS_THICKNESS}
        value={value || 0}
        variant="determinate"
      />
      {children}
    </Stack>
  );
};

EzProgressMui.displayName = 'EzProgressMui';

export default EzProgressMui;
