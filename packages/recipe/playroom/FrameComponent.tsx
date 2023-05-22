import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import {EzGlobalStyles, EzProvider, EzThemeProvider, stitchesMarketplaceTheme} from '../src';

export default function FrameComponent({theme, children}) {
  const isMarketplaceTheme =
    theme.typography.fontFamily === 'Lato, "Helvetica Neue", Arial, Helvetica, sans-serif';

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&display=swap"
        rel="stylesheet"
      />
      <EzGlobalStyles />
      <EzProvider theme={isMarketplaceTheme ? stitchesMarketplaceTheme : undefined}>
        <EzThemeProvider theme={theme}>{children}</EzThemeProvider>
      </EzProvider>
    </>
  );
}
