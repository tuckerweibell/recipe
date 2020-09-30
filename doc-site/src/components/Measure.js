import {useLayoutEffect, useRef, useState} from 'react';

export const useMeasure = (ref, cssProperty) => {
  const [value, setValue] = useState(null);

  useLayoutEffect(() => {
    const newValue = window.getComputedStyle(ref.current)[cssProperty];
    setValue(newValue);
  });

  return value;
}

export default ({cssProperty, children}) => {
  const ref = useRef(null);
  return children([ref, useMeasure(ref, cssProperty)]);
};
