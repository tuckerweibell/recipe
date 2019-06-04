import {css} from 'react-emotion';
import styled from '../../themes/styled';
import {hideVisually} from '../../styles';

const base = () => css`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
  user-select: none;

  > input {
    ${hideVisually()};
  }
`;

const disabled = ({disabled: isDisabled}) =>
  isDisabled &&
  css`
    cursor: not-allowed;
    opacity: 0.5;
    transition: opacity 0.25s;
  `;

const track = ({theme}) => css`
  position: relative;
  display: inline-block;
  width: 42px;
  height: 22px;
  border: 1px solid ${theme.colors.grays[500]};
  border-radius: 16px;
  background-color: ${theme.colors.grays[200]};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  transition-property: background-color, border-color;
  transition-duration: 0.2s;

  input:focus + &,
  input:active + & {
    ::after {
      box-shadow: 0px 0px 2px 3px ${theme.colors.blues[600]};
    }
  }
  ::after {
    content: ' ';
    display: inline-block;
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    border: 1px solid ${theme.colors.grays[500]};
    border-radius: 50%;
    background-color: white;
    transition-property: border-color, left;
    transition-duration: 0.2s;
    box-sizing: border-box;
  }
  ::before {
    content: ' ';
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: 80% center;
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00IDIuNTk4TDYuNDUuMTQ4YS41LjUgMCAwIDEgLjcwNyAwbC42OTUuNjk1YS41LjUgMCAwIDEgMCAuNzA3TDUuNDAyIDRsMi40NSAyLjQ1YS41LjUgMCAwIDEgMCAuNzA3bC0uNjk1LjY5NWEuNS41IDAgMCAxLS43MDcgMEw0IDUuNDAybC0yLjQ1IDIuNDVhLjUuNSAwIDAgMS0uNzA3IDBsLS42OTUtLjY5NWEuNS41IDAgMCAxIDAtLjcwN0wyLjU5OCA0IC4xNDggMS41NWEuNS41IDAgMCAxIDAtLjcwN0wuODQzLjE0OGEuNS41IDAgMCAxIC43MDcgMEw0IDIuNTk4eiIgZmlsbD0iIzhCOTlBNiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+);
  }
  input:checked + & {
    border-color: ${theme.colors.blues[500]};
    background-color: ${theme.colors.blues[200]};

    ::after {
      border-color: ${theme.colors.blues[500]};
      left: 50%;
    }

    ::before {
      background-position: 20% center;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy41MjUgNy41NzZMLjE0MiA0LjIxNEEuNDk0LjQ5NCAwIDAgMSAwIDMuODQ5YzAtLjE0OS4wNDctLjI3LjE0Mi0uMzY1bC43NS0uNzI5YS40NTIuNDUyIDAgMCAxIC4zNTQtLjE2MmMuMTQyIDAgLjI2Ny4wNTQuMzc1LjE2MmwyLjI2OCAyLjI2OUw4Ljc1MS4xNjJBLjUxNS41MTUgMCAwIDEgOS4xMjYgMGMuMTQyIDAgLjI2LjA1NC4zNTQuMTYybC43NS43M2EuNDk0LjQ5NCAwIDAgMSAuMTQyLjM2NGMwIC4xNDktLjA0OC4yNy0uMTQyLjM2NUw0LjI1NCA3LjU3NmEuNDYyLjQ2MiAwIDAgMS0uMzY1LjE2Mi40NjIuNDYyIDAgMCAxLS4zNjQtLjE2MnoiIGZpbGw9IiMzQTgxQkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==);
    }
  }
`;

export const Container = styled.div<any>(base, disabled);
export const Track = styled.div<any>(track);
