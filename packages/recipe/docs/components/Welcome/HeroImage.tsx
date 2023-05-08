import React from 'react';
import {Box} from '@mui/system';
import heroImg from '../../../public/images/hero-pattern-xl.jpg';

interface HeroImageProps {
  displaySizeHide: string;
  displaySizeShow: string;
  objectPosition?: string;
}

const HeroImage = ({displaySizeHide, displaySizeShow, objectPosition}: HeroImageProps) => (
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

HeroImage.defaultProps = {
  displaySizeHide: 'md',
  displaySizeShow: 'xs',
  objectPosition: 'center',
};

export default HeroImage;
