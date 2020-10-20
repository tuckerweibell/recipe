import {css} from '@emotion/core';
import styled from '@emotion/styled';
import './vars.css';

const base = () => css`
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  color: var(--recipe-link-text-color);

  :hover {
    --recipe-link-text-color: var(--recipe-link-text-color-hover);
  }
  :active {
    --recipe-link-text-color: var(--recipe-link-text-color-down);
  }

  &:hover {
    text-decoration: underline;
  }
`;

const link = () => css`
  > * {
    ${base()};
  }
`;

export const StyledLink = styled.span(link as any);
export const StyledAnchor = styled.a(base as any);
