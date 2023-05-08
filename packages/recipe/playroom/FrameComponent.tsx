import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import {EzGlobalStyles, EzThemeProvider} from '../src';

export default function FrameComponent({theme, children}) {
  return (
    <>
      <EzGlobalStyles />
      <EzThemeProvider theme={theme}>{children}</EzThemeProvider>
    </>
  );
}
