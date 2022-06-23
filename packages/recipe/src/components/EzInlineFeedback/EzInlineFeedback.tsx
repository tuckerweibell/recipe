import React, {forwardRef, HTMLAttributes} from 'react';
import theme from '../theme.config';
import {ErrorIcon, ProgressIcon, SuccessIcon} from '../Icons';
import en from './en';
import {useTranslation} from '../../utils/hooks';
import {domProps} from '../../utils';

const icons = {
  error: <ErrorIcon />,
  progress: <ProgressIcon />,
  success: <SuccessIcon />,
};

const styles = theme.css({
  display: 'inline-block',
  lineHeight: '$inline-feedback',
  verticalAlign: 'top',

  // spinner
  svg: {
    marginRight: '$100',
  },

  variants: {
    use: {
      error: {color: '$negative', fill: '$negative'},
      progress: {fill: '$deemphasisText'},
      success: {fill: '$positiveText'},
    },
  },
});

type Ref = HTMLSpanElement;
type Use = 'error' | 'progress' | 'success';
interface Props extends Omit<HTMLAttributes<HTMLElement>, 'as' | 'css'> {
  use: Use;
}

const EzInlineFeedback = forwardRef<Ref, Props>(({use, ...additionalProps}, ref) => {
  const {t} = useTranslation(en);

  const props = domProps(additionalProps, styles({use}));

  return (
    <span {...props} ref={ref}>
      {icons[use]}
      {t(use)}
    </span>
  );
});

export default EzInlineFeedback;
