import {css} from 'react-emotion';
import styled, {Themed} from '../../themes/styled';
import {shade} from 'polished';
import {hideVisually} from '../../styles';

const label = ({theme}: Themed) => css`
  cursor: pointer;
  background-color: white;
  border: 1px solid ${theme.colors.grays[400]};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  color: ${theme.colors.grays[700]};
  display: block;
  flex: 1;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  text-align: center;
  margin-left: -1px;
  line-height: 1em;
  font-size: 0.85em;
  flex-basis: auto;

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
    background-color: ${shade(0.97, 'white')};
    border-color: ${shade(0.85, theme.colors.grays[400])};
    color: ${shade(0.85, theme.colors.grays[700])};
  }

  input:checked + & {
    color: ${theme.colors.blues[500]};
    background: ${theme.colors.blues[200]};
    border: 1px solid ${theme.colors.blues[500]};
    position: relative;
  }

  input:focus + & {
    border-color: ${theme.colors.blues[600]};
    color: ${theme.colors.blues[600]};
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
