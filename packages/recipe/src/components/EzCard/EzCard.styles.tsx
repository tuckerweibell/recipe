import theme from '../theme.config';

export const container = theme.css({
  backgroundColor: '$card-bg',
  boxShadow: '$card',
  borderStyle: '$card-border',
  borderWidth: '$card-border',
  borderColor: '$card-border',
  borderRadius: '$card-rounded',

  '--space-card-p': '$space$card-md-p',

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
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
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

export const msGrid = maxWidth =>
  theme.css({
    display: '-ms-grid',
    '-ms-grid-rows': 'auto auto 1fr auto',
    variants: {
      imagePosition: {
        top: {
          '-ms-grid-columns': '0px minmax(0px, 1fr) min-content 0px',
        },
        right: {
          '-ms-grid-columns': `0px minmax(0px, 1fr) min-content ${maxWidth || '50%'})`,
        },
        left: {
          '-ms-grid-columns': `${maxWidth || '50%'} minmax(0px, 1fr) min-content 0px`,
        },
      },
    },
  });

export const grid = theme.css({
  display: 'grid',
  gridTemplateRows: 'auto auto auto 1fr auto',
  gridTemplateAreas: `
    '. top top .'
    'left header close right'
    'left content content right'
    'left sections sections right'
    'left footer footer right'
  `,
  width: '$full',

  variants: {
    imagePosition: {
      top: {
        gridTemplateColumns: `
          [left] 0
          [header] minmax(0, 1fr)
          [close] min-content
          [right] 0
        `,
      },
      right: {
        gridTemplateColumns: `
          [left] 0
          [header] minmax(0, 1fr)
          [close] min-content
          [right] var(--sizes-card-preview-max-w, 50%)
        `,
      },
      left: {
        gridTemplateColumns: `
          [left] var(--sizes-card-preview-max-w, 50%)
          [header] minmax(0, 1fr)
          [close] min-content
          [right] 0
        `,
      },
    },
  },
});

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
        gridArea: 'left',
        borderTopLeftRadius: 'var(--radii-card-rounded)',
        borderBottomLeftRadius: 'var(--radii-card-rounded)',
        '& > img': {height: '$full'},
        ...{'-ms-grid-column': '1', '-ms-grid-row-span': '3', '-ms-grid-row': '1'},
      },
      right: {
        gridArea: 'right',
        borderTopRightRadius: 'var(--radii-card-rounded)',
        borderBottomRightRadius: 'var(--radii-card-rounded)',
        '& > img': {height: '$full'},
        ...{'-ms-grid-column': '4', '-ms-grid-row-span': '3', '-ms-grid-row': '1'},
      },
      top: {
        gridArea: 'top',
        borderTopLeftRadius: 'var(--radii-card-rounded)',
        borderTopRightRadius: 'var(--radii-card-rounded)',
        ...{'-ms-grid-column': '1', '-ms-grid-column-span': '4', '-ms-grid-row': '1'},
      },
    },
  },
});

export const header = theme.css({
  '-ms-grid-column': '2',
  '-ms-grid-row': '2',
  gridArea: 'header',
  padding: '$card-p $card-p 0',
});

export const content = theme.css({
  '-ms-grid-column': '2',
  '-ms-grid-row': '3',
  '-ms-grid-column-span': '2',
  gridArea: 'content',
  padding: '$card-p',
});

export const sections = theme.css({
  '-ms-grid-column': '2',
  '-ms-grid-row': '3',
  '-ms-grid-column-span': '2',
  gridArea: 'sections',
});

export const footer = theme.css({
  '-ms-grid-column': '2',
  '-ms-grid-row': '4',
  '-ms-grid-column-span': '2',
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
