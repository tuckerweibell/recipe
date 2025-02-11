/* istanbul ignore file */
import React, {forwardRef, type HTMLAttributes, type RefObject, useEffect, useRef} from 'react';
import {Placement, Modifier} from '@popperjs/core';
import EzPortal, {PortalContext} from '../EzPortal';
import theme from '../theme.config';
import {usePopper} from '../../utils/hooks';
import {useCloseOnBlur} from './useCloseOnBlur';
import FocusScope from '../utils/FocusScope';
import {clsx, mergeRefs} from '../../utils';

export type Ref = HTMLDivElement;

export type EzPopoverProps = {
  classNameSuffix?: string;
  matchWidth?: boolean;
  onClose?: () => void;
  placement?: Placement;
  shouldCloseOnBlur?: boolean;
  showArrow?: boolean;
  targetRef: RefObject<HTMLElement>;
} & HTMLAttributes<any>;

const popperStyle = theme.css({
  zIndex: '$popover-z', // this is hard-coded in theme.config.ts for now, but we should really pull it in from mui when we convert popovers to mui
});

const EzPopover = forwardRef<Ref, EzPopoverProps>((props, ref) => (
  <EzPortal>
    <EzPopoverImpl ref={ref} {...props} />
  </EzPortal>
));

const EzPopoverImpl = forwardRef<Ref, EzPopoverProps>(
  (
    {
      targetRef,
      placement = 'bottom',
      matchWidth = false,
      showArrow = false,
      shouldCloseOnBlur = false,
      onClose,
      children,
      classNameSuffix,
      ...rest
    },
    ref
  ) => {
    const modifiers: Array<Partial<Modifier<any, any>>> = [
      {name: 'offset', options: {offset: [0, 5]}},
    ];

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

    const scopeRef = useRef();

    useEffect(() => {
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
      <div
        data-popper-placement
        ref={mergeRefs([popper, ref])}
        {...rest}
        className={clsx(
          popperStyle(),
          'EzPopover',
          classNameSuffix && `EzPopover-${classNameSuffix}`
        )}
      >
        <PortalContext.Provider value={popper}>
          <FocusScope restoreFocus ref={scopeRef}>
            {children}
          </FocusScope>
        </PortalContext.Provider>
      </div>
    );
  }
);

EzPopover.displayName = 'EzPopover';
EzPopoverImpl.displayName = 'EzPopoverImpl';

export default EzPopover;
