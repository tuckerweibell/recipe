import {css} from '@emotion/core';
import styled from '../../themes/styled';

export const MonthNavigation = styled.span`
  flex: 0;
  white-space: nowrap;
`;

export const MonthName = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const WeekdayName = styled.span`
  padding: ${props => props.theme.spacing.sm} 0;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  > * {
    flex: 1;
    text-align: center;
  }
`;

const day = ({theme}) => css`
  button {
    border: ${theme.borderWidth[0]} solid transparent;
    border-radius: ${theme.borderRadius[1]};
  }
`;

const selected = ({theme, isSelected}) =>
  isSelected &&
  css`
    button {
      border-radius: ${theme.borderRadius[1]};
      border: ${theme.borderWidth[0]} solid ${theme.colors.interactive.checked.border};
      background-color: ${theme.colors.interactive.checked.background};
    }
  `;

export const Day = styled.span<any>(day, selected);

export const CalendarTable = styled.div`
  width: 100%;
  button {
    padding: ${props => props.theme.spacing.xs};
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.interactive.base};
    appearance: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;
