import {css} from '@emotion/core';
import variant from 'styled-component-variant';
import {childStyles} from './styles';
import styled from '../../themes/styled';

const asideWidth = '290px';

const aside = ({theme}) => css`
  @media screen and (min-width: ${theme.breakpoints.medium}) {
    width: ${asideWidth};
  }
`;

const main = ({theme}) => css`
  @media screen and (min-width: ${theme.breakpoints.medium}) {
    width: calc(100% - ${asideWidth} - ${theme.spacing.xl3});
  }
`;

const vertical = ({theme}) => css`
  ${childStyles({theme})};

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    display: inline-block;
  }
`;

const horizontal = ({theme}) => css`
  > *:not(:last-child) {
    margin-bottom: ${theme.spacing.sm};
  }
  @media screen and (min-width: ${theme.breakpoints.medium}) {
    display: flex;
    > * {
      flex-basis: 0;
      flex-grow: 1;
      :not(:last-child) {
        margin-bottom: 0;
      }
      + * {
        margin-left: ${theme.spacing.lg};
      }
    }
  }
`;

const cx = (...args) => props => args.reduce((res, v) => css(res, v(props)), {});

const siblingSpacing = ({theme, sibling}) =>
  sibling &&
  css`
    margin-left: ${theme.spacing.xl3};
  `;

const use = variant('use', {
  aside: cx(vertical, aside),
  main: cx(vertical, main),
  horizontal,
});

export const PageSection = styled.div<any>`
  ${use};

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    vertical-align: top;
    ${siblingSpacing};
  }
`;
