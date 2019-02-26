import {useRef} from 'react';

const getUniqueId = (() => {
  let index = 1;
  return () => `control$${index++}`;
})();

const useUniqueId = (): string => {
  const {current: id} = useRef(getUniqueId());
  return id;
};

export default useUniqueId;
