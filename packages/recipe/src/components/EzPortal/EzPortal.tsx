import React, {useLayoutEffect, useRef, useState, useContext} from 'react';
import {createPortal} from 'react-dom';
import {EzProviderContext} from '../EzProvider';

export const PortalContext = React.createContext<React.MutableRefObject<HTMLElement | null>>({
  current: null,
});

const {Provider} = PortalContext;

const EzPortal: React.FC<PortalProps> = ({children}) => {
  const mountNode = useRef<HTMLDivElement | null>(null);
  const {current: contextValue} = useContext(PortalContext);
  const contextRef = useRef<HTMLElement | null>(contextValue);
  const [hostNode, setHostNode] = useState<HTMLDivElement>(null);
  const stitchesClassName = useContext(EzProviderContext);

  // because it's possible to render portals within iframes, we need to ensure that we can
  // mount the portal to the correct document element. To do this, we initially mount any
  // DOM element and derive it's ownerDocument. This document represents the iframe the
  // mounted DOM element resides within. We can then render the portal inside this document.
  //
  // Because we can also nest portals, we also need to nest the portalled children within
  // portalled parent.
  useLayoutEffect(() => {
    // if the context element and the currently mounted element have the same document (i.e.
    // they're in the same iframe or parent window), we can use the context element to
    // nest our new content. Otherwise, we have to use the mounted element to determine
    // the current ownerDocument (iframed content) to ensure the portal renders to the
    // correct document.
    const {current: context} = contextRef;
    const parentElement =
      mountNode.current.ownerDocument === context?.ownerDocument
        ? context
        : mountNode.current.ownerDocument.body;

    const {ownerDocument} = parentElement;
    const portalNode = ownerDocument.createElement('div');

    // insert the new container for the portalled content
    parentElement.appendChild(portalNode);
    setHostNode(portalNode);

    return () => {
      if (!parentElement.parentElement || !parentElement.contains(portalNode)) return;
      parentElement.removeChild(portalNode);
    };
  }, []);

  useLayoutEffect(() => {
    if (!stitchesClassName) return undefined;

    hostNode?.classList?.add(stitchesClassName);
    return () => hostNode?.classList?.remove(stitchesClassName);
  }, [hostNode, stitchesClassName]);

  if (!hostNode) return <div ref={mountNode} />;

  return <Provider value={{current: hostNode}}>{createPortal(children, hostNode)}</Provider>;
};

type PortalProps = {
  children: React.ReactNode;
};

export default EzPortal;
