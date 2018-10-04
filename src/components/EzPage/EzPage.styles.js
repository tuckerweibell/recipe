import styled, {css} from 'react-emotion';

export const base = ({theme}) => css`
  background: ${theme.colors.grays[200]};
  padding: ${theme.spacing.sm} ${theme.spacing.xs};

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    padding: ${theme.spacing.xl2};
  }
`;

// This allows us to gradually roll out style resets. Eventually they will move to a more typically global location.
export const resets = ({theme}) => css`
  p {
    margin: 0;
  }
`;
