import {css} from '@emotion/core';
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

  /* 
    should be equivalent in size to inputs and buttons, but since inputs can't be a line-height lower than 1.25em
    we have to use a line-height of 1.25rem and deduct the additional 0.25rem from the vertical padding
  */
  line-height: 1.25rem;
  padding: calc(${theme.spacing.xs} - 0.125rem) ${theme.spacing.sm};
  font-size: ${theme.fontSizes[300]};

  text-align: center;
  margin-left: -1px;
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
    ${hideVisually};
  }
`;
