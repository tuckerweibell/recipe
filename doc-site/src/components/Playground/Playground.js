import React from 'react';
import {
  StyledProvider,
  LiveWrapper,
  StyledEditor,
  StyledPreview,
  StyledError,
  Actions,
} from './style';
import {CopyCode, ExportSketch} from './components';

const Playground = ({code, scope, wide}) => (
  <StyledProvider code={code} scope={scope}>
    <Actions>
      <CopyCode />
      <ExportSketch file="export-to-sketch.json" mime="application/json" />
    </Actions>
    <LiveWrapper wide={wide}>
      <StyledEditor />
      <StyledPreview />
    </LiveWrapper>
    <StyledError />
  </StyledProvider>
);

export default Playground;
