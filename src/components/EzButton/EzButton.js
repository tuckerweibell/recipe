import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'react-emotion';
import {base, primary, secondary, disabled, loading} from './EzButton.styles';
import {variants} from '../../styles/';
import {standard} from '../../themes';
import {filterValidProps} from '../../utils';

const use = variants('use', {
  primary,
  secondary,
});

const baseStyles = [base, use, disabled, loading];

/**
 * Buttons represent actions on a page that can be triggered with one click.
 * Buttons can be used in forms, or in other locations in a page to communicate that an action is available.
 */
const EzButton = props => {
  const mergedProps = {
    ...props,
    disabled: props.disabled || props.loading,
  };

  mergedProps.className = css.apply({mergedProps}, baseStyles);

  return React.createElement('button', filterValidProps(mergedProps));
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
   */
  loading: PropTypes.bool,
  /**
   * Determines the emphasis of the button.
   */
  use: PropTypes.oneOf(['primary', 'secondary']).isRequired,
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
