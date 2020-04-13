import React from 'react';
import {Placement, Modifier} from '@popperjs/core';
import EzPortal from '../EzPortal';
import {usePopper} from '../../utils/hooks';

type Props = {
  targetRef: React.RefObject<HTMLElement>;
  placement?: Placement;
  modifiers?: Array<Partial<Modifier<any>>>;
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
  children,
  ...rest
}) => {
  const {popper, reference} = usePopper({placement, modifiers});
  reference.current = targetRef.current;

  return (
    <div data-popper-placement ref={popper as any} {...rest}>
      {children}
    </div>
  );
};

export default EzPopover;
