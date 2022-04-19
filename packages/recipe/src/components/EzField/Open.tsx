import React from 'react';
import userEvent from '@testing-library/user-event';

const Open = ({children, containerRef}) => {
  React.useEffect(() => {
    const input = containerRef.current.querySelector('input');
    userEvent.click(input);
  }, [containerRef]);
  return children;
};

export default Open;
