import React from 'react';
import {EzGlobalStyles} from '../src/components';
import {EzProvider} from '../src/components/EzProvider/EzProvider';
import '../src/styles/recipe-global.css';

export default function FrameComponent({theme, children}) {
  return (
    <>
      <EzGlobalStyles />
      <EzProvider theme={theme}>{children}</EzProvider>
    </>
  );
}
