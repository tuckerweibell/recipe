import styled, {css} from 'react-emotion';
import {variants} from '../../styles/';
import {childStyles} from './styles';

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

const use = variants('use', {
  aside,
  main,
});

export const PageSection = styled.div`
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
