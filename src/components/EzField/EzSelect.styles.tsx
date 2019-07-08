import {css} from 'react-emotion';
import styled from '../../themes/styled';

export {Combobox, Container} from './EzCombobox.styles';

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
  max-height: 20rem;

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
