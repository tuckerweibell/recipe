import React from 'react';
import Theme, {components} from 'docz-theme-default';

const {playground: DoczPlayground} = components;

const Playground = ({code, scope}) => (
  <Theme>
    <DoczPlayground code={code} scope={scope} />
  </Theme>
);

export default Playground;
