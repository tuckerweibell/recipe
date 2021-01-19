import {css} from '@emotion/core';
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

const imagePos = responsive('imagePosition', {
  top: {flexWrap: 'wrap'},
  right: {flexWrap: 'nowrap'},
  left: {flexWrap: 'nowrap'},
  reset: {flexWrap: 'nowrap'},
});

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

export const CardContainer = styled.div<any>`
  background: var(--recipe-card-background-color);
  box-shadow: var(--recipe-card-dropshadow);
  ${accentStyles};
  ${rounded};
  ${size};
  ${isQuiet};
  ${clickable};
  display: flex;
  ${imagePos};
  > * {
    flex-grow: 1;
    max-width: 100%;
  }
`;

export const CardHeadingContainer = styled.div`
  margin: var(--recipe-card-padding) var(--recipe-card-padding) 0;
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

const vertical = ({horizontal}) =>
  !horizontal &&
  css`
    && > * + * {
      border-top: 1px solid var(--recipe-card-border-color);
    }
  `;

const horizontal = ({horizontal: isHorizontal}) =>
  isHorizontal &&
  css`
    display: flex;

    > * {
      flex-basis: 0;
      flex-grow: 1;
    }
  `;

export const SectionContainer = styled.div(vertical, horizontal);
