import styled from 'react-emotion';
import {size, padding, position} from 'polished';
import {DialogContent, DialogOverlay} from '@reach/dialog';
import {keyframes} from '../../styles';

const circleHeight = '40px';
const closeIconHeight = '16px';

export const CloseButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-right: calc((${closeIconHeight} - ${circleHeight}) / 2);
  margin-top: calc((${closeIconHeight} - ${circleHeight}) / 2);
  outline: none;
  ${size(circleHeight)};

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
  animation: ${keyframes.slideInUp()} 0.5s linear;
  animation-iteration-count: 1;
  background: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
  outline: none;
  width: 100%;

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    animation: none;
    border-radius: 12px;
    height: auto;
    overflow: hidden; /* so the border-radius is applies to child content  */
    max-height: calc(100vh - ${props => props.theme.spacing.xl4});
    width: 500px;
  }
`;

export const HeaderContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.grays[300]};
  display: flex;
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
  flex: 1;
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
  padding: ${props => props.theme.spacing.xl2};
`;
