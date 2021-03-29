import React from 'react';
import Style from '@ezcater/snitches';
import theme from './EzModal.theme.config';
import EzButton from '../EzButton';
import EzHeading from '../EzHeading';
import EzLayout from '../EzLayout';
import FocusScope from '../FocusScope';
import CloseButton from '../CloseButton';
import {useUniqueId} from '../../utils/hooks';
import EzPortal from '../EzPortal';
import {ScrollLock} from './ScrollLock';
import {RequireAtLeastOne} from '../../typings/utility';

const overlay = theme.css({
  position: 'fixed',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$modal-overlay-bg',
});

const dialog = theme.css({
  backgroundColor: '$modal-bg',
  display: 'flex',
  flexDirection: 'column',
  height: '$full',
  width: '$full',
  outline: 'none',
  overflowY: 'auto', // IE fix to prevent flex items overflowing. See: https://github.com/philipwalton/flexbugs#flexbug-3

  ':focus': {
    boxShadow: '$focus-ring',
  },

  when: {
    medium: {
      borderRadius: '$modal',
      height: 'auto',
      maxHeight: '$modal-height',
      width: '$modal-width',
    },
  },
});

const header = theme.css({
  display: 'flex',
  flex: 'none',
  padding: '$modal-tray-py $modal-tray-px',
  borderBottom: '1px solid $modal-border',
  justifyContent: 'space-between',

  when: {
    medium: {
      borderBottomStyle: 'none',
      padding: '$modal-py $modal-px',
    },
  },
});
const body = theme.css({
  padding: '$modal-tray-py $modal-tray-px',
  flex: 'auto',
  overflowY: 'auto',

  '&& > * + *': {
    marginTop: '$250',
  },

  when: {
    medium: {
      padding: '0 $modal-px $modal-py',
    },
  },
});
const icon = theme.css({color: '$icon', alignSelf: 'center'});
const footer = theme.css({
  backgroundColor: '$modal-footer-bg',
  borderTop: '1px solid $modal-border',
  flex: 'none',
  padding: '$modal-tray-py $modal-tray-px',

  when: {
    medium: {
      borderBottomLeftRadius: '$modal',
      borderBottomRightRadius: '$modal',
      padding: '$modal-py $modal-px',
    },
  },
});

type Props = {
  headerText: string;
  destructive?: boolean;
  isOpen: boolean;
  isSubmitting?: boolean;
  onDismiss?: () => void;
  onSubmit?: () => void;
  appElement?: string;
  submitLabel?: string;
  dismissLabel?: string;
};

type PropsWithRequiredLabels = Props & RequireAtLeastOne<'submitLabel' | 'dismissLabel'>;

const useDialogBackdrop = ({onDismiss}) => ({
  onClick: e => e.target === e.currentTarget && onDismiss(),
});

const useDialog = ({onDismiss}) => ({
  role: 'dialog',
  'aria-modal': true,
  tabIndex: -1,
  onKeyDown: (event: React.KeyboardEvent) => {
    if (event.defaultPrevented) return;
    if (event.key !== 'Escape') return;
    event.stopPropagation();
    onDismiss();
  },
});

const EzModal: React.FC<PropsWithRequiredLabels> = ({
  children,
  headerText,
  destructive,
  dismissLabel,
  isOpen,
  isSubmitting,
  onDismiss = () => {},
  onSubmit,
  submitLabel,
}) => {
  const labelId = useUniqueId();
  const backdrop = useDialogBackdrop({onDismiss});
  const dialogProps = useDialog({onDismiss});

  if (!isOpen) return null;

  return (
    <Style ruleset={theme}>
      <EzPortal>
        <div className={overlay()} {...backdrop}>
          <ScrollLock />
          <FocusScope contain restoreFocus autoFocus>
            <div {...dialogProps} className={dialog()} aria-labelledby={labelId}>
              <div className={header()}>
                <EzHeading size="2" id={labelId}>
                  {headerText}
                </EzHeading>
                {dismissLabel && (
                  <CloseButton
                    className={icon()}
                    tabIndex={-1}
                    label={dismissLabel}
                    aria-hidden
                    onClick={onDismiss}
                  />
                )}
              </div>

              <div className={body()}>{children}</div>

              <div className={footer()}>
                <EzLayout layout={{base: 'stack', medium: 'basic'}}>
                  {submitLabel && (
                    <EzButton
                      use="primary"
                      destructive={destructive}
                      onClick={onSubmit}
                      loading={isSubmitting}
                    >
                      {submitLabel}
                    </EzButton>
                  )}
                  {dismissLabel && (
                    <EzButton use="secondary" disabled={isSubmitting} onClick={onDismiss}>
                      {dismissLabel}
                    </EzButton>
                  )}
                </EzLayout>
              </div>
            </div>
          </FocusScope>
        </div>
      </EzPortal>
    </Style>
  );
};

export default EzModal;
