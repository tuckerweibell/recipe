import React, {useState, useRef, ReactElement} from 'react';
import {Message, Tooltip} from './EzTooltip.styles';
import {useUniqueId} from '../../utils/hooks';
import EzPopover from '../EzPopover';

type Props = {
  position?: 'vertical' | 'horizontal';
  message: string;
  children: ReactElement;
};

const EzTooltip: React.FC<Props> = props => {
  const id = useUniqueId();
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const onMouseEnterEvent = () => setIsHovered(true);
  const onMouseLeaveEvent = () => setIsHovered(false);
  const onFocusEvent = () => setIsFocused(true);
  const onBlurEvent = () => setIsFocused(false);

  const targetRef = useRef(null);

  const showTooltip = isHovered || isFocused;

  const child = React.Children.only(props.children);

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
        <EzPopover position={props.position} targetRef={targetRef}>
          <Tooltip role="tooltip" id={id} tabIndex="-1">
            <svg width="10" height="5">
              <path d="M0 5l5-5 5 5z" />
              <path d="M1.5 5L5 1.5 8.5 5z" />
            </svg>
            {props.message && <Message>{props.message}</Message>}
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
