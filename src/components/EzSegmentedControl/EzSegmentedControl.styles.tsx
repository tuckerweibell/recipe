import {css} from 'react-emotion';
import styled, {Themed} from '../../themes/styled';
import {hideVisually} from '../../styles';

const label = ({theme}: Themed) => css`
  cursor: pointer;
  background-color: white;
  border: 1px solid ${theme.colors.border.base};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  color: ${theme.colors.text.base};
  display: block;
  flex: 1;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  text-align: center;
  margin-left: -1px;
  line-height: 1em;
  font-size: 0.85em;
  flex-basis: auto;
  user-select: none;

  &:first-of-type {
    margin-left: 0;
    border-top-left-radius: ${theme.borderRadius[1]};
    border-bottom-left-radius: ${theme.borderRadius[1]};
  }

  &:last-of-type {
    border-top-right-radius: ${theme.borderRadius[1]};
    border-bottom-right-radius: ${theme.borderRadius[1]};
  }

  &:hover {
    background-color: ${theme.colors.interactive.hover.background};
    border-color: ${theme.colors.interactive.hover.border};
  }

  input:checked + & {
    color: ${theme.colors.interactive.checked.foreground};
    background: ${theme.colors.interactive.checked.background};
    border: 1px solid ${theme.colors.interactive.checked.border};
    position: relative;
  }

  input:active + & {
    background: ${theme.colors.interactive.active.background};
  }

  input:focus + & {
    box-shadow: 0px 0px 2px 2px ${theme.colors.interactive.focus.outline};
  }

  input:disabled + & {
    cursor: default;
    opacity: 0.45;
    pointer-events: none;
  }
`;

export const Option = styled.label<Partial<Themed>>(label);

export const Fieldset = styled.div`
  display: flex;
  align-items: center;

  & input {
    ${hideVisually()};
  }
`;
