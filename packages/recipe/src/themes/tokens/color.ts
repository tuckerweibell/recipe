const globalColorPalette = {
  agave: {
    50: '#ebfeff',
    100: '#d6fbff',
    200: '#9de8f0',
    300: '#00aebc',
    400: '#007c89',
    500: '#00606d',
    600: '#014b57',
    700: '#003844',
    800: '#00232c',
  },
  blueberry: {
    50: '#f5faff',
    100: '#e4f1ff',
    200: '#bedcff',
    300: '#5d9cff',
    400: '#3a64df',
    500: '#1e4dc3',
    600: '#123aa0',
    700: '#07297c',
    800: '#021859',
  },
  ezGreen: {
    50: '#eafff9',
    100: '#d3faeb',
    200: '#98eec8',
    300: '#00b373',
    400: '#008054',
    500: '#006444',
    600: '#004e39',
    700: '#043c2f',
    800: '#00251d',
  },
  guava: {
    50: '#fff2f4',
    100: '#ffe8ea',
    200: '#ffc9ca',
    300: '#ff585d',
    400: '#d90026',
    500: '#b10213',
    600: '#8d0202',
    700: '#680900',
    800: '#460800',
  },
  kiwi: {
    50: '#f1ffe7',
    100: '#e1fccc',
    200: '#bcea96',
    300: '#5db020',
    400: '#2f7f00',
    500: '#186500',
    600: '#174f00',
    700: '#163d01',
    800: '#0c2500',
  },
  lemon: {
    50: '#fefde9',
    100: '#fffcc4',
    200: '#fffb97',
    300: '#fff200',
  },
  papaya: {
    50: '#FFF9ED',
    100: '#FFEDD1',
    200: '#ffd187',
    300: '#fbb41a',
    400: '#b44f01',
    500: '#943c00',
    600: '#772c00',
    700: '#651900',
  },
  peppercorn: {
    50: '#f9f9fb',
    100: '#f0f2f7',
    200: '#d6d9e1',
    300: '#989ca8',
    400: '#6f737e',
    500: '#565964',
    600: '#41434a',
    700: '#303135',
    800: '#212223',
  },
  pomegranate: {
    50: '#fff1fa',
    100: '#ffdff0',
    200: '#ffc5e8',
    300: '#f2519d',
    400: '#ca0378',
    500: '#980060',
    600: '#820b58',
    700: '#620345',
    800: '#430031',
  },
  white: '#fff',
} as const;

const textColorTokens = {
  'color-text-default': {
    displayText: 'Used for default text color.',
    value: globalColorPalette.peppercorn[800],
  },
  'color-text-subtle': {
    displayText: 'Used for secondary, subtle text color.',
    value: globalColorPalette.peppercorn[400],
  },
  'color-text-disabled': {
    displayText: 'Used for disabled text color.',
    value: globalColorPalette.peppercorn[300],
  },
  'color-text-contrast': {
    displayText: 'Used for text color on a dark surface.',
    value: globalColorPalette.white,
  },
  'color-text-critical': {
    displayText: 'Used for critical text color.',
    value: globalColorPalette.guava[400],
  },
  'color-text-caution': {
    displayText: 'Used for caution text color.',
    value: globalColorPalette.papaya[400],
  },
  'color-text-success': {
    displayText: 'Used for success text color.',
    value: globalColorPalette.kiwi[400],
  },
  'color-text-highlight': {
    displayText: 'Used for highlight text color.',
    value: globalColorPalette.blueberry[400],
  },
};

const iconColorTokens = {
  'color-icon-default': {
    displayText: 'Used for outline color of icons.',
    value: textColorTokens['color-text-default'].value,
  },
  'color-icon-subtle': {
    displayText: 'Used for outline color of secondary, subtle icons.',
    value: textColorTokens['color-text-subtle'].value,
  },
  'color-icon-disabled': {
    displayText: 'Used for outline color of disabled icons.',
    value: textColorTokens['color-text-disabled'].value,
  },
  'color-icon-contrast': {
    displayText: 'Used for outline color of icons on a dark surface.',
    value: textColorTokens['color-text-contrast'].value,
  },
  'color-icon-critical': {
    displayText: 'Used for outline color of critical icons.',
    value: textColorTokens['color-text-critical'].value,
  },
  'color-icon-caution': {
    displayText: 'Used for outline color of caution icons.',
    value: textColorTokens['color-text-caution'].value,
  },
  'color-icon-success': {
    displayText: 'Used for outline color of success icons.',
    value: textColorTokens['color-text-success'].value,
  },
  'color-icon-highlight': {
    displayText: 'Used for outline color of highlight icons.',
    value: textColorTokens['color-text-highlight'].value,
  },
  'color-icon-rating': {
    displayText: 'Used for outline color of rating icons.',
    value: globalColorPalette.papaya[300],
  },
};

const interactiveColorTokens = {
  'color-interactive-default': {
    displayText:
      "Used for links. Links are used for navigation and actions that don't change state.",
    value: globalColorPalette.blueberry[400],
  },
  'color-interactive-hovered': {
    displayText: 'Used for hovered links.',
    value: globalColorPalette.blueberry[500],
  },
  'color-interactive-visited': {
    displayText: 'Used for visited links.',
    value: globalColorPalette.blueberry[600],
  },
};

