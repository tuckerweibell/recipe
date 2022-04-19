// Portions of the code in this file are based on code from Adobe's react-spectrum.
// https://github.com/adobe/react-spectrum/blob/abcd25984bc9cf726754e4dea9a392afdc3d8afb/packages/%40react-spectrum/utils/src/Slots.tsx
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.

import React, {useContext, useMemo} from 'react';
import {mergeProps} from './mergeProps';

interface SlotProps {
  slot?: string;
}

const SlotContext = React.createContext(null);

export function useSlotProps<T>(props: T, defaultSlot?: string): T {
  const slot = (props as SlotProps).slot || defaultSlot;
  const {[slot]: slotProps = {}} = useContext(SlotContext) || {};
  return mergeProps(slotProps, props);
}

export function SlotProvider(props) {
  const parentSlots = useContext(SlotContext) || {};
  const {slots = {}, children} = props;

  // Merge props for each slot from parent context and props
  const value = useMemo(
    () =>
      Object.keys(parentSlots)
        .concat(Object.keys(slots))
        .reduce(
          (o, p) => ({
            ...o,
            [p]: mergeProps(parentSlots[p] || {}, slots[p] || {}),
          }),
          {}
        ),
    [parentSlots, slots]
  );

  return React.createElement(SlotContext.Provider, {value}, children);
}

export function ClearSlots(props) {
  const {children, ...otherProps} = props;

  const content =
    // need to know if the node is a string or something else that react can render that doesn't get props
    React.Children.toArray(children).length <= 1 && typeof children === 'function'
      ? React.cloneElement(React.Children.only(children), otherProps)
      : children;

  return React.createElement(SlotContext.Provider, {value: {}}, content);
}

export const containsChild = (children, type) =>
  React.Children.toArray(children).some((child: any) => child.type?.displayName === type);

export const hasContentSlot = children => containsChild(children, 'EzContent');
