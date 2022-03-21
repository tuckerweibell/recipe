import React from 'react';
import Stack from '@mui/material/Stack';

interface EzProgressMuiDisplayValueProps {
  value?: number;
  boldDisplayValue: boolean;
  hasNumericValue: boolean;
}

const EzProgressMuiDisplayValue: React.FC<EzProgressMuiDisplayValueProps> = ({
  value,
  boldDisplayValue,
  hasNumericValue,
}) => {
  const displayValue = hasNumericValue ? `${Math.round(value)}%` : '--%';

  return (
    <Stack fontSize="30px" fontWeight={`${boldDisplayValue ? '500' : '300'}`}>
      {displayValue}
    </Stack>
  );
};

EzProgressMuiDisplayValue.displayName = 'EzProgressMuiDisplayValue';

export default EzProgressMuiDisplayValue;
