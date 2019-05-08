import React from 'react';
import {EzStatusContainer} from './EzStatus.styles';
import {EzStatusSizes, EzStatusActionUses, EzStatusProps} from './EzStatus.types';
import {DotIcon} from '../Icons';

const EzStatus: React.FC<EzStatusProps> = props => {
  return (
    <EzStatusContainer {...props}>
      {EzStatusActionUses[props.use] && <DotIcon />} {props.text}
    </EzStatusContainer>
  );
};

EzStatus.defaultProps = {
  size: EzStatusSizes.normal,
};

EzStatus.displayName = 'EzStatus';

export default EzStatus;
