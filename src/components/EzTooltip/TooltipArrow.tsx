import React from 'react';

import {TooltipArrowSVG} from './TooltipArrow.styles';

const TooltipArrow = ({position}) => (
  <TooltipArrowSVG width="10" height="5" position={position}>
    <path d="M0 5l5-5 5 5z" />
    <path d="M1.5 5L5 1.5 8.5 5z" />
  </TooltipArrowSVG>
);

export default TooltipArrow;
