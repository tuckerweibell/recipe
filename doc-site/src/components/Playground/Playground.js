import React from 'react';
import {
  StyledProvider,
  LiveWrapper,
  StyledEditor,
  StyledPreview,
  StyledError,
  Actions,
} from './style';
import {CopyCode} from './components';

const Playground = ({code, scope, wide}) => (
  <StyledProvider code={code} scope={scope}>
    <Actions>
      <CopyCode />
    </Actions>
    <LiveWrapper wide={wide}>
      <StyledEditor />
      <StyledPreview wide={wide && 'wide'} />
    </LiveWrapper>
    <StyledError />
  </StyledProvider>
);

export default Playground;
