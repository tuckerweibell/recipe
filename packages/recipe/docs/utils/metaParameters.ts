const metaParameters = {
  chromatic: {disableSnapshot: true},
  layout: 'fullscreen',
  options: {showPanel: false},
  previewTabs: {
    canvas: {hidden: true}, // hides the Canvas tab
    'storybook/docs/panel': {hidden: true}, // hides the Docs tab
  },
  toolbar: {
    // hides all default tools
    title: {hidden: true},
    zoom: {hidden: true},
    eject: {hidden: true},
    copy: {hidden: true},
    fullscreen: {hidden: true},
    'storybook/background': {hidden: true},
    'storybook/viewport': {hidden: true},
    'storybook/addon-a11y': {hidden: true},
  },
  viewMode: 'story',
} as const;

export default metaParameters;
