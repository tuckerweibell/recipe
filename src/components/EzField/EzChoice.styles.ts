import {css} from '@emotion/core';
import styled from '@emotion/styled';

export const StyledOptions = styled.div`
  > label + label {
    margin-top: var(--recipe-global-static-size-100);
  }

  label {
    margin-top: var(--recipe-global-static-size-100);
  }
`;

const borderStyle = ({bordered, isDisabled}) =>
  bordered &&
  css`
    border: 1px solid var(--recipe-alias-border-color);
    border-radius: 4px;
    padding: calc(var(--recipe-global-static-size-100) - 0.125rem)
      var(--recipe-global-static-size-150);
    line-height: 1.25;
    white-space: nowrap;

    ${!isDisabled &&
      css`
        box-shadow: var(--recipe-alias-shadow-small);

        :hover {
          border-color: var(--recipe-global-color-static-gray-500);
        }

        :focus-within {
          box-shadow: var(--recipe-alias-focus-ring-shadow);
        }
      `};
  `;

export const Label = styled.label<any>`
  display: flex;

  > * {
    margin-right: var(--recipe-global-static-size-100);
  }

  ${({isDisabled}) =>
    isDisabled &&
    css`
      cursor: default;
      opacity: 0.45;
      pointer-events: none;
    `}

  ${borderStyle};
`;
