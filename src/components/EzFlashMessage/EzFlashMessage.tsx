import React, {useEffect} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzFlashMessage.theme.config';
import EzLayout from '../EzLayout';
import EzHeading from '../EzHeading';
import CloseButton from '../CloseButton';
import {InfoIcon, ErrorIcon, SuccessIcon} from '../Icons';

type EzFlashMessageUses = 'success' | 'error' | 'warning' | 'info';

type FlashMessageProps = {
  autohide?: boolean;
  autohideDuration?: number;
  children: React.ReactNode;
  headline?: string;
  onAutohide?: () => void;
  onDismiss?: () => void;
  use: EzFlashMessageUses;
};

const flashMessage = theme.css({
  borderStyle: '$flash-message-border-style',
  borderWidth: '$flash-message-border-width',
  borderLeftWidth: '$flash-message-border-left-width',
  padding: '$flash-message-p',

  '@medium': {
    borderRadius: '$flash-message-rounded',
  },

  variants: {
    use: {
      success: {
        backgroundColor: '$flash-message-bg-success',
        borderColor: '$flash-message-border-success',
        borderLeftColor: '$flash-message-accent-success',
        boxShadow: '$flash-message-box-shadow-success',
        'svg path': {
          fill: '$flash-message-accent-success',
        },
      },
      error: {
        backgroundColor: '$flash-message-bg-error',
        borderColor: '$flash-message-border-error',
        borderLeftColor: '$flash-message-accent-error',
        boxShadow: '$flash-message-box-shadow-error',
        'svg path': {
          fill: '$flash-message-accent-error',
        },
      },
      warning: {
        backgroundColor: '$flash-message-bg-warning',
        borderColor: '$flash-message-border-warning',
        borderLeftColor: '$flash-message-accent-warning',
        boxShadow: '$flash-message-box-shadow-warning',
        'svg path': {
          fill: '$flash-message-accent-warning',
        },
      },
      info: {
        backgroundColor: '$flash-message-bg-info',
        borderColor: '$flash-message-border-info',
        borderLeftColor: '$flash-message-accent-info',
        boxShadow: '$flash-message-box-shadow-info',
        'svg path': {
          fill: '$flash-message-accent-info',
        },
      },
    },
  },
});

const text = theme.css({'&&': {flex: 1}});

const buttonAlignment = theme.css({
  alignSelf: 'start',
});

const icons = {
  error: <ErrorIcon />,
  warning: <ErrorIcon />,
  info: <InfoIcon />,
  success: <SuccessIcon />,
};

/**
 * Describe EzFlashMessage here.
 */
const EzFlashMessage: React.FC<FlashMessageProps> = initProps => {
  const {props} = flashMessage(initProps);

  const [show, setShow] = React.useState(true);

  useEffect(() => {
    if (!props.autohide) return;

    const autohideTimer = setTimeout(() => {
      if (props.onAutohide) props.onAutohide();
      setShow(false);
    }, props.autohideDuration || 5000);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(autohideTimer);
  }, []);

  if (!show) return null;

  return (
    <Style ruleset={theme}>
      <div className={flashMessage(initProps)}>
        <EzLayout layout="basic" alignY="top">
          {icons[initProps.use]}
          <div className={text()}>
            <EzLayout layout="stack">
              {props.headline && <EzHeading size="3">{props.headline}</EzHeading>}
              <div>{props.children}</div>
            </EzLayout>
          </div>
          {props.onDismiss && (
            <div className={buttonAlignment()}>
              <CloseButton label="Close" onClick={props.onDismiss} />
            </div>
          )}
        </EzLayout>
      </div>
    </Style>
  );
};

/**
 * @component
 */
export default EzFlashMessage;
