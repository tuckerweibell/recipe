import React, {FC} from 'react';
import {Box, Link} from '@mui/material';
import {ezTheme} from '../../../src/themes';
import {WelcomeSubheaderProps} from './Welcome.types';

const WelcomeSubheader: FC<WelcomeSubheaderProps> = ({children, href}) => (
  <Box
    component={href ? Link : 'div'}
    href={href ? href : undefined}
    target={href ? '_blank' : undefined}
    rel={href ? 'noreferrer' : undefined}
    textTransform="uppercase"
    letterSpacing="0.05em"
    color={ezTheme.palette.common.grey130}
    fontSize="0.875rem"
    fontWeight="600"
    underline={href ? 'hover' : undefined}
  >
    {children}
  </Box>
);

export default WelcomeSubheader;
