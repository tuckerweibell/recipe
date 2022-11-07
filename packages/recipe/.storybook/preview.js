import React from 'react';
import {addDecorator} from '@storybook/react';
import {Stack} from '@mui/material';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {DocsContainer} from '@storybook/addon-docs';
import {withThemes} from '@react-theming/storybook-addon';
import {previewTheme} from './theme';
import isChromatic from 'chromatic/isChromatic';
import {ezTheme, ezFulfillmentTheme, ezMarketplaceTheme} from '../src/themes';
import {marketplaceTheme as stitchesMarketplaceTheme} from '../src/components/theme.config';
import EzGlobalStyles from '../src/components/EzGlobalStyles';
import EzProvider from '../src/components/EzProvider';
import EzThemeProvider from '../src/components/EzThemeProvider';

addDecorator((StoryFn, {globals, parameters}) => {
  const theme =
    globals.theme ||
    parameters.theme ||
    parameters.parameters.theme ||
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
              <EzThemeProvider theme={ezFulfillmentTheme}>
                <StoryFn />
              </EzThemeProvider>
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
      <EzThemeProvider theme={theme === 'marketplace' ? ezMarketplaceTheme : ezFulfillmentTheme}>
        <EzGlobalStyles />
        <StoryFn />
      </EzThemeProvider>
    </EzProvider>
  );
});

addDecorator(
  withThemes(EzThemeProvider, [
    {name: 'EzTheme', ...ezTheme},
    {name: 'EzMarketplaceTheme', ...ezMarketplaceTheme},
    {name: 'EzFulfillmentTheme', ...ezFulfillmentTheme},
  ])
);

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

export const parameters = {
  actions: {argTypesRegex: '^on.*'},
  docs: {
    theme: previewTheme,
    container: ({children, context}) => (
      <DocsContainer context={context}>
        <EzThemeProvider theme={ezTheme}>{children}</EzThemeProvider>
      </DocsContainer>
    ),
  },
  options: {
    showPanel: true,
    storySort: {
      order: [
        'Welcome',
        'Guides',
        ['GettingStarted', 'Principles', 'Theming', 'Contributing', 'Versioning', 'Migration'],
      ],
    },
  },

  playroom: {
    url: process.env.NODE_ENV === 'production' ? '/recipe/playroom/' : 'http://localhost:9000',
  },
  viewMode: 'docs',
  viewport: {
    viewports: {...customViewports, ...INITIAL_VIEWPORTS},
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    toolbar: {
      icon: 'circlehollow',
      title: 'Theme',
      items: [
        {value: 'fulfillment', icon: 'circlehollow', title: 'Fulfillment'},
        {value: 'marketplace', icon: 'circle', title: 'Marketplace'},
        {value: 'side-by-side', icon: 'sidebar', title: 'Side-by-side'},
      ],
    },
  },
};
