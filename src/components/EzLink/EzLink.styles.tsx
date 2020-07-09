import {css} from '@emotion/core';
import styled from '../../themes/styled';
import {pseudoClasses} from '../../styles';

const base = ({theme}) => css`
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  ${pseudoClasses('color', {color: theme.colors.interactive.base})};

  &:hover {
    text-decoration: underline;
  }
`;

const link = p => css`
  > * {
    ${base(p)};
  }
`;

export const StyledLink = styled.span(link as any);
export const StyledAnchor = styled.a(base as any);
