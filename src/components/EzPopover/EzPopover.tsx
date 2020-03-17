import React from 'react';
import EzPortal from '../EzPortal';
import {usePopper} from '../../utils/hooks';

type Props = {
  targetRef: React.RefObject<HTMLElement>;
  position?: 'vertical' | 'horizontal';
} & React.HTMLAttributes<any>;

const EzPopover: React.FC<Props> = props => (
  <EzPortal>
    <PopoverImpl {...props} />
  </EzPortal>
);

const PopoverImpl: React.FC<Props> = ({targetRef, position, children, ...rest}) => {
  const {popper, reference} = usePopper({
    placement: position === 'horizontal' ? 'right' : 'bottom',
  });
  reference.current = targetRef.current;

  return (
    <div data-popper-placement ref={popper as any} {...rest}>
      {children}
    </div>
  );
};

EzPopover.defaultProps = {
  position: 'vertical',
};

export default EzPopover;
