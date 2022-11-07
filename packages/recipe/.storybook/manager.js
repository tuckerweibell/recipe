import {addons} from '@storybook/addons';
import {managerTheme} from './theme';

addons.setConfig({
  theme: managerTheme,
  backgrounds: {
    default: 'dark',
  },
  previewTabs: {
    'storybook/docs/panel': {index: -1}, // makes Docs the first tab
  },
});
