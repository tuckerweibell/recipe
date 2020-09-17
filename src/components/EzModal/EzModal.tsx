/** @jsx jsx */
import {jsx} from '@emotion/core';
import React, {useRef} from 'react';
import {useDialogState, useDialogBackdrop} from 'reakit/Dialog';
import EzButton from '../EzButton';
import EzHeading from '../EzHeading';
import EzLayout from '../EzLayout';
import {
  ButtonFooter,
  HeaderContainer,
  ContentContainer,
  StyledOverlay,
  dialogStyles,
} from './EzModal.styles';
import CloseButton from '../CloseButton';
import {useUniqueId} from '../../utils/hooks';
import EzPortal from '../EzPortal';
import {Dialog} from './Dialog';
import {useTheme} from '../../themes/styled';

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

const isSSR = typeof document === 'undefined';

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
  const modalOption = {modal: Boolean(!isSSR && Element.prototype.insertAdjacentElement)};
  const dialog = useDialogState({visible: isOpen, ...modalOption});
  const {current: onDismiss} = useRef(initialOnDismiss);

  dialog.hide = onDismiss;
  dialog.visible = isOpen;
  const theme = useTheme();

  return (
    <PortalledOverlay {...dialog}>
      <Dialog css={dialogStyles({theme})} {...dialog} aria-labelledby={labelId}>
        <HeaderContainer>
          <EzHeading size="2" id={labelId}>
            {headerText}
          </EzHeading>
          <CloseButton tabIndex={-1} label={dismissLabel} onClick={onDismiss} />
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
