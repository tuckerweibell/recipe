import React from 'react';
import Theme, {components} from 'docz-theme-default';
import styled from 'react-emotion';
import DocFrame from './Frame';

const {playground: DoczPlayground} = components;

const Container = styled.div`
  div[class^='Playground__Preview'] {
    overflow: scroll;
  }

  div[class^='Playground__StyledPreview'] {
    padding: 0;
    margin-bottom: -3px;
    overflow: hidden;
  }
`;

const Playground = ({code, scope}) => (
  <Container>
    <Theme>
      <DoczPlayground code={code} scope={{...scope}} wrapper={DocFrame} />
    </Theme>
  </Container>
);

export default Playground;
