import {css} from '@emotion/core';
import {responsive} from '../../styles';
import styled from '../../themes/styled';

const accentStyles = ({accent, theme}) =>
  accent &&
  css`
    border-left: 5px solid ${theme.colors.info.foreground};
  `;

const imagePos = responsive('imagePosition', {
  top: {flexWrap: 'wrap'},
  right: {flexWrap: 'nowrap'},
  left: {flexWrap: 'nowrap'},
  reset: {flexWrap: 'nowrap'},
});

const rounded = ({theme}) => ({
  [`@media screen and (min-width: ${theme.breakpoints.medium})`]: {
    borderRadius: theme.borderRadius[2],
  },
});

export const CardContainer = styled.div<any>`
  background: ${props => props.theme.colors.white};
  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15);
  ${accentStyles};
  ${rounded};
  display: flex;
  ${imagePos};
  > * {
    flex-grow: 1;
    max-width: 100%;
  }
`;

export const CardHeadingContainer = styled.div`
  margin: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.lg} 0;
`;

const gutter = ({theme}: any) => css`
  margin: calc(${theme.spacing.sm} * -1) 0 0 calc(${theme.spacing.sm} * -1);

  > * {
    margin: ${theme.spacing.sm} 0 0 ${theme.spacing.sm};
  }
`;

export const CardLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  ${gutter};
`;

const vertical = ({horizontal, theme}) =>
  !horizontal &&
  css`
    && > * + * {
      border-top: 1px solid ${theme.colors.border.base};
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
