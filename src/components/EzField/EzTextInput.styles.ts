import {css} from '@emotion/core';
import {mq} from '../../themes/styled';

// pre-calculate where to put the error icon (icon width + right padding of input)
const iconOffset = '24px';

const inputBase = ({error}) => css`
  font-family: var(--recipe-global-font-family-base);
  font-size: var(--recipe-alias-font-size-default);
  display: block;
  color: var(--recipe-alias-text-color);
  width: 100%;
  background: var(--recipe-global-color-static-white);
  border: 1px solid var(--recipe-alias-border-color);
  border-radius: 4px;
  /* 
    inputs and buttons should be equivalent in size, but since inputs can't be a line-height lower than 1.25em
    we have to use a line-height of 1.25rem and deduct the additional 0.25rem from the vertical padding
  */
  line-height: 1.25rem;
  padding: calc(var(--recipe-global-static-size-100) - 0.125rem)
    var(--recipe-global-static-size-150);

  :enabled {
    box-shadow: var(--recipe-alias-shadow-small);

    :hover {
      border-color: ${!error && 'var(--recipe-global-color-static-gray-500)'};
    }
  }

  ::placeholder {
    color: var(--recipe-alias-placeholder-text-color);
  }
`;

const inputError = ({error, touched}) =>
  error &&
  touched &&
  css`
    border-color: var(--recipe-semantic-negative-color-default);
    padding-right: ${iconOffset};
  `;

const inputDisabled = ({disabled}) =>
  disabled &&
  css`
    background-color: var(--recipe-global-color-static-gray-200);
    border-color: var(--recipe-alias-border-color-light);
    color: var(--recipe-alias-text-color-disabled);
  `;

const roundedBottom = () =>
  mq(
    'medium',
    css`
      border-bottom-right-radius: var(--recipe-alias-border-radius-regular);
      border-bottom-left-radius: var(--recipe-alias-border-radius-regular);
    `
  );

export const borderCollapse = ({showInlineError}) =>
  showInlineError &&
  css`
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    ${roundedBottom()};
  `;

export default props =>
  css(inputBase(props), inputError(props), inputDisabled(props), borderCollapse(props));
