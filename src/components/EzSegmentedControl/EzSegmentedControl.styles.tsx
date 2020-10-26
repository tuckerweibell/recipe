import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {hideVisually} from '../../styles';
import './vars.css';

const label = () => css`
  cursor: pointer;
  background-color: white;
  border: 1px solid var(--recipe-segmented-box-border-color);
  box-shadow: var(--recipe-alias-shadow-small);
  color: var(--recipe-segmented-box-text-color);
  display: block;
  flex: 1;

  /* 
    should be equivalent in size to inputs and buttons, but since inputs can't be a line-height lower than 1.25em
    we have to use a line-height of 1.25rem and deduct the additional 0.25rem from the vertical padding
  */
  line-height: 1.25rem;
  padding: calc(var(--recipe-global-static-size-100) - 0.125rem)
    var(--recipe-global-static-size-150);
  font-size: var(--recipe-global-font-size-100);

  text-align: center;
  margin-left: -1px;
  flex-basis: auto;
  user-select: none;

  &:first-of-type {
    margin-left: 0;
    border-top-left-radius: var(--recipe-segmented-box-border-radius);
    border-bottom-left-radius: var(--recipe-segmented-box-border-radius);
  }

  &:last-of-type {
    border-top-right-radius: var(--recipe-segmented-box-border-radius);
    border-bottom-right-radius: var(--recipe-segmented-box-border-radius);
  }

  &:hover {
    background-color: var(--recipe-segmented-box-background-color-hover);
    border-color: var(--recipe-segmented-box-border-color-hover);
  }

  input:checked + & {
    color: var(--recipe-segmented-box-text-color-selected);
    background: var(--recipe-segmented-box-background-color-selected);
    border: 1px solid var(--recipe-segmented-box-border-color-selected);
    position: relative;
  }

  input:active + & {
    background: var(--recipe-segmented-box-background-color-down);
  }

  input:focus + & {
    box-shadow: var(--recipe-alias-focus-ring-shadow);
  }

  input:disabled + & {
    cursor: default;
    opacity: 0.45;
    pointer-events: none;
  }
`;

export const Option = styled.label(label);

export const Fieldset = styled.div`
  display: flex;
  align-items: center;

  & input {
    ${hideVisually};
  }
`;
