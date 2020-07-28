import React, {useRef, useEffect, useState} from 'react';

type OverflowBindings<T extends HTMLElement> = {
  ref: React.RefObject<T>;
};

const useOverflowDetection = <T extends HTMLElement>(): [boolean, OverflowBindings<T>] => {
  const ref = useRef<T>();
  const [hasOverflow, set] = useState(false);

  useEffect(() => {
    const el = ref.current;
    set(el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight);
  }, [ref]);

  return [hasOverflow, {ref}];
};

export default useOverflowDetection;
