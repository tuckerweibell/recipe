import {css} from '@emotion/core';
import {hideVisually} from '../../styles';
import styled from '../../themes/styled';
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
    margin-top: ${({theme, labelSize}: any) => theme.spacing[labelSize === 'small' ? 'xs2' : 'xs']};
  }
`;

export const Helper = styled.div`
  font-size: ${({theme}) => theme.fontSizes[200]};
  color: ${({theme}) => theme.colors.text.deemphasis};
  margin-top: ${({theme}) => theme.spacing.xs};
`;

const detached = css`
  box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12), 0 2px 10px 0 rgba(34, 36, 38, 0.15);
  ${roundedFull};
`;

const inlineMessageOffset = {transform: 'translate3d(0, -2px, 0)'};

const callout = ({theme, active, showInlineError}: any) => css`
  background-color: ${theme.colors.destructive.foreground};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes[200]};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
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
    border-bottom: 5px solid ${theme.colors.destructive.foreground};
    position: absolute;
    top: -5px;
    right: 10px;
  }

  ${!showInlineError && {
    marginBottom: '0.5rem',
    transform: 'translate3d(0, 6px, 0)',
  }}

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    position: absolute;
    ${detached};
    user-select: none;
    z-index: 1;
    ${!active && hideVisually()};
    ${showInlineError && inlineMessageOffset};
  }
`;

export const InlineError = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;

  > * {
    ${callout};
  }
`;

export const CharacterLimit = styled.div`
  font-size: ${({theme}) => theme.fontSizes[200]};
  margin-top: ${({theme}) => theme.spacing.xs};
`;

export const ErrorTriangle = styled(ErrorIcon)`
  color: ${({theme}) => theme.colors.destructive.foreground};
`;

export const ScreenReaderOnly = styled.div(hideVisually());
