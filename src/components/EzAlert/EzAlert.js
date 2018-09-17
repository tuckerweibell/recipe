import React from 'react';
import PropTypes from 'prop-types';
import {AlertContainer, AlertContent} from './EzAlert.styles';
import EzTextStyle from '../EzTextStyle';
import {standard} from '../../themes';
import {filterValidProps} from '../../utils';
import {
  ErrorIcon,
  InfoIcon,
  MarketingIcon,
  SuccessIcon,
  TipIcon,
  WarningIcon,
} from './EzAlert.icons';

const icons = {
  error: <ErrorIcon />,
  info: <InfoIcon />,
  marketing: <MarketingIcon />,
  success: <SuccessIcon />,
  tip: <TipIcon />,
  warning: <WarningIcon />,
};

/**
 * Alerts represent highlighted messages on a page that call out important information.
 * Alerts can be used both with page content as well as a subheader as a status for the entire page.
 */
const EzAlert = ({arrow, className, tagline, headline, theme, use}) => (
  <AlertContainer arrow={arrow} className={className} theme={theme} use={use}>
    {icons[use]}
    <AlertContent theme={theme}>
      <EzTextStyle use="strong">{headline}</EzTextStyle>
      <div>{tagline}</div>
    </AlertContent>
  </AlertContainer>
);

EzAlert.propTypes = {
  /**
   * An optional speech bubble arrow added to the Alert, indicating which side you want the arrow to appear.
   */
  arrow: PropTypes.oneOf(['top', 'bottom']),
  /**
   * The primary content messaging that is highlighted within the alert.
   */
  headline: PropTypes.string.isRequired,
  /**
   * The secondary content explaining further (if necessary) what is indicated within the `headline` object.
   */
  tagline: PropTypes.string,
  /**
   * Determines the color scheme of the alert.
   */
  use: PropTypes.oneOf(['success', 'error', 'warning', 'tip', 'info', 'marketing']).isRequired,
};

/**
 * defaultProps
 * @property {object} theme - used the standard theme by default.
 * @property {string} use - Alerts are considered info by default.
 */
EzAlert.defaultProps = {
  theme: standard,
  use: 'info',
};

EzAlert.displayName = 'EzAlert';

/**
 * @component
 */
export default EzAlert;
