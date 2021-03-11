/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';
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
import FocusScope from '../FocusScope';
import CloseButton from '../CloseButton';
import {useUniqueId} from '../../utils/hooks';
import EzPortal from '../EzPortal';
import {ScrollLock} from './ScrollLock';
import {RequireAtLeastOne} from '../../typings/utility';

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
  const dialog = useDialog({onDismiss});

  if (!isOpen) return null;

  return (
    <EzPortal>
      <StyledOverlay {...backdrop}>
        <ScrollLock />
        <FocusScope contain restoreFocus autoFocus>
          <div {...dialog} css={dialogStyles()} aria-labelledby={labelId}>
            <HeaderContainer>
              <EzHeading size="2" id={labelId}>
                {headerText}
              </EzHeading>
              {dismissLabel && (
                <CloseButton
                  css={{alignSelf: 'center'}}
                  tabIndex={-1}
                  label={dismissLabel}
                  onClick={onDismiss}
                />
              )}
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
                {dismissLabel && (
                  <EzButton use="secondary" disabled={isSubmitting} onClick={onDismiss}>
                    {dismissLabel}
                  </EzButton>
                )}
              </EzLayout>
            </ButtonFooter>
          </div>
        </FocusScope>
      </StyledOverlay>
    </EzPortal>
  );
};

export default EzModal;
