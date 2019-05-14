import {css} from 'react-emotion';
import styled from '../../themes/styled';

const inputBase = () => css`
  padding-left: 2.5em;
  padding-right: 1em;
  width: 200px;
  background-repeat: no-repeat;
  background-position: 12px center, calc(100% - 10px) center;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjgzMyAxNEgxLjE2N0ExLjE2NyAxLjE2NyAwIDAgMSAwIDEyLjgzM3YtMTAuNWMwLS42NDQuNTIyLTEuMTY2IDEuMTY3LTEuMTY2aDEuMTY2djEuMTY2SDEuMTY3djEwLjVoMTEuNjY2di0xMC41aC0xLjE2NlYxLjE2N2gxLjE2NmMuNjQ1IDAgMS4xNjcuNTIyIDEuMTY3IDEuMTY2djEwLjVjMCAuNjQ1LS41MjIgMS4xNjctMS4xNjcgMS4xNjd6TTkuOTE3IDkuOTE3aDEuMTY2YS41ODMuNTgzIDAgMSAxIDAgMS4xNjZIOS45MTdhLjU4My41ODMgMCAxIDEgMC0xLjE2NnptMC0yLjMzNGgxLjE2NmEuNTgzLjU4MyAwIDEgMSAwIDEuMTY3SDkuOTE3YS41ODMuNTgzIDAgMSAxIDAtMS4xNjd6bTEuMTY2LTEuMTY2SDkuOTE3YS41ODMuNTgzIDAgMSAxIDAtMS4xNjdoMS4xNjZhLjU4My41ODMgMCAxIDEgMCAxLjE2N3pNMTAuNSAzLjVhLjU4My41ODMgMCAwIDEtLjU4My0uNTgzVi41ODNhLjU4My41ODMgMCAxIDEgMS4xNjYgMHYyLjMzNGEuNTgzLjU4MyAwIDAgMS0uNTgzLjU4M3pNOC4xNjcgMS4xNjdoMS4xNjZ2MS4xNjZIOC4xNjdWMS4xNjd6bS0xLjc1IDguNzVoMS4xNjZhLjU4My41ODMgMCAxIDEgMCAxLjE2Nkg2LjQxN2EuNTgzLjU4MyAwIDEgMSAwLTEuMTY2em0wLTIuMzM0aDEuMTY2YS41ODMuNTgzIDAgMSAxIDAgMS4xNjdINi40MTdhLjU4My41ODMgMCAxIDEgMC0xLjE2N3ptMS4xNjYtMS4xNjZINi40MTdhLjU4My41ODMgMCAxIDEgMC0xLjE2N2gxLjE2NmEuNTgzLjU4MyAwIDEgMSAwIDEuMTY3ek03IDMuNWEuNTgzLjU4MyAwIDAgMS0uNTgzLS41ODNWLjU4M2EuNTgzLjU4MyAwIDEgMSAxLjE2NiAwdjIuMzM0QS41ODMuNTgzIDAgMCAxIDcgMy41ek00LjY2NyAxLjE2N2gxLjE2NnYxLjE2Nkg0LjY2N1YxLjE2N3ptLTEuNzUgOC43NWgxLjE2NmEuNTgzLjU4MyAwIDEgMSAwIDEuMTY2SDIuOTE3YS41ODMuNTgzIDAgMSAxIDAtMS4xNjZ6bTAtMi4zMzRoMS4xNjZhLjU4My41ODMgMCAxIDEgMCAxLjE2N0gyLjkxN2EuNTgzLjU4MyAwIDEgMSAwLTEuMTY3em0xLjE2Ni0xLjE2NkgyLjkxN2EuNTgzLjU4MyAwIDEgMSAwLTEuMTY3aDEuMTY2YS41ODMuNTgzIDAgMSAxIDAgMS4xNjd6TTMuNSAzLjVhLjU4My41ODMgMCAwIDEtLjU4My0uNTgzVi41ODNhLjU4My41ODMgMCAxIDEgMS4xNjYgMHYyLjMzNEEuNTgzLjU4MyAwIDAgMSAzLjUgMy41eiIgZmlsbD0iIzhCOTlBNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'),
    url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48cGF0aCBkPSJNLjI1NSAxLjM4NkwzLjg3IDQuNzUxYy4wMDQuMDA0LjAwNS4wMDkuMDEuMDEyLjE3LjE1OS4zOTQuMjM4LjYxOS4yMzcuMjI1IDAgLjQ1LS4wNzguNjItLjIzNy4wMDQtLjAwMy4wMDUtLjAwOC4wMDktLjAxMmwzLjYxNi0zLjM2NWEuNzc1Ljc3NSAwIDAgMCAwLTEuMTQ5LjkyMy45MjMgMCAwIDAtMS4yMzUgMGwtMy4wMSAyLjgtMy4wMS0yLjhhLjkyMy45MjMgMCAwIDAtMS4yMzUgMCAuNzc1Ljc3NSAwIDAgMCAwIDEuMTQ5eiIgaWQ9ImEiLz48L2RlZnM+PHVzZSBmaWxsPSIjM0U5MEQ2IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHhsaW5rOmhyZWY9IiNhIi8+PC9zdmc+');
`;

export const StyledInput = styled.input`
  && {
    ${inputBase};
  }
`;

const arrowSize = 5;

export const CalendarWrapper = styled('div')`
  z-index: 1;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.sm};
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: ${props => props.theme.fontSizes[300]};
  width: 320px;
  position: absolute;
  margin-top: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius[3]};
  border: ${props => props.theme.borderWidth[0]} solid ${props => props.theme.colors.border.base};
  background-color: ${props => props.theme.colors.content.background};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12);
  &:after,
  &:before {
    content: ' ';
    position: absolute;
    left: 19px;
    bottom: 100%;
    height: 0;
    width: 0;
  }
  &:after {
    margin-left: -${arrowSize}px;
    border: ${arrowSize}px solid transparent;
    border-bottom-color: ${props => props.theme.colors.content.background};
  }
  &:before {
    margin-left: -${props => arrowSize + parseInt(props.theme.borderWidth[0], 10) * 2}px;
    border: ${props => arrowSize + parseInt(props.theme.borderWidth[0], 10) * 2}px solid transparent;
    border-bottom-color: ${props => props.theme.colors.border.base};
  }
`;
