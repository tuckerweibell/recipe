import React from 'react';
import {AlertContainer, AlertContent} from './EzAlert.styles';
import EzTextStyle from '../EzTextStyle';
import {ErrorIcon, InfoIcon, MarketingIcon, SuccessIcon, TipIcon, WarningIcon} from '../Icons';

const icons = {
  error: <ErrorIcon />,
  info: <InfoIcon />,
  marketing: <MarketingIcon />,
  success: <SuccessIcon />,
  tip: <TipIcon />,
  warning: <WarningIcon />,
};

type AlertProps = {
  arrow?: 'top' | 'bottom';
  headline: string;
  tagline?: string;
  use?: 'success' | 'error' | 'warning' | 'tip' | 'info' | 'marketing';
};

/**
 * Alerts represent highlighted messages on a page that call out important information.
 * Alerts can be used both with page content as well as a subheader as a status for the entire page.
 */
const EzAlert: React.SFC<AlertProps> = ({arrow, tagline, headline, use}) => (
  <AlertContainer arrow={arrow} use={use}>
    {icons[use]}
    <AlertContent>
      <EzTextStyle use="strong">{headline}</EzTextStyle>
      <div>{tagline}</div>
    </AlertContent>
  </AlertContainer>
);

/**
 * defaultProps
 * @property {string} use - Alerts are considered info by default.
 */
EzAlert.defaultProps = {
  use: 'info',
};

EzAlert.displayName = 'EzAlert';

/**
 * @component
 */
export default EzAlert;
