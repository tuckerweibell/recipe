import React, {useState, useLayoutEffect} from 'react';

export default function useRect<T extends HTMLElement = HTMLElement>(
  nodeRef: React.RefObject<T>
): null | DOMRect {
  const [rect, setRect] = useState<DOMRect | null>(null);
  useLayoutEffect(() => {
    if (!nodeRef.current) {
      // eslint-disable-next-line
      console.warn('You need to place the ref');
      return;
    }

    setRect(nodeRef.current.getBoundingClientRect());
  }, [nodeRef]);

  return rect;
}
