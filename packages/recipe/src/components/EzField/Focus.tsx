import React from 'react';

const Focus = ({children, containerRef}) => {
  React.useEffect(() => {
    const input = containerRef.current.querySelector('input');
    input.focus();
  }, [containerRef]);
  return children;
};

export default Focus;
