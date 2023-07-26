import React from 'react';
import styled from '@emotion/styled';
import EzField from '../EzField';

const EzFieldWrapper = styled.div`
  & {
    zoom: 0.8;
  }
`;

const EzFieldSnapshot = () => (
  <EzFieldWrapper>
    <EzField label="Date" labelHidden type="date" value="" />
  </EzFieldWrapper>
);

export default EzFieldSnapshot;
