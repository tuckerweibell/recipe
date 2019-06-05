import {css} from 'react-emotion';
import variant from 'styled-component-variant';
import styled from '../../themes/styled';

const base = ({theme}) => css`
  display: inline-block;
  margin-left: ${theme.spacing.sm};
  padding: ${theme.spacing.xs};
  vertical-align: top;
  svg {
    margin-right: ${theme.spacing.xs};
  }
`;

const useStyles = variant('use', {
  error: ({theme}) => css`
    color: ${theme.colors.reds.base};
    svg path {
      fill: ${theme.colors.reds.base};
    }
  `,
  progress: ({theme}) => css`
    svg path {
      fill: ${theme.colors.grays[600]};
    }
  `,
  success: ({theme}) => css`
    svg path {
      fill: ${theme.colors.greens.dark};
    }
  `,
});

export const InlineFeedback = styled.span<any>(base, useStyles);
