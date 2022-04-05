import React, {useEffect, useRef} from 'react';

/**
 * Prevents scrolling on the document body on mount, and restores it on unmount.
 * Also ensures that content does not shift due to the scrollbars disappearing.
 */
export const ScrollLock = () => {
  const documentRef = useRef<HTMLSpanElement>();

  useEffect(() => {
    const document = documentRef.current.ownerDocument;
    const {paddingRight, overflow} = document.body.style;

    document.body.style.paddingRight = `${
      document.defaultView.innerWidth - document.documentElement.clientWidth
    }px`;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, []);

  return <span hidden ref={documentRef} />;
};
