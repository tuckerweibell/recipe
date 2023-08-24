import React from 'react';
import styled from '@emotion/styled';
import {EzCard} from '../../EzCard';
import EzBlankState from '../EzBlankState';
import EzButton from '../../EzButton';

const EzBlankStateWrapper = styled.div`
  & {
    margin-left: -25%;
    width: 150%;
    zoom: 0.7;
  }
  & section > div {
    padding: 5px;
  }
`;

const EzBlankStateSnapshot = () => (
  <EzBlankStateWrapper>
    <EzCard>
      <EzBlankState action={<EzButton>Resolve</EzButton>} title="Title" message="Message." />
    </EzCard>
  </EzBlankStateWrapper>
);

export default EzBlankStateSnapshot;
