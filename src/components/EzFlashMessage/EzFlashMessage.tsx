/** @jsx jsx */
import {jsx} from '@emotion/core';
import {FlashMessageContainer, FlashMessageProps} from './EzFlashMessage.styles';
import EzLayout from '../EzLayout';
import EzHeading from '../EzHeading';

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
      <EzLayout layout="basic" alignY="top">
        {icons[props.use]}
        <EzLayout layout="stack" css={{flex: 1}}>
          {props.headline && <EzHeading size="3">{props.headline}</EzHeading>}
          <div>{props.children}</div>
        </EzLayout>
        {props.onDismiss && (
          <CloseButton css={{alignSelf: 'start'}} label="Close" onClick={props.onDismiss} />
        )}
      </EzLayout>
    </FlashMessageContainer>
  );
};

/**
 * @component
 */
export default EzFlashMessage;
