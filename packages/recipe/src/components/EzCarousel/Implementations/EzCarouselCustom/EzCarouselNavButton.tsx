import React, {MouseEventHandler} from 'react';
import {Box} from '@mui/material';
import EzIcon from '../../../EzIcon';
import EzButton from '../../../EzButton';
import {RIGHT_ARROW_ICON, LEFT_ARROW_ICON} from './EzCarouselIcons';

interface EzCarouselNavButtonProps {
  type: 'prev' | 'next';
  disabled: boolean;
  onClick: MouseEventHandler;
}

const EzCarouselNavButton = ({type, disabled, onClick}: EzCarouselNavButtonProps) => (
  <Box
    sx={{
      '> button': {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      },
    }}
  >
    <EzButton
      use="secondary"
      aria-label={type === 'prev' ? 'Previous Page' : 'Next Page'}
      disabled={disabled}
      onClick={onClick}
    >
      <EzIcon icon={type === 'prev' ? LEFT_ARROW_ICON : RIGHT_ARROW_ICON} size="small" />
    </EzButton>
  </Box>
);

EzCarouselNavButton.displayName = 'EzCarouselNavButton';

export default EzCarouselNavButton;
