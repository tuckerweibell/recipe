import React, {FC} from 'react';
import {Box} from '@mui/system';
import heroImg from '../../../public/images/hero-pattern-xl.jpg';
import {HeroImageProps} from './Welcome.types';

const HeroImage: FC<HeroImageProps> = ({
  displaySizeHide = 'md',
  displaySizeShow = 'xs',
  objectPosition = 'center',
}) => (
  <Box
    src={heroImg}
    alt=""
    component="img"
    display={{[displaySizeHide]: 'none', [displaySizeShow]: 'block'}}
    height="100%"
    position="absolute"
    width="100%"
    sx={{objectFit: 'cover', objectPosition}}
  />
);

export default HeroImage;
