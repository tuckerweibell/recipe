import {css} from 'react-emotion';

const spacing = ({theme}) => css`
  padding: ${theme.spacing.sm} ${theme.spacing.xs};

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    padding: ${theme.spacing.md} ${theme.spacing.xl2};
  }
`;

export const base = ({theme}) => css`
  background-color: white;
  box-shadow: inset 0 -1px 0 0 ${theme.colors.grays[400]};

  ${spacing({theme})}
`;

export const actions = () => css`
  > * {
    justify-content: flex-end;
  }
`;
