import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {base, primary, secondary, disabled} from './styles';
import {variants} from '../../styles/';
import {standard} from '../../themes';

const use = variants('use', {
  primary,
  secondary,
});

/**
 * Buttons represent actions on a page that can be triggered with one click.
 * Buttons can be used in forms, or in other locations in a page to communicate that an action is available.
 */
const EzButton = styled('button')(base, use, disabled);

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
