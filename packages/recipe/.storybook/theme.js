import {create} from '@storybook/theming';
import {ezTheme} from '../src/themes';

const baseTheme = {
  // Brand
  brandTitle: 'Recipe',
  brandUrl: 'https://ezcater.github.io/recipe/',
  brandImage: 'https://i.imgur.com/uIjnFxK.png',
  brandTarget: '_self',

  // Typography
  fontBase: 'Lato, "Helvetica Neue", Arial, Helvetica, sans-serif',
  fontCode: 'monospace',
};

const managerTheme = create({
  ...baseTheme,
  base: 'dark',
  appBg: ezTheme.palette.common.primary110,
  colorPrimary: ezTheme.palette.common.green,
  colorSecondary: ezTheme.palette.common.green,
});

const previewTheme = create({
  ...baseTheme,
  base: 'light',
});

export {managerTheme, previewTheme};
