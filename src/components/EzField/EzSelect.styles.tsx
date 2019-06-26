import {css} from 'react-emotion';
import {Field} from './EzField.styles';
import styled from '../../themes/styled';

const listbox = ({theme}) => css`
  min-width: 230px;
  background: white;
  border: 1px solid #ccc;
  border-radius: ${theme.borderRadius[2]};
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
  overflow: scroll;
  margin-top: ${theme.spacing.xs2};

  li {
    cursor: default;
    margin: 0;
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    color: ${theme.colors.interactive.base};
    font-weight: bold;
    position: relative;

    &[aria-selected='true'] {
      background-color: ${theme.colors.interactive.base};
      color: ${theme.colors.content.background};

      :after {
        filter: brightness(2);
      }
    }

    &[aria-current='true']:after {
      content: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%238b99a6' viewBox='0 0 24 24' width='12' height='12'%3e%3cpath d='M20.29 2L9 13.57 3.71 8.56 0 12.27 9 21 24 5.71z'/%3e%3c/svg%3e");
      position: absolute;
      right: ${theme.spacing.sm};
      top: calc(50% - 6px);
    }
  }
`;

export const Listbox = styled.ul(listbox as any);

const errorIconPosition = ({hasError}) =>
  hasError &&
  css`
    + * > svg {
      right: 1em;
    }
  `;

const hideErrorMessageWhenOpen = ({hasError, opened}) =>
  hasError &&
  opened &&
  css`
    + * + * {
      display: none;
    }
  `;

export const Container = styled.div<any>`
  position: relative;

  input {
    cursor: default;
  }

  ${errorIconPosition};
  ${hideErrorMessageWhenOpen};
`;

const iconRotate = p => (p.opened ? '-180deg' : '0deg');

const iconColor = p =>
  encodeURIComponent(
    p.disabled ? p.theme.colors.interactive.disabled.foreground : p.theme.colors.interactive.base
  );

export const Combobox = styled(Field)`
  :after {
  content: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' viewBox='0 0 24 24' width='16' height='16' fill='none' stroke='${iconColor}'%3e%3cpath d='M6 9l6 6 6-6'/%3e%3c/svg%3e");
    position: absolute;
    right: ${({theme}) => theme.spacing.sm};
    top: 50%;
    transform: translateY(-50%) rotate(${iconRotate});
    transform-origin: 50% 50%;
    transition: transform 0.3s;
  }
`;
