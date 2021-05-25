import React from 'react';
import {EzGlobalStyles} from '../src/components';
import {EzProvider} from '../src/components/EzProvider/EzProvider';
import Sprites from '../src/components/Sprites';

export default function FrameComponent({theme, children}) {
  return (
    <>
      <Sprites />
      <EzGlobalStyles />
      <EzProvider theme={theme}>{children}</EzProvider>
    </>
  );
}
