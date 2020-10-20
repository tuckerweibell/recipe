import {css} from '@emotion/core';
import styled from '@emotion/styled';
import variant from 'styled-component-variant';
import {mq} from '../../themes/styled';
import {childStyles} from './styles';

const aside = () => mq('medium', {width: 'var(--recipe-page-section-aside-width)'});

const main = () =>
  mq(
    'medium',
    css`
      width: calc(
        100% - var(--recipe-page-section-aside-width) - var(--recipe-global-static-size-600)
      );
    `
  );

const vertical = () => css`
  ${childStyles()};
  ${mq('medium', {display: 'inline-block'})};
`;

const horizontal = () => css`
  > *:not(:last-child) {
    margin-bottom: var(--recipe-global-static-size-150);
  }

  ${mq(
    'medium',
    css`
      display: flex;
      > * {
        flex-basis: 0;
        flex-grow: 1;
        :not(:last-child) {
          margin-bottom: 0;
        }
        + * {
          margin-left: var(--recipe-global-static-size-250);
        }
      }
    `
  )};
`;

const cx = (...args) => props => args.reduce((res, v) => css(res, v(props)), {});

const siblingSpacing = ({sibling}) =>
  sibling &&
  css`
    margin-left: var(--recipe-global-static-size-600);
  `;

const use = variant('use', {
  aside: cx(vertical, aside),
  main: cx(vertical, main),
  horizontal,
});

export const PageSection = styled.div<any>(use, props =>
  mq(
    'medium',
    css`
      vertical-align: top;
      ${siblingSpacing(props)};
    `
  )
);
