/* istanbul ignore file */
import React, {useState} from 'react';
import {Placement, Modifier} from '@popperjs/core';
import EzPortal from '../EzPortal';
import {usePopper} from '../../utils/hooks';
import {useCloseOnBlur} from './useCloseOnBlur';
import FocusScope from '../FocusScope';

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

  if (showArrow) modifiers.push({name: 'arrow', enabled: true, options: {padding: 5}});

  const {popper, reference} = usePopper({placement, modifiers});
  reference.current = targetRef.current;

  useCloseOnBlur({shouldCloseOnBlur, onClose, refs: [targetRef, popper]});

  const scopeRef = React.useRef();

  React.useEffect(() => {
    const triggerEl = targetRef.current;
    const focusScope: any = scopeRef.current;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;

      // intercept tabbing from trigger to move focus into the popover
      e.preventDefault();
      focusScope.focusFirstInScope();
    };

    triggerEl.addEventListener('keydown', onKeyDown, true);

    return () => {
      triggerEl.removeEventListener('keydown', onKeyDown, true);
    };
  }, [targetRef]);

  return (
    <div data-popper-placement ref={popper as any} {...rest}>
      <FocusScope restoreFocus ref={scopeRef}>
        {children}
      </FocusScope>
    </div>
  );
};

export default EzPopover;
