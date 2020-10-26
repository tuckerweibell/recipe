import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {mq} from '../../themes/styled';
import './vars.css';

const base = () => css`
  background-color: var(--recipe-page-header-background-color);
  box-shadow: inset 0 -1px 0 0 var(--recipe-page-header-border-color);

  --recipe-page-header-content-padding-y: var(--recipe-global-static-size-150);
  --recipe-page-header-content-padding-x: var(--recipe-global-static-size-250);
  /* fallback for browsers that don't support css vars */
  padding: var(--recipe-global-static-size-150) var(--recipe-global-static-size-250);
  padding: var(--recipe-page-header-content-padding-y) var(--recipe-page-header-content-padding-x);
`;

const medium = () =>
  mq(
    'medium',
    css`
      --recipe-page-header-content-padding-y: var(--recipe-global-static-size-200);
      --recipe-page-header-content-padding-x: var(--recipe-global-static-size-400);

      &.subheader {
        --recipe-page-header-content-padding-y: var(--recipe-global-static-size-250);
      }
    `
  );

export const Surface = styled.div<any>(base, medium);