const borderColorTokens = {
  'color-border-default': {
    displayText: 'Used for borders on input fields and secondary button outlines.',
    value: globalColorPalette.peppercorn[200],
  },
  'color-border-hovered': {
    displayText: 'Used for borders on hovered interactive elements.',
    value: globalColorPalette.peppercorn[300],
  },
  'color-border-activated': {
    displayText: 'Used for borders on activated interactive elements.',
    value: globalColorPalette.ezGreen[700],
  },
  'color-border-disabled': {
    displayText: 'Used for borders on disabled interactive elements.',
    value: globalColorPalette.peppercorn[300],
  },
  'color-border-contrast': {
    displayText: 'Used for borders on dark backgrounds.',
    value: globalColorPalette.white,
  },
};

const borderCriticalColorTokens = {
  'color-border-critical-default': {
    displayText:
      'Used for borders on critical components such as an outline on interactive elements in an error state.',
    value: globalColorPalette.guava[400],
  },
  'color-border-critical-subtle': {
    displayText: 'Used for subdued borders on critical components.',
    value: globalColorPalette.guava[200],
  },
  'color-border-critical-hovered': {
    displayText: 'Used for borders on critical components in an hovered state.',
    value: globalColorPalette.guava[500],
  },
  'color-border-critical-activated': {
    displayText: 'Used for borders on critical components in an active state.',
    value: globalColorPalette.guava[600],
  },
  'color-border-critical-disabled': {
    displayText: 'Used for borders on critical components in an disabled state.',
    value: borderColorTokens['color-border-disabled'].value,
  },
};

const borderCautionColorTokens = {
  'color-border-caution-default': {
    displayText: 'Used for borders on caution components.',
    value: globalColorPalette.papaya[400],
  },
  'color-border-caution-subtle': {
    displayText: 'Used for subdued borders on caution components.',
    value: globalColorPalette.papaya[200],
  },
};

const borderSuccessColorTokens = {
  'color-border-success-default': {
    displayText: 'Used for borders on success components.',
    value: globalColorPalette.kiwi[400],
  },
  'color-border-success-subtle': {
    displayText: 'Used for subdued borders on success components.',
    value: globalColorPalette.kiwi[200],
  },
};

const borderHighlightColorTokens = {
  'color-border-hightlight-default': {
    displayText: 'Used for borders on hightlight components.',
    value: globalColorPalette.blueberry[400],
  },
  'color-border-hightlight-subtle': {
    displayText: 'Used for subdued borders on hightlight components.',
    value: globalColorPalette.blueberry[200],
  },
};

const surfaceColorTokens = {
  'color-surface-default': {
    displayText: 'Used for background color in components such as Card, Modal, and Popover.',
    value: globalColorPalette.white,
  },
  'color-surface-subtle': {
    displayText:
      'Used for subdued background color in components such as Card, Modal, and Popover.',
    value: globalColorPalette.peppercorn[50],
  },
  'color-surface-hovered': {
    displayText:
      'Used for surface color on interactive elements such as action list items when in a hovered state.',
    value: globalColorPalette.peppercorn[100],
  },
  'color-surface-pressed': {
    displayText:
      'Used for surface color on interactive elements such as action list items when in a pressed or selected state.',
    value: globalColorPalette.ezGreen[600],
  },
  'color-surface-disabled': {
    displayText:
      'Used for surface color on interactive elements such as action list items when in a disabled state.',
    value: globalColorPalette.peppercorn[200],
  },
};

const surfaceNeutralColorTokens = {
  'color-surface-neutral-default': {
    displayText: 'Used for a background color in neutral banners.',
    value: globalColorPalette.peppercorn[400],
  },
  'color-surface-neutral-subtle': {
    displayText: 'Used for a subtle background color in neutral banners.',
    value: globalColorPalette.peppercorn[100],
  },
  'color-surface-neutral-bold': {
    displayText: 'Used for a bold background color in neutral banners.',
    value: globalColorPalette.peppercorn[600],
  },
};

const surfaceCriticalColorTokens = {
  'color-surface-critical-default': {
    displayText: 'Used for a background color in critical elements including banners.',
    value: globalColorPalette.guava[400],
  },
  'color-surface-critical-subtle': {
    displayText: 'Used for a subtle background color in elements including critical banners.',
    value: globalColorPalette.guava[100],
  },
  'color-surface-critical-subtle-hovered': {
    displayText:
      'Used for a subtle background color in critical elements including banners in a hovered state.',
    value: globalColorPalette.guava[100],
  },
  'color-surface-critical-subtle-pressed': {
    displayText:
      'Used for a subtle background color in critical elements including banners in a pressed or selected state.',
    value: globalColorPalette.guava[200],
  },
  'color-surface-critical-bold': {
    displayText: 'Used for a bold background color in critical elements including banners.',
    value: globalColorPalette.guava[600],
  },
};

