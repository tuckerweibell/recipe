import {css, Interpolation} from '@emotion/core';
import styled from '@emotion/styled';
import variant from 'styled-component-variant';
import {responsive} from '../../styles';
import {mq} from '../../themes/styled';
import './vars.css';

const accentStyles = ({accent}) =>
  accent &&
  css`
    border-left-width: var(--recipe-card-accent-border-size);
    border-left-style: solid;
    border-left-color: var(--recipe-card-accent-color);
  `;

const rounded = Object.assign(
  mq('medium', {
    borderRadius: 'var(--recipe-card-border-radius)',
    '--recipe-card-border-radius': 'inherit',
  }),
  {'--recipe-card-border-radius': 0}
);

const size = variant('size', {
  small: {'--recipe-card-padding': 'var(--recipe-card-padding-small)'},
});

const isQuiet = variant('isQuiet', {
  true: {'--recipe-card-dropshadow': 'var(--recipe-card-dropshadow-quiet)'},
});

const clickable = variant('clickable', {
  true: () => css`
    position: relative;

    /* 
      semi-transparent overlay on top of the card
      allowing varied opacity on hover
    */
    &:before {
      content: ' ';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      position: absolute;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--recipe-global-color-transparent);
    }

    &:hover {
      /* double up the shadow on hover */
      box-shadow: var(--recipe-card-dropshadow), var(--recipe-card-dropshadow);
      cursor: pointer;

      /*  make the mask darker on hover */
      &:before {
        background-color: var(--recipe-global-color-translucent-dark);
      }
    }

    /* make the mask even darker still when active/clicking */
    &:active:before {
      background-color: var(--recipe-global-color-translucent-darker);
    }

    /* when the card content is in focus, promote the focus up to the card itself */
    &:focus-within {
      box-shadow: var(--recipe-card-dropshadow), rgb(0, 95, 204) 0 0px 0px 2px;
    }

    /*
      for browsers that don't support :focus-within,
      make sure links retain their focus style
    */
    & a:focus {
      text-decoration: underline;
    }

    /*
      remove decoration for focused links within the card
      (since focus is promoted to the card itself)
    */
    &:focus-within a:focus {
      text-decoration: none;
      outline: none;
    }
  `,
});

export const CardHeadingContainer = styled.div`
  position: relative;
`;

const gutter = () => css`
  margin: calc(var(--recipe-card-header-gutter-size) * -1) 0 0
    calc(var(--recipe-card-header-gutter-size) * -1);

  > * {
    margin: var(--recipe-card-header-gutter-size) 0 0 var(--recipe-card-header-gutter-size);
  }
`;

export const CardLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  ${gutter};
`;

export const container = props => css`
  background: var(--recipe-card-background-color);
  box-shadow: var(--recipe-card-dropshadow);
  ${accentStyles(props)};
  ${rounded};
  ${size({size: props.size || (props.isQuiet ? 'small' : undefined)})};
  ${isQuiet(props)};
  ${clickable(props)};
`;

const unitlessToPx = value => (typeof value === 'number' ? `${value}px` : value);

const isIE11 =
  typeof window !== `undefined` &&
  !!window.MSInputMethodContext &&
  !!(document as any).documentMode;

// only include MS prefix for IE
// the prefix will be excluded from server rendering, but 🤷‍♂️
const ms = (styles: Interpolation): any => isIE11 && styles;

const columns = responsive('imagePosition', {
  top: {
    ...ms({'-ms-grid-columns': '0px minmax(0px, 100%)'}),
    gridTemplateColumns: `
      [left] 0
      [header] minmax(0, 100%)
      [right] 0
    `,
  },
  right: ({maxWidth}) => ({
    ...ms({'-ms-grid-columns': `0px minmax(0px, 100%) ${unitlessToPx(maxWidth) || '50%'}`}),
    gridTemplateColumns: `
      [left] 0
      [header] minmax(0, 100%)
      [right] ${unitlessToPx(maxWidth) || '50%'}
    `,
  }),
  left: ({maxWidth}) => ({
    ...ms({'-ms-grid-columns': `${unitlessToPx(maxWidth) || '50%'} minmax(0px, 100%) 0px`}),
    gridTemplateColumns: `
      [left] ${unitlessToPx(maxWidth) || '50%'}
      [header] minmax(0, 100%)
      [right] 0
    `,
  }),
});

export const grid = props => css`
  ${ms({display: '-ms-grid'})};
  display: grid;
  ${columns(props)};
  ${ms({'-ms-grid-rows': 'auto auto 1fr auto'})};
  grid-template-rows: auto auto auto 1fr auto;
  grid-template-areas:
    '. top .'
    'left header right'
    'left content right'
    'left sections right'
    'left footer right';
  width: 100%;
`;

const position = responsive('imagePosition', {
  left: {
    gridArea: 'left',
    borderTopLeftRadius: 'var(--recipe-card-border-radius)',
    borderBottomLeftRadius: 'var(--recipe-card-border-radius)',
    '> img': {height: '100%'},
    ...ms({'-ms-grid-column': '1', '-ms-grid-row-span': '3', '-ms-grid-row': '1'}),
  },
  right: {
    gridArea: 'right',
    borderTopRightRadius: 'var(--recipe-card-border-radius)',
    borderBottomRightRadius: 'var(--recipe-card-border-radius)',
    '> img': {height: '100%'},
    ...ms({'-ms-grid-column': '3', '-ms-grid-row-span': '3', '-ms-grid-row': '1'}),
  },
  top: {
    gridArea: 'top',
    borderTopLeftRadius: 'var(--recipe-card-border-radius)',
    borderTopRightRadius: 'var(--recipe-card-border-radius)',
    ...ms({'-ms-grid-column': '1', '-ms-grid-column-span': '3', '-ms-grid-row': '1'}),
  },
  reset: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    ...ms({'-ms-grid-row-span': '1', '-ms-grid-column-span': '1'}),
  },
});

export const preview = props =>
  css`
    margin: 0;
    overflow: hidden;
    ${position(props)};
    > img {
      width: 100%;
      /* the default would be vertical-align: baseline, but we don't need
      to align the image with text descenders */
      vertical-align: top;
    }
  `;
export const header = () =>
  css`
    ${ms({'-ms-grid-column': '2', '-ms-grid-row': '2'})};
    grid-area: header;
    padding: var(--recipe-card-padding) var(--recipe-card-padding) 0;
  `;
export const content = () =>
  css`
    ${ms({'-ms-grid-column': '2', '-ms-grid-row': '3'})};
    grid-area: content;
    padding: var(--recipe-card-padding);
  `;
export const sections = () =>
  css`
    ${ms({'-ms-grid-column': '2', '-ms-grid-row': '3'})};
    grid-area: sections;
  `;
export const footer = () =>
  css`
    ${ms({'-ms-grid-column': '2', '-ms-grid-row': '4'})};
    grid-area: footer;
    padding: var(--recipe-global-static-size-150) var(--recipe-card-padding);
    text-align: center;
    border-top: 1px solid var(--recipe-card-border-color);
    border-radius: 0 0 var(--recipe-card-border-radius) var(--recipe-card-border-radius);
    background-color: var(--recipe-card-footer-background-color);
    overflow: hidden;
  `;

export const vertical = () => css`
  && > * + * {
    border-top: 1px solid var(--recipe-card-border-color);
  }
`;

export const horizontal = () => css`
  display: flex;

  > * {
    flex-basis: 0;
    flex-grow: 1;
  }
`;
