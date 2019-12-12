import {useLayoutEffect, useRef, useState} from 'react';

export default ({cssProperty, children}) => {
  const ref = useRef(null);
  const [value, setValue] = useState(null);

  useLayoutEffect(() => {
    const newValue = window.getComputedStyle(ref.current)[cssProperty];
    setValue(newValue);
  });

  return children([ref, value]);
};
