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

const use = variant('use', {
  aside,
  main,
});

type PageSectionProps = {
  children: React.ReactNode;
  use: 'aside' | 'main';
};

export const PageSection = styled.div<PageSectionProps>`
  ${use};

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    display: inline-block;
    vertical-align: top;

    & + ${() => PageSection} {
      margin-left: ${props => props.theme.spacing.xl3};
    }
  }

  ${childStyles};
`;
