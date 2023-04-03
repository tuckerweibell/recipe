import React, {forwardRef} from 'react';
import EzHeading from '../EzHeading';
import EzTextStyle from '../EzTextStyle';
import theme from '../theme.config';

const wrapper = theme.css({
  fontFamily: '$defaultFont',
  padding: '$blank-state-py $blank-state-px',
  display: 'flex',
  flexDirection: 'column',
  placeItems: 'center',
  gap: '$blank-state-content-spacing',

  '> * + *': {
    // fix for IE: https://github.com/philipwalton/flexbugs#flexbug-2
    maxWidth: '100%',
  },
});

const image = theme.css({
  width: '$blank-state-image-size',
  height: '$blank-state-image-size',
  display: 'flex',
  placeItems: 'center',

  img: {
    margin: '$blank-state-image-margin',
    maxWidth: '$blank-state-image-max-size',
    maxHeight: '$blank-state-image-max-size',
  },
});

type BlankStateProps = {
  imageSrc?: string;
  title: string;
  message: string;
  action?: React.ReactNode;
};

const EzBlankState = forwardRef<HTMLDivElement, BlankStateProps>(
  ({imageSrc, title, message, action}, ref) => (
    <div className={wrapper()} ref={ref}>
      {imageSrc && (
        <div className={image()}>
          <img src={imageSrc} alt="" />
        </div>
      )}
      <EzHeading size="2">{title}</EzHeading>
      <EzTextStyle align="center">{message}</EzTextStyle>
      {action}
    </div>
  )
);

EzBlankState.displayName = 'EzBlankState';

export default EzBlankState;
