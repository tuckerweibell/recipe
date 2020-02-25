import {css} from '@emotion/core';
import {hideVisually} from '../../styles';
import styled from '../../themes/styled';

// pre-calculate where to put the error icon (icon width + right padding of input)
const iconOffset = '24px';
const inputBorderRadius = '4px';
const calloutBorderRadius = '3px';

function borderRadius(side: 'top' | 'bottom', radius: string | number) {
  return css`
    border-${side}-right-radius: ${radius};
    border-${side}-left-radius: ${radius};
  `;
}

const inputBase = ({theme, error}) => css`
  font-family: ${theme.baseFontFamily};
  font-size: ${theme.baseFontSize};
  display: block;
  color: ${theme.colors.text.base};
  width: 100%;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.border.base};
  border-radius: ${inputBorderRadius};
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

  textarea {
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
  }
`;

const inputError = ({theme, error, touched}) =>
  error &&
  touched &&
  css`
    border-color: ${theme.colors.destructive.foreground};
    padding-right: ${iconOffset};
    ${borderRadius('bottom', 0)};

    ${InlineError} ~ * & {
      ${borderRadius('bottom', inputBorderRadius)};
    }

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      ${borderRadius('bottom', inputBorderRadius)};
    }
  `;

const inputDisabled = ({theme, disabled}) =>
  disabled &&
  css`
    background-color: ${theme.colors.interactive.disabled.background};
    border-color: ${theme.colors.border.subtle};
    color: ${theme.colors.interactive.disabled.foreground};
  `;

const inputStyles = props => css(inputBase(props), inputError(props), inputDisabled(props));

export const StyledInput = styled.input(inputStyles);

export const Field = styled.div`
  position: relative;
  border: none;
  margin: 0;
  padding: 0;

  > input,
  > textarea {
    ${inputStyles};
  }
`;

export const Helper = styled.div`
  font-size: ${({theme}) => theme.fontSizes[200]};
  color: ${({theme}) => theme.colors.text.deemphasis};
  margin-top: ${({theme}) => theme.spacing.xs};
`;

const detached = () => css`
  box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12), 0 2px 10px 0 rgba(34, 36, 38, 0.15);
  ${borderRadius('top', calloutBorderRadius)};
`;

const callout = ({theme, active}: any) => css`
  background-color: ${theme.colors.destructive.foreground};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes[200]};
  min-width: min-content;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  position: relative;
  right: 0;
  ${borderRadius('bottom', calloutBorderRadius)};

  label + * + &,
  fieldset & {
    margin-top: 0.5em;
    ${detached()};
  }

  &::before {
    content: '';
    display: block;
    width: 0px;
    height: 0px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid ${theme.colors.destructive.foreground};
    position: absolute;
    top: -5px;
    right: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    ${detached()};
    margin-top: calc(${theme.spacing.xs2} * -1);
    position: absolute;
    user-select: none;
    z-index: 1;
    ${!active && hideVisually()}
  }
`;

export const InlineError = styled.div`
  ${callout};
`;

export const CharacterLimit = styled.div`
  font-size: ${({theme}) => theme.fontSizes[200]};
  margin-top: ${({theme}) => theme.spacing.xs};
`;

export const InputIconContainer = styled.div`
  position: absolute;
  right: ${iconOffset};
  color: ${({theme}) => theme.colors.destructive.foreground};

  svg {
    top: -1.75em; /* approx line height (1.1em) + input padding (0.57em) + border width */
    position: absolute;
  }

  label + & svg,
  fieldset & svg {
    top: -1.1em; /* approx line height */
  }
`;
