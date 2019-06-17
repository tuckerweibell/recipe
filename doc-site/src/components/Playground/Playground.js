import React from 'react';
import {components} from 'docz-theme-default';
import styled, {injectGlobal} from 'react-emotion';
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
    height: 100%;
  }

  div[class^='ActionsBar'] button {
    padding: 3px 10px;
    border-left: 1px solid #ced4de;
  }

  div[class^='Playground__Pre'] {
    margin: 0;
  }

  iframe {
    min-height: 100%;
  }
`;

injectGlobal`
  @import url('https://unpkg.com/codemirror@5.42.0/lib/codemirror.css'); @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600'); @import url('https://fonts.googleapis.com/css?family=Inconsolata');
  .with-overlay{overflow:hidden;} html,body,#root{height:100%;min-height:100%;}
`;

const Playground = ({code, scope}) => (
  <Container>
    <DoczPlayground code={code} scope={{...scope}} wrapper={DocFrame} />
  </Container>
);

export default Playground;
