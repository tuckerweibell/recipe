import React from 'react';
import styled from '@emotion/styled';
import EzTable from '../EzTable';

const EzTableWrapper = styled.div`
  & {
    zoom: 0.6;
  }
`;

const EzTableSnapshot = () => (
  <EzTableWrapper>
    <EzTable
      title="Table"
      columns={[
        {heading: 'Column one', key: 'col1'},
        {heading: 'Column two', key: 'col2'},
      ]}
      items={[
        {col1: '■■■■■■■■■', col2: '■■■■■■'},
        {col1: '■■■■■■', col2: '■■■■■■■■■■■■■■'},
        {col1: '■■■', col2: '■■■■■'},
      ]}
    />
  </EzTableWrapper>
);

export default EzTableSnapshot;
