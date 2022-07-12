import React, {forwardRef} from 'react';
import theme from '../theme.config';
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
  tagline?: string | Element;
  use?: 'success' | 'error' | 'warning' | 'tip' | 'info' | 'marketing';
};

const container = theme.css({
  borderRadius: '$alert-rounded',
  borderWidth: 0,
  display: 'inline-flex',
  position: 'relative',
  py: '$alert-py',
  px: '$alert-px',
  paddingLeft: '$alert-p-icon-side',
  fill: 'currentColor',

  // pseudo element for the arrow
  '&::before, &::after': {
    borderWidth: '6px',
    borderStyle: 'solid',
    color: '$transparent',
    left: '13px',
    position: 'absolute',
  },

  variants: {
    use: {
      success: {
        backgroundColor: '$alert-bg-success',
        color: '$alert-text-success',
        '$$alert-bg': '$colors$alert-bg-success',
      },
      error: {
        backgroundColor: '$alert-bg-error',
        color: '$alert-text-error',
        '$$alert-bg': '$colors$alert-bg-error',
      },
      warning: {
        backgroundColor: '$alert-bg-warning',
        color: '$alert-text-warning',
        '$$alert-bg': '$colors$alert-bg-warning',
      },
      info: {
        backgroundColor: '$alert-bg-info',
        color: '$alert-text-info',
        '$$alert-bg': '$colors$alert-bg-info',
      },
      marketing: {
        backgroundColor: '$alert-bg-marketing',
        color: '$alert-text-marketing',
        '$$alert-bg': '$colors$alert-bg-marketing',
      },
      tip: {
        backgroundColor: '$alert-bg-tip',
        color: '$alert-text-tip',
        '$$alert-bg': '$colors$alert-bg-tip',
      },
    },
    arrow: {
      top: {
        '&::after': {
          content: `""`,
          top: '-12px',
          borderBottomColor: '$$alert-bg',
        },
      },
      bottom: {
        '&::after': {
          content: `""`,
          bottom: '-12px',
          borderTopColor: '$$alert-bg',
        },
      },
    },
  },
});

const content = theme.css({
  marginLeft: '$100',
});

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
    <div role={role} aria-live={live} className={container({arrow, use})} ref={ref}>
      {icons[use]}
      <div className={content()}>
        <EzTextStyle use="strong">{headline}</EzTextStyle>
        <div>{tagline}</div>
      </div>
    </div>
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
