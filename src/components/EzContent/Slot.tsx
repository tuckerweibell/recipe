import React, {forwardRef} from 'react';
import {ClearSlots, useSlotProps} from '../../utils/slots';

type SlotProps = {
  element: keyof JSX.IntrinsicElements;
  slot: string;
  children: React.ReactNode;
};

const Slot = forwardRef<HTMLElement, SlotProps>(function Slot(props, ref) {
  const {element: Element, slot, ...rest}: any = props;
  const {children, ...otherProps} = useSlotProps(rest, slot);

  return (
    <Element {...otherProps} ref={ref}>
      <ClearSlots>{children}</ClearSlots>
    </Element>
  );
});

export default Slot;
