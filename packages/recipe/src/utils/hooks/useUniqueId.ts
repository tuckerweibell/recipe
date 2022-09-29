import * as React from 'react';

const getUniqueId = (() => {
  let index = 1;
  return () => `control__${index++}`;
})();

const useCustomUniqueId = (): string => {
  return React.useMemo(getUniqueId, []);
};

const react18UseId = (React as {useId?: () => string}).useId;

const useUniqueId = typeof react18UseId === 'function' ? react18UseId : useCustomUniqueId;

export default useUniqueId;
