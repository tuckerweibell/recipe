import {css} from '@emotion/core';
import styled from '@emotion/styled';

const listBase = () => css`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  && > * + * {
    margin-left: var(--recipe-global-static-size-150);
  }
`;

const activeTab = ({active}) =>
  active &&
  css`
    box-shadow: inset 0 -2px 0 0 var(--recipe-alias-focus-ring-color);

    && > *,
    && a {
      color: var(--recipe-alias-text-color);

      :focus {
        outline-color: var(--recipe-alias-focus-ring-color);
      }
    }
  `;

const tabBase = ({active}) => css`
  display: flex;
  margin: 0;

  && a,
  && > button {
    display: flex;
    padding: var(--recipe-global-static-size-150) var(--recipe-global-static-size-100);
    text-decoration: none;

    &:hover {
      box-shadow: ${!active && `inset 0 -2px 0 0 var(--recipe-alias-border-color)`};
    }

    &:focus {
      outline: auto;
      outline-color: var(--recipe-alias-focus-ring-color);
    }
  }
`;

export const StyledUl = styled.ul(listBase as any);

export const StyledLi = styled.li<{active: boolean}>(tabBase, activeTab);
