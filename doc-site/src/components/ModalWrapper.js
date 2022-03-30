/** @jsx jsx */
import {jsx} from '@emotion/react';
import {useRef, useState, useEffect} from 'react';
import {EzButton} from '@ezcater/recipe';

const CodePlaygroundHostNode = ({openState: {setIsOpen}, children}) => {
  const ref = useRef();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // don't automatically open modals that are on the top-level window
    if (ref.current.ownerDocument.defaultView === window.top) setIsOpen(false);
    setIsMounted(true);
  }, []);

  return (
    <div ref={ref} css={{minHeight: 300}}>
      <EzButton use="primary" onClick={() => setIsOpen(true)}>
        Open
      </EzButton>
      {isMounted && children}
    </div>
  );
};

export default CodePlaygroundHostNode;
