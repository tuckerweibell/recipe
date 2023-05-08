import React from 'react';
import type {Preview} from '@storybook/react';
import {DocsContainer} from '@storybook/blocks';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import isChromatic from 'chromatic/isChromatic';
import {Stack} from '@mui/material';
import {withThemeFromJSXProvider} from '@storybook/addon-styling';
import {previewTheme} from './theme';
import {ezTheme, ezFulfillmentTheme, ezMarketplaceTheme} from '../src/themes';
import {marketplaceTheme as stitchesMarketplaceTheme} from '../src/components/theme.config';
import EzThemeProvider from '../src/components/EzThemeProvider';
import EzGlobalStyles from '../src/components/EzGlobalStyles';
import EzProvider from '../src/components/EzProvider';

const customViewports = {
  breakpointXs: {
    name: `Recipe XS (${ezTheme.breakpoints.values.xs || 320}px)`,
    styles: {
      width: `${ezTheme.breakpoints.values.xs || 320}px`,
      height: '1000px',
    },
  },
  breakpointSm: {
    name: `Recipe S (${ezTheme.breakpoints.values.sm}px)`,
    styles: {
      width: `${ezTheme.breakpoints.values.sm}px`,
      height: '1000px',
    },
  },
  breakpointMd: {
    name: `Recipe M (${ezTheme.breakpoints.values.md}px)`,
    styles: {
      width: `${ezTheme.breakpoints.values.md}px`,
      height: '1000px',
    },
  },
  breakpointLg: {
    name: `Recipe L (${ezTheme.breakpoints.values.lg}px)`,
    styles: {
      width: `${ezTheme.breakpoints.values.lg}px`,
      height: '1000px',
    },
  },
  breakpointXl: {
    name: `Recipe XL (${ezTheme.breakpoints.values.xl}px)`,
    styles: {
      width: `${ezTheme.breakpoints.values.xl}px`,
      height: '1000px',
    },
  },
};

const preview: Preview = {
  decorators: [
    (StoryFn, {globals, parameters}) => {
      const theme =
        globals.theme ||
        parameters.theme ||
        parameters.parameters?.theme ||
        (isChromatic() ? 'side-by-side' : 'fulfillment');

      if (theme === 'side-by-side')
        return (
          <>
            <EzGlobalStyles />
            <Stack direction="row" gap={2} flexWrap="wrap">
              <Stack minWidth={500}>
                <Stack color="#999" textTransform="uppercase" fontSize="0.8em" fontWeight="bold">
                  Fulfillment
                </Stack>
                <Stack border="2px solid #eee" p={2}>
                  <div>
                    <EzThemeProvider theme={ezFulfillmentTheme}>
                      <StoryFn />
                    </EzThemeProvider>
                  </div>
                </Stack>
              </Stack>
              <Stack minWidth={500}>
                <Stack color="#999" textTransform="uppercase" fontSize="0.8em" fontWeight="bold">
                  Marketplace
                </Stack>
                <Stack border="2px solid #eee" p={2}>
                  <EzProvider theme={stitchesMarketplaceTheme}>
                    <EzThemeProvider theme={ezMarketplaceTheme}>
                      <StoryFn />
                    </EzThemeProvider>
                  </EzProvider>
                </Stack>
              </Stack>
            </Stack>
          </>
        );

      return (
        <EzProvider theme={theme === 'marketplace' ? stitchesMarketplaceTheme : undefined}>
          <EzThemeProvider
            theme={theme === 'marketplace' ? ezMarketplaceTheme : ezFulfillmentTheme}
          >
            <EzGlobalStyles />
            <StoryFn />
          </EzThemeProvider>
        </EzProvider>
      );
    },
    withThemeFromJSXProvider({
      themes: {
        fulfillment: ezFulfillmentTheme,
        marketplace: ezMarketplaceTheme,
      },
      defaultTheme: 'marketplace',
      Provider: EzThemeProvider,
    }),
  ],
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    docs: {
      container: ({children, context}) => (
        <DocsContainer context={context}>
          <EzThemeProvider theme={ezTheme}>{children}</EzThemeProvider>
        </DocsContainer>
      ),
      theme: previewTheme,
    },
    options: {
      showPanel: true,
      storySort: {
        order: [
          'Welcome',
          'Component Library',
          'Guides',
          [
            'Getting Started',
            'Principles',
            'Theming',
            'Contributing',
            'Versioning',
            'Changelog',
            'Migration',
            ['v17', 'v16', 'v15', 'v14', 'v12', 'v11', 'v10', 'v8'],
          ],
        ],
      },
    },
    playroom: {
      url: process.env.NODE_ENV === 'production' ? '/recipe/playroom/' : 'http://localhost:9000',
    },
    viewport: {
      viewports: {...customViewports, ...INITIAL_VIEWPORTS},
    },
  },
};

export default preview;
