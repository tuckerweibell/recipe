import {css} from '@emotion/core';

// pre-calculate where to put the error icon (icon width + right padding of input)
const iconOffset = '24px';

const inputBase = ({theme, error}) => css`
  font-family: ${theme.baseFontFamily};
  font-size: ${theme.baseFontSize};
  display: block;
  color: ${theme.colors.text.base};
  width: 100%;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.border.base};
  border-radius: 4px;
  margin-top: ${theme.spacing.xs};
  /* 
    inputs and buttons should be equivalent in size, but since inputs can't be a line-height lower than 1.25em
    we have to use a line-height of 1.25rem and deduct the additional 0.25rem from the vertical padding
  */
  line-height: 1.25rem;
  padding: calc(${theme.spacing.xs} - 0.125rem) ${theme.spacing.sm};

  :enabled {
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.12);

    :hover {
      border-color: ${!error && theme.colors.interactive.hover.border};
    }
  }

  ::placeholder {
    color: ${theme.colors.grays[500]};
  }
`;

const inputError = ({theme, error, touched}) =>
  error &&
  touched &&
  css`
    border-color: ${theme.colors.destructive.foreground};
    padding-right: ${iconOffset};
  `;

const inputDisabled = ({theme, disabled}) =>
  disabled &&
  css`
    background-color: ${theme.colors.interactive.disabled.background};
    border-color: ${theme.colors.border.subtle};
    color: ${theme.colors.interactive.disabled.foreground};
  `;

export default props => css(inputBase(props), inputError(props), inputDisabled(props));
