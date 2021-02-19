import React, {useCallback, useLayoutEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {CacheProvider} from '@emotion/core';
import createCache from '@emotion/cache';
import {EzGlobalStyles, EzProvider, useProvider} from '@ezcater/recipe';
import ResizeObserver from 'resize-observer-polyfill';

const IFramePlayground = props => {
  const iframeEl = useRef(null);
  const [container, setContainer] = useState(null);
  const playgroundRef = useRef(null);
  const {theme} = useProvider();

  useLayoutEffect(() => {
    if (!container) return;
    const iframe = iframeEl.current;
    const contentDocument = iframe.contentDocument;

    const resizeBasedOnContent = () => {
      const currentScrollPosition = [window.scrollX, window.scrollY];
      iframe.style.height = 0;
      iframe.style.height = `${contentDocument.documentElement.scrollHeight}px`;
      window.scroll(...currentScrollPosition);
    };

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

    iframe.contentWindow.onmousedown = resizeBasedOnContent;
    iframe.contentWindow.onclick = resizeBasedOnContent;
    iframe.contentWindow.onfocus = resizeBasedOnContent;
    iframe.contentWindow.onkeydown = resizeBasedOnContent;

    const resizeObserver = new ResizeObserver(resizeBasedOnContent);
    resizeObserver.observe(contentDocument.querySelector('body'));

    resizeBasedOnContent();
  }, [container]);

  const createStylesCache = useCallback(
    () => createCache({container: container.ownerDocument.head, key: 'frame'}),
    [container]
  );

  return (
    <iframe
      frameBorder="0"
      allowFullScreen={true}
      ref={iframeEl}
      style={{border: 'none', width: '100%', height: 0}}
      srcDoc={`<!DOCTYPE html><head><base target="_parent" /></head>`}
      onLoad={() => setContainer(iframeEl.current.contentDocument.body)}
    >
      {container &&
        createPortal(
          <CacheProvider value={createStylesCache()}>
            <div ref={playgroundRef} style={{padding: 20}}>
              <link
                href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i&display=swap"
                rel="stylesheet"
              />
              <EzGlobalStyles />
              {/* 
                the styles applied by the page aren't carried through to the iframe,
                and providers skip rendering unless its context has changed,
                so force a change by emptying the theme, and resetting it to its outer value.
               */}
              <EzProvider theme={{global: ''}}>
                <EzProvider theme={theme}>{props.children}</EzProvider>
              </EzProvider>
            </div>
          </CacheProvider>,
          container
        )}
    </iframe>
  );
};

export default IFramePlayground;
