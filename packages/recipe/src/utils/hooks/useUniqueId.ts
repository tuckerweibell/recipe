import * as React from 'react';

const getUniqueId = (() => {
  let index = 1;
  return () => `control__${index++}`;
})();

// eslint-disable-next-line no-useless-concat -- Workaround for https://github.com/webpack/webpack/issues/14814
const maybeReactUseId: undefined | (() => string) = (React as any)['useId' + ''];

const useCustomUniqueId = (): string => React.useMemo(getUniqueId, []);

const useUniqueId = maybeReactUseId !== undefined ? maybeReactUseId : useCustomUniqueId;

export default useUniqueId;
