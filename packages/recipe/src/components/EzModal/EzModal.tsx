import React, {MouseEvent} from 'react';
import theme from '../theme.config';
import EzButton from '../EzButton';
import EzHeading from '../EzHeading';
import EzLayout from '../EzLayout';
import FocusScope from '../FocusScope';
import CloseButton from '../CloseButton';
import {useUniqueId, useTranslation} from '../../utils/hooks';
import EzPortal from '../EzPortal';
import {ScrollLock} from './ScrollLock';
import en from './en';
import {EzFooter, EzContent, EzHeader} from '../EzContent';
import {SlotProvider, hasContentSlot} from '../../utils/slots';
import {EzCard} from '../EzCard';

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
  height: '$full',
  width: '$full',
  outline: 'none',
  overflowY: 'auto', // IE fix to prevent flex items overflowing. See: https://github.com/philipwalton/flexbugs#flexbug-3

  // show when the modal has focus
  '&:focus': {boxShadow: '$focus-ring'},

  '@medium': {
    height: 'auto',
    maxHeight: '$modal-height',
    '&&': {width: '$modal-width'},
  },
});

const header = theme.css({
  justifyContent: 'space-between',
  '& + *': {borderTop: '1px solid $modal-border'},
  '&&': {padding: '$modal-tray-py $modal-tray-px'},
  '@medium': {
    '& + *': {borderStyle: 'none'},
    '&&': {padding: '$modal-py $modal-px'},
  },
});
const body = theme.css({
  flexGrow: 1,
  overflowY: 'auto',
  '&&': {padding: '$modal-tray-py $modal-tray-px'},
  '@medium': {'&&': {padding: '0 $modal-px $modal-py'}},
});
const footer = theme.css({
  '&&': {padding: '$modal-tray-py $modal-tray-px'},
  '@medium': {'&&': {padding: '$modal-py $modal-px'}},
});
const icon = theme.css({
  '-ms-grid-column': '3',
  '-ms-grid-row': '2',
  color: '$icon',
  gridArea: 'close',
  alignSelf: 'center',
  justifySelf: 'left',
  '&&': {margin: '8px'},
});

type Props = {
  headerText?: string;
  destructive?: boolean;
  isOpen: boolean;
  isSubmitting?: boolean;
  onDismiss?: (e?: MouseEvent<HTMLButtonElement>) => void;
  onSubmit?: (e?: MouseEvent<HTMLButtonElement>) => void;
  appElement?: string;
  submitLabel?: string;
  dismissLabel?: string;
};

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

const EzModal: React.FC<Props> = ({
  children,
  headerText,
  destructive,
  dismissLabel,
  isOpen,
  isSubmitting,
  onDismiss: onDismissHandler,
  onSubmit,
  submitLabel,
}) => {
  const labelId = useUniqueId();
  const isDismissable = Boolean(onDismissHandler);
  const onDismiss = isDismissable ? onDismissHandler : () => {};
  const backdrop = useDialogBackdrop({onDismiss});
  const dialogProps = useDialog({onDismiss});
  const {t} = useTranslation(en);

  if (!isOpen) return null;

  return (
    <EzPortal>
      <div className={overlay()} {...backdrop}>
        <ScrollLock />
        <FocusScope contain restoreFocus autoFocus>
          <SlotProvider
            slots={{
              header: {className: header()},
              content: {className: body()},
              footer: {className: footer()},
            }}
          >
            <EzCard {...dialogProps} className={dialog()} aria-labelledby={labelId}>
              {headerText && (
                <EzHeader>
                  <EzHeading size="2" id={labelId}>
                    {headerText}
                  </EzHeading>
                </EzHeader>
              )}
              {hasContentSlot(children) ? children : <EzContent>{children}</EzContent>}
              {(submitLabel || dismissLabel) && (
                <EzFooter>
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
                </EzFooter>
              )}
              {isDismissable && (
                <CloseButton
                  className={icon()}
                  tabIndex={-1}
                  label={dismissLabel || t('dismiss')}
                  aria-hidden
                  onClick={onDismiss}
                />
              )}
            </EzCard>
          </SlotProvider>
        </FocusScope>
      </div>
    </EzPortal>
  );
};

export default EzModal;
