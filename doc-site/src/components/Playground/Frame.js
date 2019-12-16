import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import createEmotion from 'create-emotion';
import {sheet} from 'emotion';
import {css} from 'emotion';
import {EzGlobalStyles} from '@ezcater/recipe';
import ResizeObserver from 'resize-observer-polyfill';

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

  // copy gatsby pre-rendered styles
  const styles = Array.from(document.getElementsByTagName('style'));

  styles.forEach(style => {
    iframe.contentDocument.head.appendChild(style.cloneNode(true));
  });

  // copy the existing style tags emotion has placed on the page
  source.tags.forEach(tag => {
    try {
      Array.from(tag.sheet.cssRules).forEach(rule => {
        target.insert(rule.cssText);
      });
    } catch (e) {}
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
  const [container, setContainer] = useState(null);
  const playgroundRef = useRef(null);
  const [margin, setMargin] = useState('20px');

  useEffect(() => {
    if (!container) return;
    const iframe = iframeEl.current;
    const contentDocument = iframe.contentDocument;

    const scopedEmotion = createEmotion(iframe, {
      container: contentDocument.head,
    });

    scopedEmotion.sheet.speedy(false);

    return forwardStyles(sheet, scopedEmotion.sheet, iframe);
  }, [container]);

  useLayoutEffect(() => {
    if (!container) return;
    const iframe = iframeEl.current;
    const contentDocument = iframe.contentDocument;

    const resizeBasedOnContent = () => {
      const el = playgroundRef.current || container;
      const margin = el ? getComputedStyle(el).marginLeft : '20px';

      iframe.style.height = 0;
      iframe.style.height = `calc(${el.scrollHeight}px + ${margin} + ${margin}`;
      setMargin(getComputedStyle(el).marginLeft);
    };

    iframe.contentWindow.onmousedown = resizeBasedOnContent;
    iframe.contentWindow.onclick = resizeBasedOnContent;
    iframe.contentWindow.onfocus = resizeBasedOnContent;
    iframe.contentWindow.onkeydown = resizeBasedOnContent;

    const resizeObserver = new ResizeObserver(resizeBasedOnContent);
    resizeObserver.observe(contentDocument.querySelector('body'));
  }, [container]);

  return (
    <iframe
      frameBorder="0"
      allowFullScreen={true}
      ref={iframeEl}
      style={{border: 'none', margin: 0, width: '100%'}}
      scrolling="no"
      srcDoc="<!DOCTYPE html>"
      onLoad={() => setContainer(iframeEl.current.contentDocument.body)}
    >
      {container &&
        createPortal(
          <div
            ref={playgroundRef}
            className={css`
              margin: ${margin} auto;
              width: calc(100% - 40px);
              min-width: fit-content;
            `}
          >
            <link
              href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i&display=swap"
              rel="stylesheet"
            />
            <EzGlobalStyles />
            {props.children}
          </div>,
          container
        )}
    </iframe>
  );
};

export default IFramePlayground;
