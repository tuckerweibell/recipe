import styled from '../../themes/styled';
import {Combobox as BaseCombobox} from './EzCombobox.styles';

export {Container} from './EzCombobox.styles';

export const Combobox = styled(BaseCombobox)`
  width: 200px;
  input {
    padding-left: 2.5em;
    width: 200px;
  }
`;

const arrowSize = 5;

export const CalendarWrapper = styled('div')`
  z-index: 1;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.sm};
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: ${props => props.theme.fontSizes[300]};
  width: 320px;
  position: absolute;
  margin-top: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius[3]};
  border: ${props => props.theme.borderWidth[0]} solid ${props => props.theme.colors.border.base};
  background-color: ${props => props.theme.colors.content.background};
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
    margin-left: -${arrowSize}px;
    border: ${arrowSize}px solid transparent;
    border-bottom-color: ${props => props.theme.colors.content.background};
  }
  &:before {
    margin-left: -${props => arrowSize + parseInt(props.theme.borderWidth[0], 10) * 2}px;
    border: ${props => arrowSize + parseInt(props.theme.borderWidth[0], 10) * 2}px solid transparent;
    border-bottom-color: ${props => props.theme.colors.border.base};
  }
`;
