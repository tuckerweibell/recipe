import React, {useState, useRef, ReactElement} from 'react';
import Style from '@ezcater/snitches';
import theme from './EzTooltip.theme.config';
import {useUniqueId} from '../../utils/hooks';
import EzPopover from '../EzPopover';
import {domProps} from '../../utils';

type Props = {
  position?: 'vertical' | 'horizontal';
  message: string;
  children: ReactElement;
} & React.HTMLAttributes<any>;

const tooltip = theme.css({
  position: 'relative',
  padding: '$tooltip-padding',
  maxWidth: '300px',
  boxShadow: '$sm',
  whiteSpace: 'pre-line',
  color: '$tooltip-text',
  border: '1px solid $tooltip-border',
  backgroundColor: '$tooltip-border',
});

const arrow = theme.css({
  position: 'absolute',
  pointerEvents: 'none',
  fill: '$tooltip-bg',
});

const arrowPosition = theme.css({
  [`[data-popper-placement^='top'] > &`]: {
    bottom: 5,
    svg: {transform: 'rotate(180deg) translate(50%, 0)'},
  },
  [`[data-popper-placement^='right'] > &`]: {
    left: 5,
    svg: {transform: 'rotate(-90deg) translate(50%, 0)'},
  },
  [`[data-popper-placement^='bottom'] > &`]: {
    top: -5,
    svg: {transform: 'translate(-50%, 0)'},
  },
  [`[data-popper-placement^='left'] > &`]: {
    right: 5,
    svg: {transform: 'rotate(90deg) translate(-50%, 0)'},
  },
});

const reset = theme.css({my: 0});

const EzTooltip: React.FC<Props> = ({children, message, position, ...rest}) => {
  const id = useUniqueId();
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const onMouseEnterEvent = () => setIsHovered(true);
  const onMouseLeaveEvent = () => setIsHovered(false);
  const onFocusEvent = () => setIsFocused(true);
  const onBlurEvent = () => setIsFocused(false);

  const showTooltip = isHovered || isFocused;
  const child = React.Children.only(children);

  const childProps = {
    'aria-describedby': id,
    onMouseEnter: onMouseEnterEvent,
    onMouseLeave: onMouseLeaveEvent,
    onFocus: onFocusEvent,
    onBlur: onBlurEvent,
    ref: targetRef,
  };

  const props = domProps(rest, tooltip());

  return (
    <Style ruleset={theme}>
      {React.cloneElement(child, childProps)}

      {showTooltip && (
        <EzPopover
          targetRef={targetRef}
          placement={position === 'horizontal' ? 'right' : 'bottom'}
          showArrow
        >
          <div data-popper-arrow className={arrowPosition()}>
            <svg width="10" height="10" className={arrow()}>
              <path d="M0 5l5-5 5 5z" />
              <path d="M1.5 5L5 1.5 8.5 5z" />
            </svg>
          </div>
          <div role="tooltip" id={id} tabIndex={-1} {...props}>
            {message && <p className={reset()}>{message}</p>}
          </div>
        </EzPopover>
      )}
    </Style>
  );
};

EzTooltip.defaultProps = {
  position: 'vertical',
};

export default EzTooltip;
