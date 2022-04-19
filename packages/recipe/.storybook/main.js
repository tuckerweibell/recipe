module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      // we can enable some of these options as and when we implement CSF format for our stories
      options: {
        backgrounds: false,
        docs: false,
        controls: false,
        actions: false,
      },
    },
  ],
};
