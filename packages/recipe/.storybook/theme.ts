import {create} from '@storybook/theming/create';
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
  appBg: ezTheme.palette.common.green110,
  colorPrimary: ezTheme.palette.common.green100,
  colorSecondary: ezTheme.palette.common.green100,
});

const previewTheme = create({
  ...baseTheme,
  base: 'light',
});

export {managerTheme, previewTheme};
