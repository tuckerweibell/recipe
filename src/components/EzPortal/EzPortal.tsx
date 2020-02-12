import React, {useLayoutEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';

const EzPortal: React.FC<PortalProps> = ({children}) => {
  const mountNode = useRef<HTMLDivElement | null>(null);

  const [hostNode, setHostNode] = useState(null);

  // because it's possible to nest portals, we need to ensure that we can
  // mount the portal to the correct document element. To do this, we can
  // initially mount any DOM element to derive it's ownerDocument, then
  // render the portal inside this document
  useLayoutEffect(() => {
    const ownerDocument = mountNode.current.ownerDocument;
    const portalNode = ownerDocument.createElement('div');
    ownerDocument.body.appendChild(portalNode);
    setHostNode(portalNode);
    return () => {
      if (!portalNode.parentElement) return;
      portalNode.ownerDocument.body.removeChild(portalNode);
    };
  }, []);

  return hostNode ? createPortal(children, hostNode) : <div ref={mountNode} />;
};

type PortalProps = {
  children: React.ReactNode;
};

export default EzPortal;
