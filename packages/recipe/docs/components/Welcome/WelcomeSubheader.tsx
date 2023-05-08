import React, {ReactNode} from 'react';
import {Box, Link} from '@mui/material';
import {ezTheme} from '../../../src/themes';

interface WelcomeSubheaderProps {
  children: ReactNode;
  href?: string;
}

const WelcomeSubheader = ({children, href}: WelcomeSubheaderProps) => (
  <Box
    component={href ? Link : 'div'}
    href={href ? href : undefined}
    target={href ? '_blank' : undefined}
    rel={href ? 'noreferrer' : undefined}
    textTransform="uppercase"
    letterSpacing="0.05em"
    color={ezTheme.palette.common.neutral130}
    fontSize="0.875rem"
    fontWeight="600"
    underline={href ? 'hover' : undefined}
  >
    {children}
  </Box>
);

export default WelcomeSubheader;
