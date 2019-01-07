import React from 'react';
import {useState} from './react';

type InputBindings<TValue> = {
  value: TValue;
  onChange: React.ChangeEventHandler;
};

const useInput = <TValue>(initialValue: TValue): InputBindings<TValue> => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => setValue(e.target.value);

  return {
    value,
    onChange,
  };
};

export default useInput;
