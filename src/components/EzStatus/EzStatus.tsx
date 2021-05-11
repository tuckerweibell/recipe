import React, {forwardRef} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzStatus.theme.config';
import {EzStatusProps} from './EzStatus.types';
import {DotIcon} from '../Icons';

const status = theme.css({
  padding: '$status-py $status-px',
  lineHeight: '$status-line-height',
  fontSize: '$status-text-normal',
  fontWeight: '$status-bold',
  borderRadius: '$pill',
  whiteSpace: 'nowrap',
  fill: 'currentColor',

  variants: {
    use: {
      neutral: {
        backgroundColor: '$status-bg-neutral',
        color: '$status-text-neutral',
      },
      success: {
        backgroundColor: '$status-bg-success',
        color: '$status-text-success',
      },
      informational: {
        backgroundColor: '$status-bg-informational',
        color: '$status-text-informational',
      },
      attention: {
        backgroundColor: '$status-bg-attention',
        color: '$status-text-attention',
      },
      warning: {
        backgroundColor: '$status-bg-warning',
        color: '$status-text-warning',
      },
      error: {
        backgroundColor: '$status-bg-error',
        color: '$status-text-error',
      },
    },
    size: {
      normal: {
        fontSize: '$status-text-normal',
      },
      small: {
        fontSize: '$status-text-small',
      },
    },
  },
});

/**
 * Status call attentions to an section or individual item in a set.
 */
const EzStatus = forwardRef<HTMLElement, EzStatusProps>(({...initProps}, ref) => {
  const {props} = status(initProps);
  return (
    <Style ruleset={theme}>
      <span {...props} ref={ref}>
        {['attention', 'warning', 'error'].includes(initProps.use) && <DotIcon />} {props.text}
      </span>
    </Style>
  );
});

EzStatus.defaultProps = {
  size: 'normal',
};

EzStatus.displayName = 'EzStatus';

/**
 * @component
 */
export default EzStatus;
