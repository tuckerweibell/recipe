import React, {useRef, useContext, useEffect} from 'react';
import {useDialog, useDialogState, useDialogBackdrop, DialogStateReturn} from 'reakit/Dialog';
import {Portal} from 'reakit/Portal';
import EzButton from '../EzButton';
import EzHeading from '../EzHeading';
import EzLayout from '../EzLayout';
import {
  ButtonFooter,
  HeaderContainer,
  ContentContainer,
  StyledDialog,
  StyledOverlay,
} from './EzModal.styles';
import CloseButton from '../CloseButton';
import {useUniqueId} from '../../utils/hooks';
import EzPortal, {PortalContext} from '../EzPortal';

type Props = {
  children: React.ReactNode;
  headerText: string;
  destructive?: boolean;
  dismissLabel: string;
  isOpen: boolean;
  isSubmitting?: boolean;
  onDismiss?: () => void;
  onSubmit?: () => void;
  submitLabel?: string;
  appElement?: string;
};

const PortalledOverlay = ({children, ...props}) => (
  <EzPortal>
    <StyledOverlay {...useDialogBackdrop(props)}>{children}</StyledOverlay>
  </EzPortal>
);

const Dialog: React.FC<DialogStateReturn & {isOpen: boolean}> = ({isOpen, children, ...props}) => {
  const {current: hostNode} = useContext(PortalContext);
  const initialFocusRef = useRef<HTMLElement>();
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    if (isOpen) initialFocusRef.current = hostNode.ownerDocument.activeElement as HTMLElement;
  }, [hostNode, isOpen]);

  const preventBodyScroll = hostNode === document.body;
  const dialog = useDialog(
    {
      ...props,
      // eslint-disable-next-line @typescript-eslint/camelcase
      unstable_finalFocusRef: initialFocusRef,
      preventBodyScroll,
    },
    {ref}
  );

  return (
    // eslint-disable-next-line no-underscore-dangle
    <StyledDialog {...dialog} tabIndex={0} className={Portal.__className}>
      <PortalContext.Provider value={ref}>{props.visible && children}</PortalContext.Provider>
    </StyledDialog>
  );
};

const EzModal: React.FC<Props> = ({
  children,
  headerText,
  destructive,
  dismissLabel,
  isOpen,
  isSubmitting,
  onDismiss: initialOnDismiss,
  onSubmit,
  submitLabel,
}) => {
  const labelId = useUniqueId();
  // JSDOM doesn't support this API
  const modalOption = {modal: Boolean(Element.prototype.insertAdjacentElement)};
  const dialog = useDialogState({visible: isOpen, ...modalOption});
  const {current: onDismiss} = useRef(initialOnDismiss);

  dialog.hide = onDismiss;
  dialog.visible = isOpen;

  return (
    <PortalledOverlay {...dialog}>
      <Dialog {...dialog} isOpen={isOpen} aria-labelledby={labelId}>
        <HeaderContainer>
          <EzHeading size="2" id={labelId}>
            {headerText}
          </EzHeading>
          <CloseButton label={dismissLabel} onClick={onDismiss} />
        </HeaderContainer>

        <ContentContainer>{children}</ContentContainer>

        <ButtonFooter>
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
            <EzButton use="secondary" disabled={isSubmitting} onClick={onDismiss}>
              {dismissLabel}
            </EzButton>
          </EzLayout>
        </ButtonFooter>
      </Dialog>
    </PortalledOverlay>
  );
};

export default EzModal;
