import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {hideVisually} from '../../styles';
import RadioButtonIcon from '../EzRadioButton/RadioButtonIcon';
import './vars.css';

const container = () =>
  css`
    display: flex;
    flex-wrap: wrap;
    & input {
      ${hideVisually()};
    }
  `;

const containerSquareStyles = () => css`
  flex-direction: row;
`;

export const EzSuperRadioButtonsGroup = styled.div(container, containerSquareStyles);

export const EzSuperRadioButtonsLabel = styled.div`
  ${hideVisually()}
`;

const item = () => css`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: var(--recipe-super-radiobutton-size-default);
  min-height: var(--recipe-super-radiobutton-size-default);
  font-weight: var(--recipe-super-radiobutton-font-weight);
  color: var(--recipe-super-radiobutton-text-color);

  border: 1px solid var(--recipe-super-radiobutton-border-color);
  border-radius: var(--recipe-alias-border-radius-regular);
  box-shadow: var(--recipe-alias-shadow-small);
  background-color: var(--recipe-super-radiobutton-background-color);

  input:not(:disabled):not(:checked) + &:hover {
    background-color: var(--recipe-super-radiobutton-background-color-hover);
    border-color: var(--recipe-super-radiobutton-border-color-hover);
    color: var(--recipe-super-radiobutton-text-color-hover);
  }

  input:checked:not(:disabled) + & {
    background: var(--recipe-super-radiobutton-background-color-selected);
    border-color: var(--recipe-super-radiobutton-border-color-selected);
    position: relative;
  }

  input:active + & {
    background: var(--recipe-super-radiobutton-background-color-down);
  }

  input:focus + & {
    box-shadow: var(--recipe-alias-focus-ring-shadow);
  }

  input:disabled + & {
    cursor: default;
    color: var(--recipe-super-radiobutton-text-color-disabled);
    background-color: var(--recipe-super-radiobutton-background-color-disabled);

    img {
      opacity: 0.5;
    }
  }
`;

const itemSquareStyles = () => css`
  padding: var(--recipe-global-static-size-400) var(--recipe-global-static-size-200)
    var(--recipe-global-static-size-200);
  margin-bottom: var(--recipe-global-static-size-200);
  align-items: center;
  &:not(:last-of-type) {
    margin-right: var(--recipe-global-static-size-200);
  }
`;

export const EzSuperRadioButtonsItem = styled.label<any>(item, itemSquareStyles);

export const EzSuperRadioButtonsImageWrapper = styled.div`
  margin-bottom: var(--recipe-global-static-size-250);
  width: var(--recipe-super-radiobutton-image-size);
  height: var(--recipe-super-radiobutton-image-size);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EzSuperRadioButtonsImage = styled.img`
  margin: 0;
  max-width: var(--recipe-super-radiobutton-image-size);
  max-height: var(--recipe-super-radiobutton-image-size);
`;

export const EzSuperRadioButtonsItemLabel = styled.p`
  margin: 0;
  text-align: center;
`;

export const RadioButton = styled(RadioButtonIcon)`
  position: absolute;
  top: var(--recipe-global-static-size-150);
  right: var(--recipe-global-static-size-150);

  /* Checked */
  input:checked:not(:disabled) + label & path:nth-of-type(1) {
    stroke: var(--recipe-super-radiobutton-checkmark-color);
  }

  input:checked:not(:disabled) + label & path:nth-of-type(2) {
    fill: var(--recipe-super-radiobutton-checkmark-color);
  }

  /* Not Checked */
  input:not(:checked) + label & path:nth-of-type(2) {
    fill: transparent;
  }

  /* Focused */
  input:focus + label & {
    box-shadow: var(--recipe-alias-focus-ring-shadow);
    border-radius: 50%;
  }

  /* Hover */
  input:hover:not(:disabled):not(:checked) + label & path:nth-of-type(1) {
    fill: var(--recipe-super-radiobutton-background-color-hover);
    stroke: var(--recipe-super-radiobutton-border-color-hover);
  }

  /* Disabled */
  input:disabled + label & path:nth-of-type(1) {
    fill: var(--recipe-super-radiobutton-background-color-disabled);
  }

  input:disabled:checked + label & path:nth-of-type(2) {
    fill: var(--recipe-super-radiobutton-text-color-disabled);
  }
`;
