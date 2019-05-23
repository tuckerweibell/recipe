import React, {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import createEmotion from 'create-emotion';
import {sheet} from 'emotion';

/*
  We need emotion to insert styles into an iframe, but by default, it'll insert into the page head
  NOTE: There will be a better way to do this with emotion@10
  see: https://github.com/emotion-js/emotion/issues/760#issuecomment-404353706
 */
const forwardStyles = (source, target, iframe) => {
  // copy gatsby's included link based styles
  const links = Array.from(document.getElementsByTagName('link'));
  links.forEach(link => {
    if (link.rel === 'stylesheet') {
      iframe.contentDocument.head.appendChild(link.cloneNode(true));
    }
  });

  // copy the existing style tags emotion has placed on the page
  source.tags.forEach(tag => {
    Array.from(tag.sheet.cssRules).forEach(rule => {
      target.insert(rule.cssText);
    });
  });

  const {inject, insert, flush} = source;
  const wrapped = {inject, insert, flush};

  // pipe newly evaluated styles through to both the page and the iframe
  Object.entries(wrapped).forEach(([name, fn]) => {
    source[name] = function(...args) {
      fn.call(this, ...args);
      target[name](...args);
    };
  });

  // provide a way to stop piping styles to the frame when the frame is no longer needed
  return () => {
    Object.assign(source, wrapped);
  };
};

const IFramePlayground = props => {
  const iframeEl = useRef(null);
  const [height, setHeight] = useState(0);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    const iframe = iframeEl.current;
    const contentDocument = iframe.contentDocument;
    setContainer(contentDocument.body);

    const calculateHeight = () => {
      setHeight(0);
      setHeight(contentDocument.body.scrollHeight);
    };

    calculateHeight();
    iframe.contentWindow.onresize = calculateHeight;
    iframe.contentWindow.onclick = calculateHeight;

    const scopedEmotion = createEmotion(iframe, {
      container: contentDocument.head,
    });

    scopedEmotion.sheet.speedy(false);

    return forwardStyles(sheet, scopedEmotion.sheet, iframe);
  }, []);

  return (
    <iframe
      frameBorder="0"
      allowFullScreen={true}
      ref={iframeEl}
      style={{border: 'none', margin: 0, width: '100%', height}}
    >
      {container && createPortal(props.children, container)}
    </iframe>
  );
};

export default IFramePlayground;
