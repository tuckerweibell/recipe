import styled from '@emotion/styled';
import {TextInputWrapper as BaseCombobox} from './Picker.styles';

export const TextInputWrapper = styled(BaseCombobox)`
  position: relative;
  width: 200px;
  input {
    padding-left: 2.5em;
  }
`;

export const CalendarWrapper = styled('div')`
  position: relative;
  padding: var(--recipe-global-static-size-150);
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: var(--recipe-global-font-size-100);
  width: 320px;
  margin-top: var(--recipe-global-static-size-100);
  border-radius: var(--recipe-alias-border-radius-medium);
  border: 1px solid var(--recipe-alias-border-color);
  background-color: var(--recipe-global-color-static-white);
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
    margin-left: -5px;
    border: 5px solid transparent;
    border-bottom-color: var(--recipe-global-color-static-white);
  }
  &:before {
    margin-left: -7px;
    border: 7px solid transparent;
    border-bottom-color: var(--recipe-alias-border-color);
  }
`;
