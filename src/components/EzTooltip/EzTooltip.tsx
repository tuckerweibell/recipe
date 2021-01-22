import React, {useState, useRef, ReactElement} from 'react';
import {Message, Tooltip, TooltipArrow} from './EzTooltip.styles';
import {useUniqueId} from '../../utils/hooks';
import EzPopover from '../EzPopover';

type Props = {
  position?: 'vertical' | 'horizontal';
  message: string;
  children: ReactElement;
} & React.HTMLAttributes<any>;

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

  return (
    <>
      {React.cloneElement(child, childProps)}

      {showTooltip && (
        <EzPopover
          targetRef={targetRef}
          placement={position === 'horizontal' ? 'right' : 'bottom'}
          showArrow
        >
          <TooltipArrow data-popper-arrow>
            <svg width="10" height="10">
              <path d="M0 5l5-5 5 5z" />
              <path d="M1.5 5L5 1.5 8.5 5z" />
            </svg>
          </TooltipArrow>
          <Tooltip role="tooltip" id={id} tabIndex={-1} {...rest}>
            {message && <Message>{message}</Message>}
          </Tooltip>
        </EzPopover>
      )}
    </>
  );
};

EzTooltip.defaultProps = {
  position: 'vertical',
};

export default EzTooltip;
