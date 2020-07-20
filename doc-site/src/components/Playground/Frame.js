import React, {useCallback, useLayoutEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {CacheProvider} from '@emotion/core';
import createCache from '@emotion/cache';
import styled from '@emotion/styled';
import {EzGlobalStyles} from '@ezcater/recipe';
import ResizeObserver from 'resize-observer-polyfill';

const spacing = ({margin, page}) =>
  page
    ? {margin: 0, width: '100%'}
    : {margin: `${margin} auto`, width: 'calc(100% - 40px)', minWidth: ' fit-content'};

const Wrapper = styled.div`
  ${spacing};
`;

const IFramePlayground = props => {
  const iframeEl = useRef(null);
  const [container, setContainer] = useState(null);
  const playgroundRef = useRef(null);
  const [margin, setMargin] = useState('20px');

  useLayoutEffect(() => {
    if (!container) return;
    const iframe = iframeEl.current;
    const contentDocument = iframe.contentDocument;

    const resizeBasedOnContent = () => {
      const el = playgroundRef.current || container;

      // this is kind of gross, but we want the latest margin value in the resize handler
      // without taking an effect dependency on changes to the margin
      setMargin(m => {
        const newMargin = (el.parentElement.offsetWidth - el.offsetWidth) / 2;

        if (m === '0px' && newMargin === 0) return m;

        const currentScrollPosition = [window.scrollX, window.scrollY];

        iframe.style.height = 0;
        iframe.style.height = `${contentDocument.documentElement.scrollHeight + newMargin}px`;

        window.scroll(...currentScrollPosition);

        return `${newMargin}px`;
      });
    };

    iframe.contentWindow.onmousedown = resizeBasedOnContent;
    iframe.contentWindow.onclick = resizeBasedOnContent;
    iframe.contentWindow.onfocus = resizeBasedOnContent;
    iframe.contentWindow.onkeydown = resizeBasedOnContent;

    const resizeObserver = new ResizeObserver(resizeBasedOnContent);
    resizeObserver.observe(contentDocument.querySelector('body'));
  }, [container]);

  const createStylesCache = useCallback(
    () => createCache({container: container.ownerDocument.head, key: 'frame'}),
    [container]
  );

  const page = props.code.includes('<EzPage>');

  return (
    <iframe
      frameBorder="0"
      allowFullScreen={true}
      ref={iframeEl}
      style={{border: 'none', margin: 0, width: '100%'}}
      srcDoc={`<!DOCTYPE html><head><base target="_parent" /></head>`}
      onLoad={() => setContainer(iframeEl.current.contentDocument.body)}
    >
      {container &&
        createPortal(
          <CacheProvider value={createStylesCache()}>
            <Wrapper ref={playgroundRef} margin={margin} page={page}>
              <link
                href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i&display=swap"
                rel="stylesheet"
              />
              <EzGlobalStyles />
              {props.children}
            </Wrapper>
          </CacheProvider>,
          container
        )}
    </iframe>
  );
};

export default IFramePlayground;
