import React from 'react';
import {css} from 'react-emotion';
import {borderRadius} from 'polished';
import {hideVisually} from '../../styles';
import styled from '../../themes/styled';

// pre-calculate where to put the error icon (icon width + right padding of input)
const iconOffset = '24px';
const inputBorderRadius = '4px';
const calloutBorderRadius = '3px';

const inputBase = ({theme}) => css`
  display: block;
  width: 100%;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.grays[400]};
  border-radius: ${inputBorderRadius};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  margin-top: ${theme.spacing.xs};
`;

const inputError = ({theme, error, touched}) =>
  error &&
  touched &&
  css`
    border-color: ${theme.colors.reds.base};
    padding-right: ${iconOffset};
    ${borderRadius('bottom', 0)};

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      ${borderRadius('bottom', inputBorderRadius)};
    }
  `;

const inputDisabled = ({theme, disabled}) =>
  disabled &&
  css`
    background: ${theme.colors.grays[100]};
    border: 1px solid ${theme.colors.grays[300]};
  `;

const StyledField = styled.div`
  position: relative;

  > input,
  > textarea {
    ${inputBase};
    ${inputError};
    ${inputDisabled};
  }
`;

export const Helper = styled.div`
  font-size: ${({theme}) => theme.fontSizes[200]};
  color: ${({theme}) => theme.colors.grays[600]};
  margin-top: ${({theme}) => theme.spacing.xs};
`;

const detached = css`
  box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12), 0 2px 10px 0 rgba(34, 36, 38, 0.15);
  ${borderRadius('top', calloutBorderRadius)};
`;

const callout = ({theme, active}: any) => css`
  background-color: ${theme.colors.reds.base};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes[200]};
  min-width: min-content;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  position: relative;
  right: 0;
  ${borderRadius('bottom', calloutBorderRadius)};

  fieldset & {
    margin-top: 0.5em;
    ${detached};
  }

  &::before {
    content: '';
    display: block;
    width: 0px;
    height: 0px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid ${theme.colors.reds.base};
    position: absolute;
    top: -5px;
    right: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    ${detached};
    margin-top: -${theme.spacing.xs2};
    position: absolute;
    user-select: none;
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
  color: ${({theme}) => theme.colors.reds.base};

  svg {
    top: -1.75em; /* approx line height (1.1em) + input padding (0.57em) + border width */
    position: absolute;
  }

  fieldset & svg {
    top: -1.1em; /* approx line height */
  }
`;

const fieldsetResets = css`
  border: none;
  margin: 0;
  padding: 0;
`;

const FieldSet = styled(StyledField)(fieldsetResets).withComponent('fieldset');

export const Field = props => {
  const Component = props.as === 'fieldset' ? FieldSet : StyledField;
  return React.createElement(Component as any, props);
};
