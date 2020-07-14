import {css} from '@emotion/core';
import styled from '../../themes/styled';

const spacing = ({theme, subnav}) => css`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    padding: ${theme.spacing.md} ${theme.spacing.xl2};
  }

  && {
    padding-bottom: ${subnav && 0};
  }
`;

export const base = ({theme, subnav}) => css`
  background-color: white;
  box-shadow: inset 0 -1px 0 0 ${theme.colors.border.base};

  ${spacing({theme, subnav})}

  && > * + * {
    margin-top: ${theme.spacing.sm};
  }
`;

export const actions = () => css`
  > * {
    justify-content: flex-end;
  }
`;

const subheaderSpacing = ({theme}) => css`
  padding: ${theme.spacing.sm} ${theme.spacing.xs};

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    padding: ${theme.spacing.lg} ${theme.spacing.xl2};
  }
`;

export const StyledHeading = styled.div<{subnav?: any}>(base as any);
export const StyledActions = styled.div(actions as any);
export const StyledSubheading = styled(StyledHeading)(subheaderSpacing as any);
