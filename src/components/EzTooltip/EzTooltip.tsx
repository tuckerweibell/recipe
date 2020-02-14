import React, {useState, useRef, ReactElement} from 'react';
import {Message, Tooltip} from './EzTooltip.styles';
import {useUniqueId, useRect} from '../../utils/hooks';
import EzPortal from '../EzPortal';

type Props = {
  position?: 'vertical' | 'horizontal';
  message: string;
  children: ReactElement;
};

function getCollisions({targetRect, popoverRect, containerRect, offsetLeft = 0, offsetBottom = 0}) {
  const {top, right, bottom, left} = {
    top: targetRect.top - popoverRect.height < 0,
    right: containerRect.width < targetRect.right + popoverRect.width - offsetLeft,
    bottom: containerRect.height < targetRect.bottom + popoverRect.height - offsetBottom,
    left: targetRect.left + targetRect.width - popoverRect.width < 0,
  };
  return {top, right, bottom, left, flipX: right && !left, flipY: bottom && !top};
}

const horizontal = ({targetRect, popoverRect, collisions}) => {
  return {
    x: collisions.flipX ? targetRect.left - popoverRect.width : targetRect.left + targetRect.width,
    y: targetRect.top + targetRect.height / 2 - popoverRect.height / 2,
  };
};

const vertical = ({targetRect, popoverRect, collisions}) => {
  return {
    x: targetRect.left + targetRect.width / 2 - popoverRect.width / 2,
    y: collisions.flipY ? targetRect.top - popoverRect.height : targetRect.bottom,
  };
};

const Popover = props => (
  <EzPortal>
    <PopoverImpl {...props} />
  </EzPortal>
);

const PopoverImpl = ({targetRef, position, ...rest}) => {
  const ref = useRef<HTMLDivElement>(null);
  const popoverRect = useRect(ref);
  const targetRect = useRect(targetRef);
  const containerRect = targetRef.current?.ownerDocument.body.getBoundingClientRect();
  const visible = Boolean(targetRef && popoverRect);
  const visibility = visible ? 'visible' : 'hidden';
  const coords = position === 'horizontal' ? horizontal : vertical;

  const collisions: any = visible ? getCollisions({targetRect, popoverRect, containerRect}) : {};
  const {x, y} = visible ? coords({targetRect, popoverRect, collisions}) : {x: 0, y: 0};

  const flipX = collisions.flipX && 'popover-flip-x';
  const flipY = collisions.flipY && 'popover-flip-y';

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        right: 'auto',
        bottom: 'auto',
        visibility,
        transform: `translate3d(${x}px, ${y}px, 0px)`,
      }}
      className={[rest.className, `popover-${position}`, flipX, flipY].filter(Boolean).join(' ')}
      {...rest}
    />
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
        <Popover position={props.position} targetRef={targetRef}>
          <Tooltip role="tooltip" id={id} tabIndex="-1">
            <svg width="10" height="5">
              <path d="M0 5l5-5 5 5z" />
              <path d="M1.5 5L5 1.5 8.5 5z" />
            </svg>
            {props.message && <Message>{props.message}</Message>}
          </Tooltip>
        </Popover>
      )}
    </>
  );
};

EzTooltip.defaultProps = {
  position: 'vertical',
};

export default EzTooltip;
