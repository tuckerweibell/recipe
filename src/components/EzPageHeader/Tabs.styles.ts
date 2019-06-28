import {css} from 'react-emotion';
import styled from '../../themes/styled';
import {darken} from '../../styles';

const listBase = ({theme}) => css`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  > :not(:first-child) {
    margin-left: ${theme.spacing.sm};
  }
`;

const activeTab = ({theme, active}) =>
  active &&
  css`
    box-shadow: inset 0 -2px 0 0 ${theme.colors.interactive.focus.outline};

    && > * {
      color: ${theme.colors.text.base};

      :focus {
        outline-color: ${theme.colors.interactive.focus.outline};
      }
    }
  `;

const tabBase = ({theme, active}) => css`
  display: flex;
  margin: 0;

  && a,
  && > button {
    display: flex;
    padding: ${theme.spacing.sm} ${theme.spacing.xs};
    text-decoration: none;

    &:hover {
      box-shadow: ${!active && `inset 0 -2px 0 0 ${darken(theme.colors.border.base, 0.15)}`};
    }

    &:focus {
      outline: auto;
      outline-color: ${theme.colors.interactive.focus.outline};
    }
  }
`;

export const StyledUl = styled.ul(listBase as any);

export const StyledLi = styled.li<{active: boolean}>(tabBase, activeTab);
