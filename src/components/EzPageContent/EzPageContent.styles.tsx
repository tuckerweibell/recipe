import {css} from '@emotion/core';
import {mq} from '../../themes/styled';

export const base = () => css`
  background: var(--recipe-global-color-static-gray-200);
  padding: var(--recipe-global-static-size-150) var(--recipe-global-static-size-100);

  && > * + * {
    margin-top: var(--recipe-global-static-size-400);
  }

  ${mq('medium', {padding: 'var(--recipe-global-static-size-400)'})};
`;
