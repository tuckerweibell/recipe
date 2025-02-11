import React, {FC} from 'react';
import {Stack} from '@mui/material';
import {FullBleedProps} from './FullBleed.types';

const FullBleed: FC<FullBleedProps> = ({children}) => (
  <Stack
    bottom="50%"
    height="100vh"
    left="50%"
    margin="-50vh -50vw"
    position="relative"
    right="50%"
    top="50%"
    width="100vw"
  >
    {children}
  </Stack>
);

export default FullBleed;
