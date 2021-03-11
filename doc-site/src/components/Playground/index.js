/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import React, {useRef, useState, useCallback, useEffect} from 'react';
import loadable from '@loadable/component';
import Preview from './Preview';

const isIE11 =
  typeof window === `undefined` || (!!window.MSInputMethodContext && !!document.documentMode);

const LazyDoczPlayground = React.memo(({code, scope, language}) => {
  const Playground = loadable(() => import(`./Docz`));
  return <Playground code={code} scope={scope} language={language} />;
});

function useInterval(callback, delay) {
  const savedCallback = useRef();
  const savedIntervalId = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      savedIntervalId.current = id;
      return () => clearInterval(id);
    }
  }, [delay]);

  return useCallback(() => clearInterval(savedIntervalId.current), [savedIntervalId]);
}

const Playground = ({code, scope, language}) => {
  const [isDoczAvailable, setIsDoczAvailable] = useState(false);
  const [isFrameLoaded, setIsFrameLoaded] = useState(false);

  const previewRef = useRef();
  const doczRef = useRef();

  // avoid infinite re-render on hot-reload
  const [initialScope] = useState(scope);

  // only show docz the component is mounted (i.e. in a browser) AND that browser is not IE
  useEffect(() => setIsDoczAvailable(!isIE11), []);

  // docz takes some time to load... so periodically check if we're ready to show it
  const done = useInterval(() => {
    if (!previewRef.current || !doczRef.current) return;

    const {height: previewHeight} = previewRef.current.firstChild?.getBoundingClientRect();
    const {height: doczHeight} = doczRef.current.firstChild?.getBoundingClientRect();

    // if the dozframe matches the preview (give or take 50px), it's done loading.
    if (previewHeight < doczHeight + 50) setIsFrameLoaded(true);
  }, 1000);

  // and finally, clear the interval once we're done loading (or if we didn't need it)
  if (isIE11 || isFrameLoaded) done();

  return (
    <div
      css={css`
        display: grid;
        grid-template-areas: 'playground';
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
      `}
    >
      <div
        ref={previewRef}
        css={{
          gridArea: 'playground',
          marginRight: 16,
          opacity: isFrameLoaded ? 0 : 1,
          // ensure hidden content doesn't receive focus
          visibility: isFrameLoaded ? 'hidden' : 'visible',
        }}
      >
        {/* 
          This playground is rendered inline, but is hidden via opacity.
          Having this code inline allows gatsby static render to capture the output (in order to provision space)
        */}
        <Preview code={code} scope={initialScope} language={language} />
      </div>
      {isDoczAvailable && (
        <div
          ref={doczRef}
          css={{
            gridArea: 'playground',
            opacity: isFrameLoaded ? 1 : 0,
            pointerEvents: isFrameLoaded ? 'auto' : 'none',
          }}
        >
          {/* 
          This playground is rendered inside of an iframe, and is the result you actually end up seeing
        */}
          <LazyDoczPlayground code={code} scope={initialScope} language={language} />
        </div>
      )}
    </div>
  );
};

export default Playground;
