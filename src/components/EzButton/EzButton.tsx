import React, {createElement, forwardRef} from 'react';
import StyledButton, {DisabledButtonWrapper, IconContainer} from './EzButton.styles';
import EzTooltip from '../EzTooltip';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & (RegularProps | TertiaryProps);

type SharedButtonProps = {
  destructive?: boolean;
  disabled?: boolean;
  disabledMessage?: string;
  onClick?: React.MouseEventHandler;
};

type RegularProps = {
  loading?: boolean;
  use: 'primary' | 'secondary';
} & SharedButtonProps;

type TertiaryProps = {
  use: 'tertiary';
  icon?: React.ReactElement;
} & SharedButtonProps;

/**
 * Buttons represent actions on a page that can be triggered with one click.
 * Buttons can be used in forms, or in other locations in a page to communicate that an action is available.
 */
const EzButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const buttonElement = createElement(StyledButton, buildProps({...props, ref}));

  if (props.disabled && props.disabledMessage) {
    return (
      <EzTooltip message={props.disabledMessage}>
        <DisabledButtonWrapper>{buttonElement}</DisabledButtonWrapper>
      </EzTooltip>
    );
  }

  return buttonElement;
});

const buildProps = (props: ButtonProps & {ref: React.Ref<HTMLButtonElement>}) => {
  if (props.use === 'tertiary') {
    const children = props.icon ? (
      <IconContainer>
        {React.cloneElement(props.icon, {
          'aria-hidden': true,
          focusable: false,
        })}
        <span>{props.children}</span>
      </IconContainer>
    ) : (
      props.children
    );
    return {...props, children};
  }

  const {loading, ...rest} = props;

  return {...rest, isLoading: loading, disabled: props.disabled || loading};
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
