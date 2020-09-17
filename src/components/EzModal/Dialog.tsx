import React, {useRef, useContext, useEffect} from 'react';
import {useDialog, DialogProps} from 'reakit/Dialog';
import {Portal} from 'reakit/Portal';
import {StyledDialog} from './EzModal.styles';
import {PortalContext} from '../EzPortal';

const isSSR = typeof document === 'undefined';

export const Dialog: React.FC<DialogProps> = ({children, ...props}) => {
  const {current: hostNode} = useContext(PortalContext);
  const initialFocusRef = useRef<HTMLElement>();
  const ref = useRef<HTMLElement>();
  const isOpen = props.visible;

  useEffect(() => {
    if (isOpen) initialFocusRef.current = hostNode?.ownerDocument?.activeElement as HTMLElement;
  }, [hostNode, isOpen]);

  const preventBodyScroll = !isSSR && hostNode?.ownerDocument === document;
  const initialFocus = 'unstable_finalFocusRef';
  const dialog = useDialog({[initialFocus]: initialFocusRef, preventBodyScroll, ...props}, {ref});

  return (
    // eslint-disable-next-line no-underscore-dangle
    <StyledDialog {...dialog} className={Portal.__className}>
      <PortalContext.Provider value={ref}>{props.visible && children}</PortalContext.Provider>
    </StyledDialog>
  );
};
