import {css} from '@emotion/core';
import EzHeading from '../EzHeading';
import {mq} from '../../themes/styled';

// eslint-disable-next-line dot-notation
const ezHeadingSelector = `.${EzHeading['__internalComponentSelector']}`;

export const childStyles = () => css`
  > *:not(:last-child) {
    margin-bottom: var(--recipe-global-static-size-150);
  }

  ${mq(
    'medium',
    css`
      > *:not(:last-child) {
        margin-bottom: var(--recipe-global-static-size-300);
      }
    `
  )}

  > ${ezHeadingSelector} {
    margin-bottom: var(--recipe-global-static-size-150);
    margin-left: var(--recipe-global-static-size-150);
    ${mq('medium', {marginLeft: 0})};
  }
`;
