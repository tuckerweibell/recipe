interface AvailableRoom {
  roomToTheLeft: boolean;
  roomToTheRight: boolean;
  roomToTheTop: boolean;
  roomToTheBottom: boolean;
}

export const getAvailableRoomForTooltip = (targetElem, tooltipElem): AvailableRoom => {
  return getAvailableRoomForTooltipWithRect(
    targetElem.getBoundingClientRect(),
    tooltipElem.getBoundingClientRect(),
    targetElem.ownerDocument.body.getBoundingClientRect()
  );
};

const getAvailableRoomForTooltipWithRect = (
  targetRect,
  tooltipRect,
  documentRect
): AvailableRoom => {
  const roomToTheLeft = targetRect.left - tooltipRect.width > 0;
  const roomToTheRight = targetRect.right + tooltipRect.width < documentRect.width;
  const roomToTheTop = targetRect.top - tooltipRect.height > 0;
  const roomToTheBottom = targetRect.bottom + tooltipRect.height < documentRect.height;

  return {
    roomToTheLeft,
    roomToTheRight,
    roomToTheTop,
    roomToTheBottom,
  };
};