const surfaceCautionColorTokens = {
  'color-surface-caution-default': {
    displayText: 'Used for a background color in caution elements including banners.',
    value: globalColorPalette.papaya[400],
  },
  'color-surface-caution-subtle': {
    displayText: 'Used for a subtle background color in elements including caution banners.',
    value: globalColorPalette.papaya[100],
  },
  'color-surface-caution-bold': {
    displayText: 'Used for a bold background color in caution elements including banners.',
    value: globalColorPalette.papaya[600],
  },
};

const surfaceSuccessColorTokens = {
  'color-surface-sucess-default': {
    displayText: 'Used for a background color in sucess elements including banners.',
    value: globalColorPalette.kiwi[400],
  },
  'color-surface-sucess-subtle': {
    displayText: 'Used for a subtle background color in elements including sucess banners.',
    value: globalColorPalette.kiwi[100],
  },
  'color-surface-sucess-bold': {
    displayText: 'Used for a bold background color in sucess elements including banners.',
    value: globalColorPalette.kiwi[600],
  },
};

const surfaceHighlightColorTokens = {
  'color-surface-highlight-default': {
    displayText: 'Used for a background color in highlight elements including banners.',
    value: globalColorPalette.blueberry[400],
  },
  'color-surface-highlight-subtle': {
    displayText: 'Used for a subtle background color in elements including highlight banners.',
    value: globalColorPalette.blueberry[100],
  },
  'color-surface-highlight-bold': {
    displayText: 'Used for a bold background color in highlight elements including banners.',
    value: globalColorPalette.blueberry[600],
  },
};

const surfaceReliabilityRockstarColorTokens = {
  'color-surface-reliability-rockstar-subtle': {
    displayText:
      'Used for a subtle background color in elements including reliability rockstar banners.',
    value: globalColorPalette.lemon[100],
  },
  'color-surface-reliability-rockstar-bold': {
    displayText:
      'Used for a bold background color in reliability rockstar elements including banners.',
    value: globalColorPalette.lemon[300],
  },
};

const actionCtaColorTokens = {
  'color-action-cta-default': {
    displayText:
      'Used as the background color for primary actions and (maybe) the fill color for checkboxes and radio buttons to communicate interaction states.',
    value: globalColorPalette.ezGreen[400],
  },
  'color-action-cta-hovered': {
    displayText: 'Used as the background color for hovered primary actions.',
    value: globalColorPalette.ezGreen[500],
  },
  'color-action-cta-pressed': {
    displayText: 'Used as the background color for pressed primary actions.',
    value: globalColorPalette.ezGreen[600],
  },
  'color-action-cta-disabled': {
    displayText: 'Used as the background color for disabled primary actions.',
    value: surfaceColorTokens['color-surface-disabled'].value,
  },
};

const actionDefaultColorTokens = {
  'color-action-default-default': {
    displayText: 'Used as the background color for default actions.',
    value: globalColorPalette.white,
  },
  'color-action-default-hovered': {
    displayText: 'Used as the background color for hovered default actions.',
    value: globalColorPalette.peppercorn[100],
  },
  'color-action-default-pressed': {
    displayText: 'Used as the background color for pressed default actions.',
    value: globalColorPalette.peppercorn[200],
  },
  'color-action-default-disabled': {
    displayText: 'Used as the background color for disabled default actions.',
    value: surfaceColorTokens['color-surface-disabled'].value,
  },
};

const actionCriticalColorTokens = {
  'color-action-critical-default': {
    displayText:
      'Used as the background color for critical actions and the fill color for checkboxes and radio buttons to communicate destructive interaction states.',
    value: globalColorPalette.guava[400],
  },
  'color-action-critical-hovered': {
    displayText: 'Used as the background color for hovered critical actions.',
    value: globalColorPalette.guava[500],
  },
  'color-action-critical-pressed': {
    displayText: 'Used as the background color for pressed critical actions.',
    value: globalColorPalette.guava[600],
  },
  'color-action-critical-disabled': {
    displayText: 'Used as the background color for disabled critical actions.',
    value: surfaceColorTokens['color-surface-disabled'].value,
  },
};

const focusedColorTokens = {
  'color-focused-default': {
    displayText:
      'Used focused stated to communicate when a user has highlighted an element, using an input method such as keyboard or voice.',
    value: globalColorPalette.peppercorn[800],
  },
};

export const color = {
  ...textColorTokens,
  ...iconColorTokens,
  ...interactiveColorTokens,
  ...borderColorTokens,
  ...borderCriticalColorTokens,
  ...borderCautionColorTokens,
  ...borderSuccessColorTokens,
  ...borderHighlightColorTokens,
  ...surfaceColorTokens,
  ...surfaceNeutralColorTokens,
  ...surfaceCriticalColorTokens,
  ...surfaceCautionColorTokens,
  ...surfaceSuccessColorTokens,
  ...surfaceHighlightColorTokens,
  ...surfaceReliabilityRockstarColorTokens,
  ...actionCtaColorTokens,
  ...actionDefaultColorTokens,
  ...actionCriticalColorTokens,
  ...focusedColorTokens,
};
