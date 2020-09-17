import React, {useRef, useContext, useEffect} from 'react';
import {useDialog, DialogProps} from 'reakit/Dialog';
import {Portal} from 'reakit/Portal';
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {wrapElement, ...dialog} = useDialog(
    {[initialFocus]: initialFocusRef, preventBodyScroll, ...props},
    {ref}
  );

  return (
    // eslint-disable-next-line no-underscore-dangle
    <div {...dialog} className={`${Portal.__className} ${props.className}`}>
      <PortalContext.Provider value={ref}>{props.visible && children}</PortalContext.Provider>
    </div>
  );
};
