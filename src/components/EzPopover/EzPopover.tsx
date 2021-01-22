import React from 'react';
import {Placement, Modifier} from '@popperjs/core';
import EzPortal from '../EzPortal';
import {usePopper} from '../../utils/hooks';
import {useCloseOnBlur} from './useCloseOnBlur';

type Props = {
  targetRef: React.RefObject<HTMLElement>;
  placement?: Placement;
  matchWidth?: boolean;
  showArrow?: boolean;
  shouldCloseOnBlur?: boolean;
  onClose?: () => void;
} & React.HTMLAttributes<any>;

const EzPopover: React.FC<Props> = props => (
  <EzPortal>
    <PopoverImpl {...props} />
  </EzPortal>
);

const PopoverImpl: React.FC<Props> = ({
  targetRef,
  placement = 'bottom',
  matchWidth = false,
  showArrow = false,
  shouldCloseOnBlur = false,
  onClose,
  children,
  ...rest
}) => {
  const modifiers: Array<Partial<Modifier<any>>> = [{name: 'offset', options: {offset: [0, 5]}}];
  
  if (matchWidth) { 
    modifiers.push({
      name: 'matchWidth',
      enabled: true,
      fn: ({state}) => {
        // eslint-disable-next-line no-param-reassign
        state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      phase: 'beforeWrite',
      requires: ['computeStyles'],
    });
  }

  if (showArrow) {
    modifiers.push({name: 'arrow', enabled: true, options: {padding: 5}});
  }

  const {popper, reference} = usePopper({placement, modifiers});
  reference.current = targetRef.current;

  useCloseOnBlur({shouldCloseOnBlur, onClose, refs: [targetRef, popper]});

  return (
    <div data-popper-placement ref={popper as any} {...rest}>
      {children}
    </div>
  );
};

export default EzPopover;
