import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import {EzGlobalStyles, EzThemeProvider} from '../../recipe/src';
import Sprites from '../../../docs/src/components/Sprites';

export default function FrameComponent({theme, children}) {
  return (
    <>
      <Sprites />
      <EzGlobalStyles />
      <EzThemeProvider theme={theme}>{children}</EzThemeProvider>
    </>
  );
}
