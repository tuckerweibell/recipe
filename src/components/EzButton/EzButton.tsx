import React, {createElement} from 'react';
import StyledButton from './EzButton.styles';

type ButtonProps = RegularProps | TertiaryProps;

type SharedButtonProps = {
  destructive?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
};

type RegularProps = {
  loading?: boolean;
  use: 'primary' | 'secondary';
} & SharedButtonProps;

type TertiaryProps = {
  use: 'tertiary';
} & SharedButtonProps;

/**
 * Buttons represent actions on a page that can be triggered with one click.
 * Buttons can be used in forms, or in other locations in a page to communicate that an action is available.
 */
// const EzButton: React.FC<ButtonProps> = props =>
const EzButton: React.FC<ButtonProps> = props => createElement(StyledButton, buildProps(props));

const buildProps = (props: ButtonProps) => {
  if (props.use === 'tertiary') return props;

  return {...props, disabled: props.disabled || props.loading};
};

/**
 * defaultProps
 * @property {string} use - Buttons are considered secondary by default.
 */
EzButton.defaultProps = {
  use: 'secondary',
};

EzButton.displayName = 'EzButton';

/**
 * @component
 */
export default EzButton;
