import React, {useRef, useLayoutEffect} from 'react';
import createEmotion from 'create-emotion';
import {injectGlobal as injectGlobalForServerRender} from 'emotion';

export default function Global({styles}) {
  const ref = useRef(null);

  if (typeof window === 'undefined') injectGlobalForServerRender(styles);

  // use layout effect here to ensure styles will be flushed synchronously, before the browser has a chance to paint.
  useLayoutEffect(() => {
    const el = ref.current;
    const head = el.ownerDocument.head as HTMLHeadElement;

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
