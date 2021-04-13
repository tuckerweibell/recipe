import theme from './EzCard.theme.config';

export const container = theme.css({
  backgroundColor: '$card-bg',
  boxShadow: '$card',

  '--radii-card-rounded': 0,

  when: {
    medium: {
      borderRadius: '$card-rounded',
      '--radii-card-rounded': 'inherit',
    },
  },

  variants: {
    accent: {
      info: {
        borderLeftWidth: '$card-accent',
        borderLeftStyle: 'solid',
        borderLeftColor: '$card-accent',
      },
    },
    size: {
      small: {
        '--space-card-p': '$space$card-sm-p',
      },
      medium: {},
    },
    isQuiet: {
      true: {
        '--shadows-card': '$shadows$card-quiet',
      },
    },
    clickable: {
      true: {
        position: 'relative',

        // semi-transparent overlay on top of the card allowing varied opacity on hover
        '&:before': {
          content: "' '",
          inset: 0,
          overflow: 'hidden',
          position: 'absolute',
          transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          borderRadius: 'inherit',
          pointerEvents: 'none',
          backgroundColor: '$transparent',
        },
        // make the card overlay darker when hovering
        '&:hover': {
          boxShadow: '$card-hover',
          cursor: 'pointer',
          '&:before': {
            backgroundColor: '$card-mask',
          },
        },
        // and darker still when clicking
        '&:active:before': {
          backgroundColor: '$card-mask',
        },
        // when the card content is in focus, promote the focus up to the card itself
        '&:focus-within': {
          boxShadow: '$card-focus',
        },
        // for browsers that don't support :focus-within, make sure links retain their focus style
        '& a:focus': {
          textDecoration: 'underline',
        },
        // for browsers that do support :focus-within, we can remove decoration for focused links
        // since focus is promoted to the card itself
        '&:focus-within a:focus': {
          textDecoration: 'none',
          outline: 'none',
        },
      },
    },
  },
});

// ${size({size: props.size || (props.isQuiet ? 'small' : undefined)})};

export const grid = theme.css({
  display: 'grid',
  '-ms-grid-rows': 'auto auto 1fr auto',
  gridTemplateRows: 'auto auto auto 1fr auto',
  gridTemplateAreas: `
    '. top .'
    'left header right'
    'left content right'
    'left sections right'
    'left footer right'
  `,
  width: '$full',

  variants: {
    imagePosition: {
      top: {
        msGridColumns: '0px minmax(0px, 100%)',
        gridTemplateColumns: `
          [left] 0
          [header] minmax(0, 100%)
          [right] 0
        `,
      },
      right: {
        msGridColumns: '0px minmax(0px, 100%) var(--sizes-card-preview-max-w, 50%)',
        gridTemplateColumns: `
          [left] 0
          [header] minmax(0, 100%)
          [right] var(--sizes-card-preview-max-w, 50%)
        `,
      },
      left: {
        msGridColumns: 'var(--sizes-card-preview-max-w, 50%) 0px minmax(0px, 100%)',
        gridTemplateColumns: `
          [left] var(--sizes-card-preview-max-w, 50%)
          [header] minmax(0, 100%)
          [right] 0
        `,
      },
    },
  },
});

const positionReset = {
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  ...{msGridRowSpan: '1', msGridColumnSpan: '1'},
};

export const preview = theme.css({
  margin: 0,
  overflow: 'hidden',

  '& > img': {
    width: '$full',
    // the default would be vertical-align: baseline,
    // but we don't need to align the image with text descenders
    verticalAlign: 'top',
  },

  variants: {
    position: {
      left: {
        ...positionReset,
        gridArea: 'left',
        borderTopLeftRadius: 'var(--radii-card-rounded)',
        borderBottomLeftRadius: 'var(--radii-card-rounded)',
        '& > img': {height: '$full'},
        ...{msGridColumn: '1', msGridRowSpan: '3', msGridRow: '1'},
      },
      right: {
        ...positionReset,
        gridArea: 'right',
        borderTopRightRadius: 'var(--radii-card-rounded)',
        borderBottomRightRadius: 'var(--radii-card-rounded)',
        '& > img': {height: '$full'},
        ...{msGridColumn: '3', msGridRowSpan: '3', msGridRow: '1'},
      },
      top: {
        ...positionReset,
        gridArea: 'top',
        borderTopLeftRadius: 'var(--radii-card-rounded)',
        borderTopRightRadius: 'var(--radii-card-rounded)',
        ...{msGridColumn: '1', msGridColumnSpan: '3', msGridRow: '1'},
      },
    },
  },
});

export const header = theme.css({
  msGridColumn: '2',
  msGridRow: '2',
  gridArea: 'header',
  padding: '$card-p $card-p 0',
});

export const content = theme.css({
  msGridColumn: '2',
  msGridRow: '3',
  gridArea: 'content',
  padding: '$card-p',
});

export const sections = theme.css({
  msGridColumn: '2',
  msGridRow: '3',
  gridArea: 'sections',
});

export const footer = theme.css({
  msGridColumn: '2',
  msGridRow: '4',
  gridArea: 'footer',
  padding: '$150 $card-p',
  textAlign: 'center',
  borderTop: '1px solid $card-border',
  borderRadius: '0 0 var(--radii-card-rounded) var(--radii-card-rounded)',
  backgroundColor: '$card-footer-bg',
  overflow: 'hidden',
});

export const orientation = theme.css({
  variants: {
    layout: {
      vertical: {
        '&& > *:not(style) ~ *': {
          borderTop: '1px solid $card-border',
        },
      },
      horizontal: {
        display: 'flex',
        '& > *': {
          flexBasis: 0,
          flexGrow: 1,
        },
      },
    },
  },
});
