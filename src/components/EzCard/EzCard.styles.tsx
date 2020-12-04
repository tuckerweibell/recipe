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

export const CardContainer = styled.div<any>`
  background: var(--recipe-card-background-color);
  box-shadow: var(--recipe-card-dropshadow);
  ${accentStyles};
  ${rounded};
  ${size};
  ${isQuiet};
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
