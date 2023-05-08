import {type StorybookConfig} from '@storybook/react-webpack5';

const config: StorybookConfig = {
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: true,
        backgrounds: false,
        controls: true,
        measure: true,
        outline: false,
      },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-styling',
    'storybook-addon-playroom',
  ],
  docs: {
    autodocs: 'tag',
  },
  typescript: {reactDocgen: false},
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: ['../public'],
  stories: [
    '../docs/**/*.mdx',
    // '../src/components/**/*.@(mdx|stories.*)', // BREAKS SB
    '../stories/**/*.mdx', // FIXME: workaround until wildcard globs fixed
    process.env.STORYBOOK_INCLUDE_REGRESSION_STORIES === '1'
      ? //  '../src/components/**/*.stories.@(ts|tsx)' // BREAKS SB
        '../stories/**/*.stories.@(ts|tsx)' // FIXME: workaround until wildcard globs fixed
      : //  '../src/components/**/!(*Regression).stories.@(ts|tsx)', // BREAKS SB
        '../stories/**/!(*Regression).stories.@(ts|tsx)', // FIXME: workaround until wildcard globs fixed
  ].filter(Boolean) as string[],
};

export default config;
