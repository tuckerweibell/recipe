import React from 'react';

jest.mock('./src/components/EzPortal', () => {
  const {createContext} = jest.requireActual('react');
  const Component = ({children}) => {
    return <div>{children}</div>;
  };
  return {
    __esModule: true,
    default: Component,
    PortalContext: createContext({current: null}),
  };
});

// popovers render inside of a portal and the bottom of the doc, and reposition using popper.js
// This depends on APIs that JSDOM doesn't support, so instead, "float" the content below the
// current position.
jest.mock('./src/utils/hooks/usePopper', () => {
  const {useRef, useEffect} = jest.requireActual('react');
  const usePopper = () => {
    const ref = useRef();

    useEffect(() => {
      let el = ref.current;

      // set the popover position
      el.style.marginTop = '4px';
      el.style.position = 'absolute';
      el.style.left = 0;
      el.style.right = 0;
      el.style.zIndex = 1;
      el.parentElement.style.position = 'relative';

      // instead of using getBoundingClientRect in popper.js to figure out the position
      // (which doesn't work within jsdom) we let the "document flow" position the popup
      // but in order to prevent parent elements clipping the popover, we set their
      // overflow to visible. This isn't great, but it seems "good enough" for what we need.
      // eslint-disable-next-line
      while ((el = el.parentElement)) {
        el.style.overflow = 'visible';
      }
    }, []);

    return {popper: ref, reference: useRef()};
  };
  return {
    __esModule: true,
    default: usePopper,
  };
});
