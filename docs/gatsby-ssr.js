import React from 'react';
import {CacheProvider} from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';

const cache = createCache({key: 'ez'});
const {extractCriticalToChunks} = createEmotionServer(cache);

export const onRenderBody = ({bodyHtml, setHeadComponents}) => {
  const {styles} = extractCriticalToChunks(bodyHtml);

  setHeadComponents(
    styles.map(style => (
      <style
        key={style.key}
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        dangerouslySetInnerHTML={{__html: style.css}}
      />
    ))
  );
};

export const wrapRootElement = ({element}) => (
  <CacheProvider value={cache}>{element}</CacheProvider>
);
