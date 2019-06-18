import React from 'react';
import EzButton from '../EzButton';
import EzHeading from '../EzHeading';
import EzLayout from '../EzLayout';
import ScrollLock from './ScrollLock';
import {
  ButtonFooter,
  HeaderContainer,
  ContentContainer,
  ModalContainer,
  Overlay,
} from './EzModal.styles';
import CloseButton from '../CloseButton';

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

const EzModal: React.FC<Props> = ({
  children,
  headerText,
  destructive,
  dismissLabel,
  isOpen,
  isSubmitting,
  onDismiss,
  onSubmit,
  submitLabel,
}) => (
  <Overlay isOpen={isOpen} onDismiss={onDismiss}>
    <ModalContainer>
      <ScrollLock />
      <HeaderContainer>
        <EzHeading size="2">{headerText}</EzHeading>
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
    </ModalContainer>
  </Overlay>
);

export default EzModal;
