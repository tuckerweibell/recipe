import {css} from '@emotion/core';
import styled from '../../themes/styled';

export const StyledOptions = styled.div`
  > label + label {
    margin-top: ${({theme}) => theme.spacing.xs};
  }

  label {
    margin-top: ${({theme}) => theme.spacing.xs};
  }
`;

const borderStyle = ({bordered, isDisabled, theme}) =>
  bordered &&
  css`
    border: 1px solid ${theme.colors.border.base};
    border-radius: 4px;
    padding: calc(${theme.spacing.xs} - 0.125rem) ${theme.spacing.sm};
    line-height: 1.25;
    white-space: nowrap;

    ${!isDisabled &&
      css`
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.12);

        :hover {
          border-color: ${theme.colors.interactive.hover.border};
        }

        :focus-within {
          box-shadow: 0px 0px 2px 2px ${theme.colors.interactive.focus.outline},
            0 1px 1px 0 rgba(0, 0, 0, 0.12);
        }
      `};
  `;

export const Label = styled.label<any>`
  display: flex;

  > * {
    margin-right: ${({theme}) => theme.spacing.xs};
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
