import React, {forwardRef} from 'react';
import {EzStatusContainer} from './EzStatus.styles';
import {EzStatusProps} from './EzStatus.types';
import {DotIcon} from '../Icons';

const EzStatus = forwardRef<HTMLElement, EzStatusProps>((props, ref) => {
  return (
    <EzStatusContainer {...props} ref={ref}>
      {['attention', 'warning', 'error'].includes(props.use) && <DotIcon />} {props.text}
    </EzStatusContainer>
  );
});

EzStatus.defaultProps = {
  size: 'normal',
};

EzStatus.displayName = 'EzStatus';

export default EzStatus;
