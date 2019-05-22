import React, {useRef, useEffect, useState} from 'react';

type OverflowBindings = {
  ref: React.RefObject<HTMLElement>;
};

const useOverflowDetection = (): [boolean, OverflowBindings] => {
  const ref = useRef<HTMLElement>();
  const [hasOverflow, set] = useState(false);

  useEffect(() => {
    const el = ref.current;
    set(el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight);
  }, [ref]);

  return [hasOverflow, {ref}];
};

export default useOverflowDetection;
