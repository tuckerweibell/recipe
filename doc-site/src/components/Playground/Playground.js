import React, {useRef, useLayoutEffect} from 'react';
import createEmotion from 'create-emotion';
import {injectGlobal as injectGlobalForServerRender} from 'emotion';
import {components} from 'docz-theme-default';
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

  /* when the playground is popped up, we don't want the playground to have a min-height */
  [class^='Playground__Overlay'] > :first-child {
    .EzAppLayout & iframe,
    .EzNavigation & iframe {
      min-height: 350px;
    }
  }
`;

// Inject global isn't playing nicely with being run as a loadable component
// This "Global" component will go away when we move over to emotion 10.
function Global({styles}) {
  const ref = useRef(null);

  if (typeof window === 'undefined') injectGlobalForServerRender(styles);

  // use layout effect here to ensure styles will be flushed synchronously, before the browser has a chance to paint.
  useLayoutEffect(() => {
    const el = ref.current;
    const head = el.ownerDocument.head;

    const scopedEmotion = createEmotion(
      {},
      {
        container: head,
        key: 'recipe-global',
      }
    );

    const {injectGlobal} = scopedEmotion;

    injectGlobal(styles);

    return () => {
      const nodes = head.querySelectorAll('[data-emotion="recipe-global"]');
      nodes.forEach(node => head.removeChild(node));
    };
  }, [styles]);

  return <div ref={ref} />;
}

const Playground = ({code, scope}) => (
  <Container>
    <Global
      styles={`
      @import url('https://unpkg.com/codemirror@5.42.0/lib/codemirror.css');
      @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
      @import url('https://fonts.googleapis.com/css?family=Inconsolata');
      .with-overlay{overflow:hidden;}
      html,body,#root{height:100%;min-height:100%;}
    `}
    />
    <DoczPlayground code={code} scope={{...scope}} wrapper={DocFrame} />
  </Container>
);

export default Playground;
