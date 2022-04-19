import React from 'react';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({speedy: true, key: 'ez'});

function wrapRootElement({element}) {
  return <CacheProvider value={cache}>{element}</CacheProvider>;
}

export {wrapRootElement};
