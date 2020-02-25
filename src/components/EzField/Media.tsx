import React, {useCallback, useRef, useState, useEffect} from 'react';
import {createPortal} from 'react-dom';
import {CacheProvider} from '@emotion/core';
// eslint-disable-next-line
import createCache from '@emotion/cache';
import {EzGlobalStyles} from '../index';

const sizes = {
  small: {width: 750, height: 1334}, // phone e.g. iphone 6
  medium: {width: 1280, height: 800}, // tablet e.g. amazon fire hd
  large: {width: 1920, height: 1080}, // laptop e.g. dell xps 13
};

const Media = ({size, children}) => {
  const iframeEl = useRef(null);
  const linkRef = useRef(null);
  const [container, setContainer] = useState(null);
  const [src, setSrc] = useState(undefined);

  const createStylesCache = useCallback(
    () => createCache({container: container.ownerDocument.head, key: 'frame'}),
    [container]
  );

  useEffect(() => {
    setContainer(iframeEl.current);
  }, [container]);

  return (
    <iframe
      title={size}
      frameBorder="0"
      allowFullScreen
      ref={iframeEl}
      style={{border: 'none', margin: 0, ...sizes[size]}}
      scrolling="no"
      src={src}
    >
      {iframeEl.current &&
        !src &&
        createPortal(
          <CacheProvider value={createStylesCache()}>
            <link
              href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i&display=swap"
              rel="stylesheet"
              ref={linkRef}
            />
            <EzGlobalStyles />
            {children}
            {linkRef.current &&
              setSrc(
                `data:text/html,${encodeURIComponent(
                  `<html>${linkRef.current.ownerDocument.head.outerHTML}<body>${iframeEl.current.innerHTML}</body></html>`
                )}`
              )}
          </CacheProvider>,
          iframeEl.current
        )}
    </iframe>
  );
};

export default Media;
