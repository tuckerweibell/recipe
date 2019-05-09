import React from 'react';
import {
  FlashMessageContainer,
  FlashMessageContents,
  FlashMessageHeadline,
  CloseButton,
  FlashMessageProps,
} from './EzFlashMessage.styles';
import {InfoIcon, CloseIcon, ErrorIcon, SuccessIcon} from '../Icons';

const icons = {
  error: <ErrorIcon />,
  warning: <ErrorIcon />,
  info: <InfoIcon />,
  success: <SuccessIcon />,
};

/**
 * Describe EzFlashMessage here.
 */
const EzFlashMessage: React.FC<FlashMessageProps> = props => {
  return (
    <FlashMessageContainer use={props.use}>
      {icons[props.use]}
      <FlashMessageContents>
        {props.headline && <FlashMessageHeadline>{props.headline}</FlashMessageHeadline>}
        {props.children}
      </FlashMessageContents>
      {props.onDismiss && (
        <CloseButton onClick={props.onDismiss}>
          <CloseIcon />
        </CloseButton>
      )}
    </FlashMessageContainer>
  );
};

/**
 * @component
 */
export default EzFlashMessage;
