import {css} from '@emotion/core';
import {hideVisually} from '../../styles';
import styled from '../../themes/styled';
import inputStyles from './EzTextInput.styles';
import {standard} from '../../themes';

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

export const borderCollapse = (theme = standard) => css`
  ${borderRadius('bottom', 0)};

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    ${borderRadius('bottom', inputBorderRadius)};
  }
`;

export const CustomInputWrapper = styled.div`
  > input,
  > textarea {
    ${inputStyles};
  }
`;

export const Field = styled.div`
  position: relative;
  border: none;
  margin: 0;
  padding: 0;
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

export const ScreenReaderOnly = styled.div(hideVisually());
