import {css} from 'react-emotion';
import {standard} from '../../themes';

export const base = ({theme}) => css`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  text-align: center;
  border-top: 1px solid ${theme.colors.grays[400]};
  border-radius: 0 0 ${standard.borderRadius[2]} ${standard.borderRadius[2]};
  background-color: ${standard.colors.grays[100]};
`;
