import React from 'react';

const Open = ({children, containerRef}) => {
  React.useEffect(() => {
    const input = containerRef.current.querySelector('input');
    input.focus();
    input.click();
  }, [containerRef]);
  return children;
};

export default Open;
