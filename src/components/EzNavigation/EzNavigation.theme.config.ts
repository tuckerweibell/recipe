import {mergeCss} from '../theme.config';

export default mergeCss({
  theme: {
    colors: {
      'nav-bg': 'linear-gradient(60deg, #1b2023 0%, #373d43 100%)',
      'nav-bg-selected': '#1b2023',
      'nav-text': '#b8bdc2',
      'nav-text-hover': 'white',
      'nav-text-selected': 'white',
      'notification-bg': '$red600',
      'notification-text': 'white',
    },
    sizes: {
      'nav-sidebar-w': '240px',
      'nav-bar-h': '70px',
      'nav-bar-menu-h': 'calc(100vh - $sizes$nav-bar-h)',
    },
  },
});
