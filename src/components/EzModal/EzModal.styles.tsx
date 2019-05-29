import {css} from 'react-emotion';
import {DialogContent, DialogOverlay} from '@reach/dialog';
import styled from '../../themes/styled';

const closeIconBorderRadius = '50%';
const clickTargetPadding = '12px';

export const CloseButton = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: ${closeIconBorderRadius};
  cursor: pointer;
  outline: none;
  margin: -${clickTargetPadding}; /* negate the impact of the extra padding on the elements containers height */
  padding: ${clickTargetPadding};

  :hover {
    background-color: ${props => props.theme.colors.interactive.hover.background};
  }
  :active {
    background-color: ${props => props.theme.colors.interactive.active.background};
  }
`;

export const Overlay = styled(DialogOverlay)`
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

export const ModalContainer = styled(DialogContent)`
  background: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
  outline: none;
  width: 100%;

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    border-radius: 12px;
    height: auto;
    overflow: hidden; /* so the border-radius is applies to child content  */
    max-height: calc(100vh - ${props => props.theme.spacing.xl4});
    width: 500px;
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
  align-items: baseline;
  border-bottom: 1px solid ${props => props.theme.colors.border.subtle};
  display: flex;
  flex: none;
  justify-content: space-between;

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    border-bottom: none;
  }
`;

export const ContentContainer = styled.div`
  ${props => containerPadding({theme: props.theme})}
  flex: auto;
  overflow-y: auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    padding-top: 0;
  }
`;

export const ButtonFooter = styled.div`
  ${props => containerPadding({theme: props.theme})}
  background: ${props => props.theme.colors.page.background};
  border-top: 1px solid ${props => props.theme.colors.border.subtle};
  flex: none;
`;
