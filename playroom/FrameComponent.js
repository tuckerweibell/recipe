import React from 'react';
import {EzGlobalStyles, EzThemeProvider} from '../src/components';
import Sprites from '../src/components/Sprites';

export default function FrameComponent({theme, children}) {
  return (
    <>
      <Sprites />
      <EzGlobalStyles />
      <EzThemeProvider theme={theme}>{children}</EzThemeProvider>
    </>
  );
}
