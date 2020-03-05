import React from 'react';
import {CacheProvider} from '@emotion/core';
import createEmotionServer from 'create-emotion-server';
import createCache from '@emotion/cache';

const cache = createCache();

const {extractCritical} = createEmotionServer(cache);

export const onRenderBody = ({bodyHtml, setHeadComponents}) => {
  const {ids, css} = extractCritical(bodyHtml);

  setHeadComponents([
    <style data-emotion-css={ids.join(' ')} dangerouslySetInnerHTML={{__html: css}} />,
  ]);
};

export const wrapRootElement = ({element}) => (
  <CacheProvider value={cache}>{element}</CacheProvider>
);
