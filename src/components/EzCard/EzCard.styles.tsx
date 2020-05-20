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

export const CardContainer = styled.div<any>`
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.border.base};
  border-radius: ${props => props.theme.borderRadius[2]};
  ${accentStyles};
  display: ${props => (props.imagePosition ? 'flex' : 'block')};
  ${imagePos};
  > * {
    flex-grow: 1;
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
