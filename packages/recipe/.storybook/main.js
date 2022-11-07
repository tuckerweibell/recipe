/** @type {import('@storybook/react/types').StorybookConfig} */
module.exports = {
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
    '@storybook/addon-interactions',
    '@react-theming/storybook-addon',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    'storybook-addon-playroom',
  ],
  features: {
    // allows use of the emotion version Recipe is using (can be removed once Storybook upgrades to Emotion 11)
    emotionAlias: false,
    interactionsDebugger: true, // enables playback controls
  },
  staticDirs: ['../public'],
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../docs/**/*.stories.mdx',
    process.env.STORYBOOK_INCLUDE_REGRESSION_STORIES === '1' &&
      '../src/**/*.regression.@(js|jsx|ts|tsx|mdx)',
  ].filter(Boolean),
};
