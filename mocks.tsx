/** @jsx jsx */
import {jsx} from '@emotion/core';

// popovers render inside of a portal and the bottom of the doc, and reposition using popper.js
// This depends on APIs that JSDOM doesn't support, so instead, "float" the content below the
// current position.
jest.mock('./src/components/EzPopover', () => {
  const {useRef, useEffect} = jest.requireActual('react');
  const Component = ({children}) => {
    const ref = useRef();

    // instead of using getBoundingClientRect to figure out the position
    // (which doesn't work within jsdom) we let the document flow position the popup
    // but in order to prevent parent elements clipping the popover, we set their
    // overflow to visible. This isn't great, but it seems "good enough" for what we need.
    useEffect(() => {
      let el = ref.current;

      // eslint-disable-next-line
      while ((el = el.parentElement)) {
        el.style.overflow = 'visible';
      }
    }, []);

    return (
      <div ref={ref} css={{marginTop: 4, position: 'absolute', width: '100%', zIndex: 1}}>
        {children}
      </div>
    );
  };
  return {
    __esModule: true,
    default: Component,
  };
});
