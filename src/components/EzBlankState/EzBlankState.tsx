import React, {forwardRef} from 'react';

import EzHeading from '../EzHeading';

import {
  BlankStateWrapper,
  BlankStateImageWrapper,
  BlankStateImage,
  BlankStateMessage,
} from './EzBlankState.styles';

type BlankStateProps = {
  imageSrc?: string;
  title: string;
  message: string;
  action?: React.ReactNode;
};

const EzBlankState = forwardRef<HTMLDivElement, BlankStateProps>(
  ({imageSrc, title, message, action}, ref) => (
    <BlankStateWrapper ref={ref}>
      {imageSrc && (
        <BlankStateImageWrapper>
          <BlankStateImage src={imageSrc} alt="" />
        </BlankStateImageWrapper>
      )}
      <EzHeading size="2">{title}</EzHeading>
      <BlankStateMessage>{message}</BlankStateMessage>
      {action}
    </BlankStateWrapper>
  )
);

EzBlankState.displayName = 'EzBlankState';

export default EzBlankState;
