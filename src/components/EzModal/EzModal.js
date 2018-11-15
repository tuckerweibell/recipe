import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import EzButton from '../EzButton';
import EzHeading from '../EzHeading';
import EzLayout from '../EzLayout';
import {
  CloseButton,
  ButtonFooter,
  HeaderContainer,
  ContentContainer,
  ModalContainer,
  Modal,
  reactModalHtmlOpen,
  reactModalAfterOpen,
  reactModalOverlay,
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

class EzModal extends React.Component {
  componentDidMount() {
    const {appElement} = this.props;

    if (appElement) ReactModal.setAppElement(appElement);
  }

  render() {
    const {
      children,
      headerText,
      destructive,
      dismissLabel,
      isOpen,
      isSubmitting,
      onDismiss,
      onSubmit,
      submitLabel,
    } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onDismiss}
        overlayClassName={reactModalOverlay}
        afterOpenClassName={reactModalAfterOpen}
        htmlOpenClassName={reactModalHtmlOpen}
      >
        {isOpen && (
          <ModalContainer>
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
        )}
      </Modal>
    );
  }
}

EzModal.propTypes = {
  /**
   * A query selector identifying the root of your app.
   * Ezmodal uses this selector to indicate to screen readers that this content
   * should be hidden (via the aria-hidden attribute) while the modal is open.
   */
  appElement: PropTypes.string,

  /**
   * Arbitrary children for the modal contents
   */
  children: PropTypes.node.isRequired,

  /**
   * Text to display in the header
   */
  headerText: PropTypes.string.isRequired,

  /**
   * When true will display the modal in destructive styles (aka a destructive submit button)
   */
  destructive: PropTypes.bool,

  /**
   * Label for the dismiss button. Omitting this prop will suppress the dismiss button
   */
  dismissLabel: PropTypes.string.isRequired,

  /**
   * Dictates whether the modal is open. You must still render the component even
   * if isOpen is false to allow for the opening transition to occur (if present)
   */
  isOpen: PropTypes.bool.isRequired,

  /**
   * When true will render the modal with appropriate styles to signify a loading state
   * Useful when the submit handler has an asynchronous success condition
   */
  isSubmitting: PropTypes.bool,

  /**
   * Callback for when dismiss button is clicked.
   */
  onDismiss: PropTypes.func,

  /**
   * Callback for when submit button is clicked.
   */
  onSubmit: PropTypes.func,

  /**
   * Label for the submit button. Omitting this prop will suppress the submit button
   */
  submitLabel: PropTypes.string,
};

EzModal.defaultProps = {
  appElement: '#root',
  destructive: false,
  isSubmitting: false,
  onDismiss() {},
  onSubmit() {},
  submitLabel: null,
};

export default EzModal;
