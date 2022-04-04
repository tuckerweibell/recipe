import React from 'react';
import Preview from './Preview';

const Playground = ({code, scope, language, hideControls}) => (
  <Preview code={code} scope={scope} language={language} hideControls={hideControls} />
);

export default Playground;
