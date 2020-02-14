import React, {useState, useRef, useLayoutEffect, ReactElement} from 'react';
import {Message, Tooltip} from './EzTooltip.styles';
import {useUniqueId} from '../../utils/hooks';
import {getAvailableRoomForTooltip} from './getAvailableRoomForTooltip';
import TooltipArrow from './TooltipArrow';
import EzPortal from '../EzPortal';

type Props = {
  position?: 'vertical' | 'horizontal';
  message: string;
  children: ReactElement;
};

const usePositionBasedOnAvailableRoom = (
  showTooltip: boolean,
  wrapperRef,
  tooltipRef,
  initialPosition: 'vertical' | 'horizontal'
) => {
  const [position, setPosition] = useState<'top' | 'left' | 'bottom' | 'right'>();

  useLayoutEffect(() => {
    if (tooltipRef.current) {
      const {
        roomToTheLeft,
        roomToTheRight,
        roomToTheTop,
        roomToTheBottom,
      } = getAvailableRoomForTooltip(wrapperRef.current, tooltipRef.current);
      switch (initialPosition) {
        case 'horizontal':
          setPosition(roomToTheLeft && !roomToTheRight ? 'left' : 'right');
          break;
        default:
          setPosition(roomToTheTop && !roomToTheBottom ? 'top' : 'bottom');
          break;
      }
    }
  }, [showTooltip, wrapperRef, tooltipRef, initialPosition]);

  return {position};
};

const getStyles = (targetRect, tooltipRect, position) => {
  if (!targetRect || !tooltipRect) return {visibility: 'hidden'};

  let x = 0;
  let y = 0;

  switch (position) {
    case 'right':
      x = targetRect.left + targetRect.width;
      y = targetRect.top + (targetRect.height / 2 - tooltipRect.height / 2);
      break;
    case 'left':
      x = targetRect.left - tooltipRect.width;
      y = targetRect.top + (targetRect.height / 2 - tooltipRect.height / 2);
      break;
    case 'top':
      x = targetRect.left + targetRect.width / 2;
      y = targetRect.top - tooltipRect.height;
      break;
    case 'bottom':
    default:
      x = targetRect.left + targetRect.width / 2;
      y = targetRect.bottom;
      break;
  }

  return { transform: `translate3d(${x}px, ${y}px, 0px)`};
}

const TooltipWrapper = ({children, position, targetRef, tooltipRef, style}) => {
  const targetRect = targetRef.current?.getBoundingClientRect();
  const tooltipRect = tooltipRef.current?.getBoundingClientRect();

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        ...style,
        ...getStyles(targetRect, tooltipRect, position),
      }}
    >
      {children}
    </div>
  );
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
  const tooltipRef = useRef(null);

  const showTooltip = isHovered || isFocused;

  const {position} = usePositionBasedOnAvailableRoom(
    showTooltip,
    targetRef,
    tooltipRef,
    props.position
  );

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

      <EzPortal>
        <TooltipWrapper
          position={position}
          targetRef={targetRef}
          tooltipRef={tooltipRef}
          style={{visibility: showTooltip ? 'visible' : 'hidden'}}
        >
          <Tooltip role="tooltip" id={id} position={position} tabIndex="-1" ref={tooltipRef}>
            <TooltipArrow position={position} />
            {props.message && <Message>{props.message}</Message>}
          </Tooltip>
        </TooltipWrapper>
      </EzPortal>
    </>
  );
};

EzTooltip.defaultProps = {
  position: 'vertical',
};

export default EzTooltip;
