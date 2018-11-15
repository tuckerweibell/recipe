import styled, {css} from 'react-emotion';
import {padding, position} from 'polished';
import ReactModal from 'react-modal';

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

export const Modal = styled(ReactModal)`
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  overflow-y: hidden;
  position: fixed;
  top: 150%;
  transform: translate(-50%, -50%);
  transition: top 0.5s;

  &.ReactModal__Content--after-open {
    top: 50%;
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoints.medium}) {
    border-radius: 12px;
    left: 50%;
    min-height: 0;
    min-width: 0;
    overflow: hidden;
    top: 50%;
    width: 500px;
  }

  :focus {
    outline: 0;
  }
`;

export const reactModalOverlay = css`
  &.ReactModal__Overlay--after-open {
    background-color: rgba(0, 0, 0, 0.6);
    ${position('fixed', 0, 0, 0, 0)};
  }
`;

export const reactModalHtmlOpen = css`
  overflow: hidden;
`;

export const reactModalAfterOpen = css`
  top: 50%;
`;

export const ModalContainer = styled.div`
  background: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
  position: absolute;
  width: 100%;

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    max-height: calc(100vh - ${props => props.theme.spacing.xl4});
    position: relative;
  }
`;

export const HeaderContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.grays[300]};
  display: flex;
  flex: none;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    border-bottom: none;
    ${({
      theme: {
        spacing: {xl, xl2},
      },
    }) => padding(xl2, xl2, xl, xl2)};
  }
`;

export const ContentContainer = styled.div`
  flex: auto;
  overflow-y: auto;
  ${({
    theme: {
      spacing: {xl},
    },
  }) => padding(xl, xl, xl, xl)};

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    ${({
      theme: {
        spacing: {xl2},
      },
    }) => padding(0, xl2, xl2, xl2)};
  }
`;

export const ButtonFooter = styled.div`
  background: ${props => props.theme.colors.grays[200]};
  border-top: 1px solid ${props => props.theme.colors.grays[300]};
  flex: none;
  padding: ${props => props.theme.spacing.xl2};
`;
