import React, {FC} from 'react';
import {Box} from '@mui/material';
import {ColorSwatchProps} from './ColorPalette.types';

const ColorSwatch: FC<ColorSwatchProps> = ({color}) => (
  <Box display="inline-block" height="12px" width="12px" bgcolor={color} />
);

export default ColorSwatch;
