import {css} from 'react-emotion';
import EzHeading from '../EzHeading';

export const childStyles = ({theme}) => css`
  > *:not(:last-child) {
    margin-bottom: ${theme.spacing.xl2};
  }

  > ${EzHeading} {
    margin-bottom: ${theme.spacing.md};
  }
`;
