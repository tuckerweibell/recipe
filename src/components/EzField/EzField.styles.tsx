import {css} from '@emotion/core';
import styled from '@emotion/styled';
import variant from 'styled-component-variant';
import {hideVisually} from '../../styles';
import {mq} from '../../themes/styled';
import inputStyles from './EzTextInput.styles';
import {ErrorTriangle as ErrorIcon} from '../Icons';

// pre-calculate where to put the error icon (icon width + right padding of input)
const calloutBorderRadius = '3px';

const roundedFull = {borderRadius: calloutBorderRadius};
const roundedBottom = css`
  border-bottom-right-radius: ${calloutBorderRadius};
  border-bottom-left-radius: ${calloutBorderRadius};
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
  padding: 0;

  > * + * {
    margin-top: var(--recipe-global-static-size-100);
    margin-top: ${variant('labelSize', {small: 'var(--recipe-global-static-size-50)'})};
  }
`;

export const Helper = styled.div`
  font-size: var(--recipe-global-font-size-75);
  color: var(--recipe-alias-deemphasis-text-color);
  margin-top: var(--recipe-global-static-size-100);
`;

const detached = css`
  box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12), 0 2px 10px 0 rgba(34, 36, 38, 0.15);
  ${roundedFull};
`;

const inlineMessageOffset = {transform: 'translate3d(0, -2px, 0)'};

const callout = ({active, showInlineError}: any) => css`
  background-color: var(--recipe-semantic-negative-color-default);
  color: var(--recipe-global-color-static-white);
  font-size: var(--recipe-global-font-size-75);
  padding: var(--recipe-global-static-size-100) var(--recipe-global-static-size-150);
  position: relative;
  flex-grow: 1;
  right: 0;

  ${showInlineError ? roundedBottom : detached};

  /* Arrow pointer */
  ::before {
    content: '';
    display: block;
    width: 0px;
    height: 0px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid var(--recipe-semantic-negative-color-default);
    position: absolute;
    top: -5px;
    right: 10px;
  }

  ${!showInlineError && {
    marginBottom: '0.5rem',
    transform: 'translate3d(0, 6px, 0)',
  }}

  ${mq(
    'medium',
    css`
      position: absolute;
      ${detached};
      user-select: none;
      z-index: 1;
      ${!active && hideVisually()};
      ${showInlineError && inlineMessageOffset};
    `
  )};
`;

export const InlineError = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  pointer-events: none;

  > * {
    ${callout};
  }
`;

export const CharacterLimit = styled.div`
  font-size: var(--recipe-global-font-size-75);
  margin-top: var(--recipe-global-static-size-100);
`;

export const ErrorTriangle = styled(ErrorIcon)`
  color: var(--recipe-semantic-negative-color-default);
`;

export const ScreenReaderOnly = styled.div(hideVisually());
