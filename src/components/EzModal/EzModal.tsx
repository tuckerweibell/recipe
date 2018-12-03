import React from 'react';
import EzButton from '../EzButton';
import EzHeading from '../EzHeading';
import EzLayout from '../EzLayout';
import ScrollLock from './ScrollLock';
import {
  CloseButton,
  ButtonFooter,
  HeaderContainer,
  ContentContainer,
  ModalContainer,
  Overlay,
} from './EzModal.styles';

const CloseIcon = ({onClick, dismissLabel}) => (
  <CloseButton role="button" onClick={onClick}>
    <svg
      aria-label={dismissLabel}
      display="block"
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M6.5,6.5 L6.5,-1 L9.5,-1 L9.5,6.5 L17,6.5 L17,9.5 L9.5,9.5 L9.5,17 L6.5,17 L6.5,9.5 L-1,9.5 L-1,6.5 L6.5,6.5 Z"
          id="Close-Button"
          fill="#3A81BE"
          transform="translate(8.000000, 8.000000) rotate(-315.000000) translate(-8.000000, -8.000000) "
        />
      </g>
    </svg>
  </CloseButton>
);

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

const EzModal: React.SFC<Props> = ({
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
        <CloseIcon dismissLabel={dismissLabel} onClick={onDismiss} />
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
