import React from 'react';
import {InlineFeedback} from './EzInlineFeedback.styles';

import {ErrorIcon, ProgressIcon, SuccessIcon} from '../Icons';

import en from './en';
import {useTranslation} from '../../utils/hooks';

const icons = {
  error: <ErrorIcon />,
  progress: <ProgressIcon />,
  success: <SuccessIcon />,
};

type Props = {
  use: string;
};

const EzInlineFeedback: React.FC<Props> = ({use}) => {
  const {t} = useTranslation(en);

  return (
    <InlineFeedback use={use}>
      {icons[use]}
      {t(use)}
    </InlineFeedback>
  );
};

export default EzInlineFeedback;
