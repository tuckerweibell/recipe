import React from 'react';
import {fireEvent} from '@testing-library/react';

const Open = ({children, containerRef}) => {
  React.useEffect(() => {
    const input = containerRef.current.querySelector('input');
    fireEvent.mouseDown(input);
  }, [containerRef]);
  return children;
};

export default Open;
