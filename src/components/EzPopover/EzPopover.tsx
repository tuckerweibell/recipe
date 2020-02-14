import React, {useRef} from 'react';
import EzPortal from '../EzPortal';
import {useRect} from '../../utils/hooks';

type Props = {
  targetRef: React.RefObject<HTMLElement>;
  position?: 'vertical' | 'horizontal';
} & React.HTMLAttributes<any>;

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

const EzPopover: React.FC<Props> = props => (
  <EzPortal>
    <PopoverImpl {...props} />
  </EzPortal>
);

const PopoverImpl: React.FC<Props> = ({targetRef, position, ...rest}) => {
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

EzPopover.defaultProps = {
  position: 'vertical',
};

export default EzPopover;
