import React from 'react';
import {Placement, Modifier} from '@popperjs/core';
import EzPortal from '../EzPortal';
import {usePopper} from '../../utils/hooks';
import {useCloseOnBlur} from './useCloseOnBlur';

type Props = {
  targetRef: React.RefObject<HTMLElement>;
  placement?: Placement;
  modifiers?: Array<Partial<Modifier<any>>>;
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
  modifiers = [],
  shouldCloseOnBlur = false,
  onClose,
  children,
  ...rest
}) => {
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
