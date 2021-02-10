import React from 'react';
import {components} from 'docz-theme-default';
import styled from '@emotion/styled';
import {Global, css} from '@emotion/core';
import DocFrame from './Frame';

const {playground: DoczPlayground} = components;

const Container = styled.div`
  div[class^='Playground__Preview'] {
    overflow: scroll;
  }

  div[class^='Playground__PreviewWrapper'] {
    display: flex;
    flex-direction: column;
  }

  *[class^='Playground__StyledError'] {
    order: -1;
    position: relative;
    min-height: 100px;
  }

  div[class^='Playground__StyledPreview'] {
    padding: 0;
    margin-bottom: -3px;
    overflow: hidden;
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

  /* when the playground is popped up, we don't want the playground to have a min-height */
  [class^='Playground__Overlay'] {
    .EzAppLayout & iframe,
    .EzModal & iframe,
    .EzNavigation & iframe {
      min-height: 350px;
    }
  }

  [class^='ActionsBar__Actions'] {
    > *:focus {
      outline: revert; /* undo the hard-coded outline: none from the docz playground component */
      position: relative; /* make sure outline isn't masked by sibling elements */
    }
  }
`;

const DoczGlobals = () => (
  <Global
    styles={css`
      @import url('https://unpkg.com/codemirror@5.42.0/lib/codemirror.css');
      @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
      @import url('https://fonts.googleapis.com/css?family=Inconsolata');
      body {
        font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
        line-height: normal;
      }
      .with-overlay {
        overflow: hidden;
      }
      html,
      body,
      #root {
        height: 100%;
        min-height: 100%;
      }
    `}
  />
);

function useWrapper(Comp, extraProps) {
  return React.useCallback(props => <Comp {...props} {...extraProps} />);
}

const Playground = ({code, scope}) => (
  <Container>
    <DoczGlobals />
    <DoczPlayground code={code} scope={{...scope}} wrapper={useWrapper(DocFrame, {code})} />
  </Container>
);

export default Playground;
