import {css} from '@emotion/core';
import styled from '../../themes/styled';

const base = ({theme}) => css`
  background-color: ${theme.colors.content.background};
  box-shadow: inset 0 -1px 0 0 ${theme.colors.border.base};

  /* fallback for browsers that don't support css vars */
  padding: ${theme.spacing.sm} ${theme.spacing.lg};

  --recipe-surface-py: ${theme.spacing.sm};
  --recipe-surface-px: ${theme.spacing.lg};
  padding: var(--recipe-surface-py) var(--recipe-surface-px);

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    --recipe-surface-py: ${theme.spacing.md};
    --recipe-surface-px: ${theme.spacing.xl2};
  }
`;

export const Surface = styled.div(base);
