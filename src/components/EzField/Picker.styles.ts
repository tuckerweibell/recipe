import {css} from '@emotion/core';
import styled from '../../themes/styled';

const errorIconPosition = ({hasError}) =>
  hasError &&
  css`
    + * > svg {
      right: 1em;
    }
  `;

const hideErrorMessageWhenOpen = ({hasError, opened}) =>
  hasError &&
  opened &&
  css`
    + * + * {
      display: none;
    }
  `;

export const OverlayFieldWrapper = styled.div<any>`
  input {
    cursor: default;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    /* readonly fields have no outline in safari */
    :focus {
      outline-style: auto;
    }
  }

  ${errorIconPosition};
  ${hideErrorMessageWhenOpen};
`;

const iconColor = p =>
  p.disabled ? p.theme.colors.interactive.disabled.foreground : p.theme.colors.interactive.base;

export const TextInputWrapper = styled.div`
  && input {
    padding-right: 2em;
  }

  svg {
    stroke: ${iconColor};
    transition: transform 0.3s;
  }
`;
