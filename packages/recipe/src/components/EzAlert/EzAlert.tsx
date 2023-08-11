import React, {forwardRef} from 'react';
import {Box} from '@mui/material';
import {styled} from '@mui/material/styles';
import isPropValid from '@emotion/is-prop-valid';
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

type Props = {
  arrow?: 'top' | 'bottom';
  headline: string;
  tagline?: string | React.ReactNode;
  use?: 'success' | 'error' | 'warning' | 'tip' | 'info' | 'marketing';
};

const EzAlertContainer = styled('div', {
  shouldForwardProp: isPropValid,
  name: 'EzAlert',
})<Pick<Props, 'arrow' | 'use'>>(({theme}) => ({
  fontFamily: theme.typography.fontFamily,
  borderRadius: theme.shape.borderRadius,
  borderWidth: 0,
  display: 'inline-flex',
  position: 'relative',
  padding: theme.spacing(1.5),
  paddingRight: theme.spacing(2.5),

  '& svg': {
    fill: 'currentColor',
  },

  // pseudo element for the arrow
  '&::before, &::after': {
    borderWidth: '6px',
    borderStyle: 'solid',
    color: 'transparent',
    left: '13px',
    position: 'absolute',
  },
}));

type Ref = HTMLDivElement;
/**
 * Alerts represent highlighted messages on a page that call out important information.
 * Alerts can be used both with page content as well as a subheader as a status for the entire page.
 */
const EzAlert = forwardRef<Ref, Props>(({arrow, tagline, headline, use}, ref) => {
  // Hints at the importance of this message.
  // the "status" is generally used for "less important" or "less urgent" content
  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_status_role
  const role = use === 'error' ? 'alert' : 'status';
  // in assistive technology, this will hint how important this message is.
  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#preferring_specialized_live_region_roles
  const live = use === 'error' ? 'assertive' : 'polite';
  return (
    <EzAlertContainer arrow={arrow} use={use} role={role} aria-live={live} ref={ref}>
      {icons[use]}
      <Box marginLeft={1}>
        <EzTextStyle use="strong">{headline}</EzTextStyle>
        <div>{tagline}</div>
      </Box>
    </EzAlertContainer>
  );
});

/**
 * defaultProps
 * @property {string} use - Alerts are considered info by default.
 */
EzAlert.defaultProps = {
  use: 'info' as const,
};

EzAlert.displayName = 'EzAlert';

/**
 * @component
 */
export default EzAlert;
