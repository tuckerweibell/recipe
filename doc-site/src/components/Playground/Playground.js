import React from 'react';
import Theme, {components} from 'docz-theme-default';
import DocFrame from './Frame';

const {playground: DoczPlayground} = components;

const Playground = ({code, scope}) => (
  <Theme>
    <DoczPlayground code={code} scope={{...scope}} wrapper={DocFrame} />
  </Theme>
);

export default Playground;
