import {css} from 'react-emotion';
import EzHeading from '../EzHeading';

export const childStyles = ({theme}) => css`
  > *:not(:last-child) {
    margin-bottom: ${theme.spacing.sm};
  }

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    > *:not(:last-child) {
      margin-bottom: ${theme.spacing.xl};
    }
  }

  > ${EzHeading} {
    margin-bottom: ${theme.spacing.sm};
  }
`;
