import React from 'react';
import {EzStatusContainer} from './EzStatus.styles';
import {EzStatusProps} from './EzStatus.types';
import {DotIcon} from '../Icons';

const EzStatus: React.FC<EzStatusProps> = props => {
  return (
    <EzStatusContainer {...props}>
      {['attention', 'warning', 'error'].includes(props.use) && <DotIcon />} {props.text}
    </EzStatusContainer>
  );
};

EzStatus.defaultProps = {
  size: 'normal',
};

EzStatus.displayName = 'EzStatus';

export default EzStatus;
