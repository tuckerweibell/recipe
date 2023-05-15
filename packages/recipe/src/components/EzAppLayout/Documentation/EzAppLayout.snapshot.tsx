import React from 'react';
import {Stack} from '@mui/material';
import styled from '@emotion/styled';
import EzAppLayout from '../EzAppLayout';

const EzAppLayoutWrapper = styled.div`
  & > div {
    min-height: unset;
  }
`;

const EzAppLayoutSnapshot = () => (
  <EzAppLayoutWrapper>
    <EzAppLayout>
      <Stack direction="row" gap={1}>
        <Stack bgcolor="lightgrey" width="50px" height="120px" />
        <Stack gap={1}>
          <Stack bgcolor="lightgrey" width="100px" height="32px" />
          <Stack bgcolor="lightgrey" width="100px" height="80px" />
        </Stack>
      </Stack>
    </EzAppLayout>
  </EzAppLayoutWrapper>
);

export default EzAppLayoutSnapshot;
