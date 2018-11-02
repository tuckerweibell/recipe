import {createElement} from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import variant from 'styled-component-variant';
import {base, primary, secondary, tertiary, disabled, loading, outline} from './EzButton.styles';
import {standard} from '../../themes';

const use = variant('use', {
  primary,
  secondary,
  tertiary,
});

const baseStyles = [base, use, disabled, loading, outline];

/**
 * Buttons represent actions on a page that can be triggered with one click.
 * Buttons can be used in forms, or in other locations in a page to communicate that an action is available.
 */
const EzButton = props => {
  const StyledButton = styled('button')(...baseStyles);
  return createElement(StyledButton, {
    ...props,
    disabled: props.disabled || props.loading,
  });
};

EzButton.propTypes = {
  /**
   * If `true`, indicates that the button is used for actions that delete, disconnect or perform an irreversible action.
   */
  destructive: PropTypes.bool,
  /**
   * If `true`, indicates that the button is currently unable to be interacted with.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, indicates that the button action is being processed and that the button is currently unavailable to be interacted with.
   * Cannot be used in combination with tertiary button types.
   */
  loading(props) {
    if (props.use === 'tertiary' && props.loading)
      return new Error("Don't use loading in combination with tertiary");

    if (!['undefined', 'boolean'].includes(typeof props.loading))
      return new Error('loading must be a boolean if provided');

    return undefined;
  },
  /**
   * Determines the emphasis of the button.
   */
  use: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
};

/**
 * defaultProps
 * @property {string} use - Buttons are considered secondary by default.
 * @property {object} theme - used the standard theme by default.
 */
EzButton.defaultProps = {
  use: 'secondary',
  theme: standard,
};

EzButton.displayName = 'EzButton';

/**
 * @component
 */
export default EzButton;
