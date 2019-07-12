import {css} from 'react-emotion';
import styled from '../../themes/styled';
import {hideVisually} from '../../styles';

import RadioButtonIcon from '../EzRadioButton/RadioButtonIcon';

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

const item = ({theme}) => css`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: 150px;
  min-height: 150px;

  border: 1px solid ${theme.colors.border.base};
  border-radius: ${theme.borderRadius[1]};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  background-color: white;

  input:not(:disabled):not(:checked) + &:hover {
    background-color: ${theme.colors.interactive.hover.background};
    border-color: ${theme.colors.interactive.hover.border};
  }

  input:checked:not(:disabled) + & {
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
    color: ${theme.colors.interactive.disabled.foreground};
    background-color: ${theme.colors.interactive.disabled.background};
  }
`;

const itemSquareStyles = ({theme}) => css`
  padding: ${theme.spacing.xl2} ${theme.spacing.md} ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
  align-items: center;
  &:not(:last-of-type) {
    margin-right: ${theme.spacing.md};
  }
`;

export const EzSuperRadioButtonsItem = styled.label<any>(item, itemSquareStyles);

export const EzSuperRadioButtonsImageWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EzSuperRadioButtonsImage = styled.img`
  margin: 0;
  max-width: 100%;
  max-height: 100%;
`;

export const EzSuperRadioButtonsItemLabel = styled.p`
  margin: 0;
  text-align: center;
`;

export const RadioButton = styled(RadioButtonIcon)`
  position: absolute;
  top: ${props => props.theme.spacing.sm};
  right: ${props => props.theme.spacing.sm};

  /* Checked */
  input:checked:not(:disabled) + label & path:nth-of-type(2) {
    fill: ${props => props.theme.colors.interactive.base};
  }

  /* Not Checked */
  input:not(:checked) + label & path:nth-of-type(2) {
    fill: transparent;
  }

  /* Focused */
  input:focus + label & {
    box-shadow: 0px 0px 2px 2px ${props => props.theme.colors.interactive.focus.outline};
    border-radius: 50%;
  }

  /* Hover */
  input:hover:not(:disabled) + label & path:nth-of-type(1) {
    fill: ${props => props.theme.colors.interactive.hover.background};
    stroke: ${props => props.theme.colors.interactive.hover.border};
  }

  /* Active */
  input:active + label & path:nth-of-type(1) {
    fill: ${props => props.theme.colors.interactive.active.background};
  }

  /* Disabled */
  input:disabled + label & path:nth-of-type(1) {
    fill: ${props => props.theme.colors.interactive.disabled.background};
  }

  input:checked:disabled + label & path:nth-of-type(2) {
    fill: ${props => props.theme.colors.interactive.disabled.foreground};
  }
`;
