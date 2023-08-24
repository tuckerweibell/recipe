import React, {FC} from 'react';
import {Box, Link} from '@mui/material';
import {ezTheme} from '../../../src/themes';
import {WelcomeSubheaderProps} from './Welcome.types';

const WelcomeSubheader: FC<WelcomeSubheaderProps> = ({children, onClick}) => (
  <Box
    color={ezTheme.palette.common.grey130}
    component={onClick ? Link : 'div'}
    fontSize="0.875rem"
    fontWeight="600"
    letterSpacing="0.05em"
    onClick={onClick}
    sx={{cursor: 'pointer'}}
    textTransform="uppercase"
    underline={onClick ? 'hover' : undefined}
  >
    {children}
  </Box>
);

export default WelcomeSubheader;
