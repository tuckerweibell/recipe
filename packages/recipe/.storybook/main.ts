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
    '../src/components/**/*.mdx',
    process.env.STORYBOOK_INCLUDE_REGRESSION_STORIES === '1'
      ? '../src/components/**/*.stories.@(ts|tsx)'
      : '../src/components/**/!(*Regression).stories.@(ts|tsx)',
  ].filter(Boolean) as string[],
};

export default config;
