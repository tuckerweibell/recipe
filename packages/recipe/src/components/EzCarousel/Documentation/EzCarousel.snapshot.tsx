import React from 'react';
import styled from '@emotion/styled';
import EzCarousel from '../EzCarousel';
import {EzCard} from '../../EzCard';

const EzCarouselWrapper = styled.div`
  & {
    zoom: 0.7;
  }
`;

const EzCarouselSnapshot = () => (
  <EzCarouselWrapper>
    <EzCarousel title="Carousel" description="Carousel">
      <EzCard imageSrc="/images/tacos.jpg">Card 1</EzCard>
      <EzCard imageSrc="/images/tacos.jpg">Card 2</EzCard>
      <EzCard imageSrc="/images/tacos.jpg">Card 3</EzCard>
    </EzCarousel>
  </EzCarouselWrapper>
);

export default EzCarouselSnapshot;
