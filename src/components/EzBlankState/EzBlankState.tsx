import React, {forwardRef} from 'react';
import EzHeading from '../EzHeading';
import EzTextStyle from '../EzTextStyle';
import {BlankStateWrapper, BlankStateImageWrapper} from './EzBlankState.styles';

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
          <img src={imageSrc} alt="" />
        </BlankStateImageWrapper>
      )}
      <EzHeading size="2">{title}</EzHeading>
      <EzTextStyle align="center">{message}</EzTextStyle>
      {action}
    </BlankStateWrapper>
  )
);

EzBlankState.displayName = 'EzBlankState';

export default EzBlankState;
