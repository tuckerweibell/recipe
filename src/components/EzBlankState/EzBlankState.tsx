import React, {forwardRef} from 'react';
import Style from '@ezcater/snitches';
import EzHeading from '../EzHeading';
import EzTextStyle from '../EzTextStyle';
import theme from './EzBlankState.theme.config';

const wrapper = theme.css({
  padding: '$blank-state-py $blank-state-px',
  display: 'flex',
  flexDirection: 'column',
  placeItems: 'center',

  '&& > * + *': {
    marginTop: '$blank-state-content-spacing',
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
    <Style ruleset={theme}>
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
    </Style>
  )
);

EzBlankState.displayName = 'EzBlankState';

export default EzBlankState;
