import {css} from 'react-emotion';
import styled from '../../themes/styled';

const accentStyles = ({accent, theme}) =>
  accent &&
  css`
    border-left: 5px solid ${theme.colors.blues[600]};
  `;

type CardContainerProps = {
  theme?: object;
  accent: string;
};

export const CardContainer = styled.div<CardContainerProps>`
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.grays[400]};
  border-radius: ${props => props.theme.borderRadius[2]};
  ${accentStyles};
`;

export const CardHeadingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${({theme}) => theme.spacing.lg} 0 0 -${({theme}) => theme.spacing.xl2};
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.lg} 0;
  justify-content: space-between;

  > * {
    margin: ${({theme}) => theme.spacing.lg} 0 0 ${({theme}) => theme.spacing.xl2};
  }
`;

export const CardHeading = styled.h3`
  font-size: ${props => props.theme.fontSizes[500]};
  margin: 0;
`;

export const CardSubheading = styled.div`
  margin-top: ${props => props.theme.spacing.xs};
`;

const vertical = ({horizontal, theme}) =>
  !horizontal &&
  css`
    > *:not(:first-child) {
      border-top: 1px solid ${theme.colors.grays[400]};
    }
  `;

const horizontal = ({horizontal: isHorizontal}) =>
  isHorizontal &&
  css`
    display: flex;

    > * {
      flex-basis: 0;
      flex-grow: 1;
    }
  `;

export const SectionContainer = styled.div(vertical, horizontal);
