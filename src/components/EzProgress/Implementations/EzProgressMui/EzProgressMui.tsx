import React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress, {circularProgressClasses} from '@mui/material/CircularProgress';
import stitches from '../../../theme.config';

interface EzProgressMuiProps {
  value?: number;
  color: string;
  boldDisplayValue: boolean;
  hasNumericValue: boolean;
}

const CIRCULAR_PROGRESS_SIZE = 110;
const CIRCULAR_PROGRESS_THICKNESS = 2;
const CIRCULAR_PROGRESS_FULL_VALUE = 100;

const EzProgressMui: React.FC<EzProgressMuiProps> = ({
  value,
  color,
  boldDisplayValue,
  hasNumericValue,
}) => {
  const displayValue = hasNumericValue ? `${Math.round(value)}%` : '--%';

  return (
    <Stack alignItems="center" justifyContent="center" p="20% 0" position="relative">
      <CircularProgress
        variant="determinate"
        sx={{
          position: 'absolute',
          color: `${stitches.theme.colors.gray200.value}`,
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
      <Stack fontSize="30px" fontWeight={`${boldDisplayValue ? '500' : '300'}`}>
        {displayValue}
      </Stack>
    </Stack>
  );
};

EzProgressMui.displayName = 'EzProgressMui';

export default EzProgressMui;
