import styled, {css} from 'react-emotion';
import {padding, position} from 'polished';
import {DialogContent, DialogOverlay} from '@reach/dialog';

const circleHeight = '40px';
const closeIconBorderRadius = '50%';
const closeIconHeight = '16px';

export const CloseButton = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: ${closeIconBorderRadius};
  cursor: pointer;
  margin-right: calc((${closeIconHeight} - ${circleHeight}) / 2);
  margin-top: calc((${closeIconHeight} - ${circleHeight}) / 2);
  outline: none;
  padding: calc((${circleHeight} - ${closeIconHeight}) / 2);

  :hover {
    background-color: ${props => props.theme.colors.grays[200]};
  }
`;

export const Overlay = styled(DialogOverlay)`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  ${position('fixed', 0, 0, 0, 0)};
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
  ${padding(spacing.md, spacing.xl)};

  @media screen and (min-width: ${breakpoints.medium}) {
    ${padding(spacing.xl, spacing.xl2)};
  }
`;

export const HeaderContainer = styled.div`
  ${containerPadding};
  border-bottom: 1px solid ${props => props.theme.colors.grays[300]};
  display: flex;
  flex: none;
  justify-content: space-between;

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    border-bottom: none;
  }
`;

export const ContentContainer = styled.div`
  ${containerPadding};
  flex: auto;
  overflow-y: auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    padding-top: 0;
  }
`;

export const ButtonFooter = styled.div`
  ${containerPadding};
  background: ${props => props.theme.colors.grays[200]};
  border-top: 1px solid ${props => props.theme.colors.grays[300]};
  flex: none;
`;
