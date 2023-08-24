import React from 'react';
import styled from '@emotion/styled';
import EzBanner from '../EzBanner';

const EzBannerWrapper = styled.div`
  & {
    margin-left: -75%;
    width: 250%;
    zoom: 0.5;
  }
`;

const EzBannerSnapshot = () => (
  <EzBannerWrapper>
    <EzBanner
      link={{label: 'More', onClick: () => {}}}
      message="Message."
      onDismiss={() => {}}
      title="Title"
      use="marketing"
    />
  </EzBannerWrapper>
);

export default EzBannerSnapshot;
