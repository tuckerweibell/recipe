import {css} from 'react-emotion';
import variant from 'styled-component-variant';
import styled from '../../themes/styled';

const base = ({theme}) => css`
  display: inline-block;
  margin-left: ${theme.spacing.sm};
  line-height: ${theme.lineHeights.heading};
  vertical-align: top;
  svg {
    margin-right: ${theme.spacing.xs};
  }
`;

const useStyles = variant('use', {
  error: ({theme}) => css`
    color: ${theme.colors.destructive.main};
    svg path {
      fill: ${theme.colors.destructive.main};
    }
  `,
  progress: ({theme}) => css`
    svg path {
      fill: ${theme.colors.text.deemphasis};
    }
  `,
  success: ({theme}) => css`
    svg path {
      fill: ${theme.colors.success.text};
    }
  `,
});

export const InlineFeedback = styled.span<any>(base, useStyles);
