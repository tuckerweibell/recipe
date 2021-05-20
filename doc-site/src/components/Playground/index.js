import React from 'react';
import Preview from './Preview';

const Playground = ({code, scope, language}) => (
  <Preview code={code} scope={scope} language={language} />
);

export default Playground;
