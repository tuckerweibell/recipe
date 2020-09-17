import {css} from '@emotion/core';
import styled from '../../themes/styled';

export const StyledOverlay = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const dialogStyles = props => css`
  background: ${props.theme.colors.white};
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
  outline: none;
  width: 100%;
  overflow-y: auto; // IE fix to prevent flex items overflowing. See: https://github.com/philipwalton/flexbugs#flexbug-3

  @media screen and (min-width: ${props.theme.breakpoints.medium}) {
    border-radius: 12px;
    height: auto;
    max-height: calc(100vh - ${props.theme.spacing.xl4});
    width: 575px;
  }

  :focus {
    box-shadow: 0px 0px 2px 2px ${props.theme.colors.interactive.focus.outline},
      0 1px 1px 0 rgba(0, 0, 0, 0.12);
  }
`;

const containerPadding = ({theme: {spacing, breakpoints}}) => css`
  padding: ${spacing.md} ${spacing.xl};

  @media screen and (min-width: ${breakpoints.medium}) {
    padding: ${spacing.xl} ${spacing.xl2};
  }
`;

export const HeaderContainer = styled.div`
  ${props => containerPadding({theme: props.theme})}
  border-bottom: 1px solid ${props => props.theme.colors.border.subtle};
  display: flex;
  flex: none;
  justify-content: space-between;

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    border-bottom: none;
  }
  button svg path {
    fill: #3a81be;
  }
`;

export const ContentContainer = styled.div`
  ${props => containerPadding({theme: props.theme})}
  flex: auto;
  overflow-y: auto;

  && > * + * {
    margin-top: ${props => props.theme.spacing.lg};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    padding-top: 0;
  }
`;

export const ButtonFooter = styled.div`
  ${props => containerPadding({theme: props.theme})}
  background: ${props => props.theme.colors.page.background};
  border-top: 1px solid ${props => props.theme.colors.border.subtle};
  flex: none;

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;
