import {css} from '@emotion/core';
import styled from '@emotion/styled';
import './vars.css';

export const MonthNavigation = styled.span`
  flex: 0;
  white-space: nowrap;
`;

export const MonthName = styled.span`
  font-weight: var(--recipe-global-font-weight-bold);
`;

export const WeekdayName = styled.span`
  padding: var(--recipe-global-static-size-150) 0;
  font-weight: var(--recipe-global-font-weight-bold);
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  > * {
    flex: 1;
    text-align: center;
  }
`;

const day = () => css`
  button {
    border: var(--recipe-alias-border-size-thin) solid transparent;
    border-radius: var(--recipe-alias-border-radius-regular);
    color: var(--recipe-calendar-day-text-color);

    &[aria-disabled='true'] {
      opacity: 0.6;
      cursor: default;
      --recipe-calendar-day-text-color: var(--recipe-alias-text-color-disabled);
      pointer-events: none;
    }
  }
`;

const selected = ({isSelected}) =>
  isSelected &&
  css`
    button {
      border-radius: var(--recipe-alias-border-radius-regular);
      border-style: solid;
      border-width: var(--recipe-alias-border-size-thin);
      border-color: var(--recipe-calendar-day-border-color-selected);
      background-color: var(--recipe-calendar-day-background-color-selected);
    }
  `;

export const Day = styled.span<any>(day, selected);

export const CalendarTable = styled.div`
  width: 100%;
  button {
    padding: var(--recipe-global-static-size-100);
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--recipe-global-font-weight-bold);
    appearance: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;
