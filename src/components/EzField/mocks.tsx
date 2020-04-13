import React from 'react';

// popovers render inside of a portal and the bottom of the doc, and reposition using popper.js
// This depends on APIs that JSDOM doesn't support, so instead, "float" the content below the
// current position.
jest.mock('../EzPopover', () => {
  return {
    __esModule: true,
    default: ({children}) => (
      <div style={{marginTop: 4, position: 'absolute', width: '100%', zIndex: 1}}>{children}</div>
    ),
  };
});
