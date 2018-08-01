import styled, {css} from 'react-emotion';

export const CardContainer = styled.div`
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.grays[400]};
  border-radius: ${props => props.theme.borderRadius[2]};
`;

export const CardHeading = styled.h3`
  font-size: ${props => props.theme.fontSizes.medium};
  margin: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.lg} 0;
`;

const vertical = ({horizontal, theme}) =>
  !horizontal &&
  css`
    > *:not(:first-child) {
      border-top: 1px solid ${theme.colors.grays[400]};
    }
  `;

const horizontal = ({horizontal, theme}) =>
  horizontal &&
  css`
    display: flex;

    > * {
      flex-basis: 0;
      flex-grow: 1;
    }
  `;

export const SectionContainer = styled.div(vertical, horizontal);
