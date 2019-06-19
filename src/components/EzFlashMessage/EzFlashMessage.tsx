import React from 'react';
import {
  FlashMessageContainer,
  FlashMessageContents,
  FlashMessageHeadline,
  FlashMessageProps,
} from './EzFlashMessage.styles';
import CloseButton from '../CloseButton';
import {InfoIcon, ErrorIcon, SuccessIcon} from '../Icons';

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
      {props.onDismiss && <CloseButton label="Close" color="red" onClick={props.onDismiss} />}
    </FlashMessageContainer>
  );
};

/**
 * @component
 */
export default EzFlashMessage;
