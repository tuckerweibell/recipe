import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'react-emotion';
import {base, primary, secondary, tertiary, disabled, loading, outline} from './EzButton.styles';
import {variants} from '../../styles/';
import {standard} from '../../themes';
import {filterValidProps} from '../../utils';

const use = variants('use', {
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
   * Cannot be used in combination with tertiary button types.
   */
  loading: function (props) {
    if (props['use'] === 'tertiary' && props['loading']) {
      return new Error('Don\'t use loading in combination with tertiary');
    }

    if (!['undefined', 'boolean'].includes(typeof props['loading'])){
      return new Error('loading must be a boolean if provided');
    }
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
