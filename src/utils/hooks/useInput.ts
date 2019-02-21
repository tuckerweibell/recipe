import React, {useState, useCallback} from 'react';

type InputBindings<TValue> = {
  value: TValue;
  onChange: React.ChangeEventHandler;
};

const useInput = <TValue>(initialValue: TValue): InputBindings<TValue> => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(e => setValue(e.target.value), []);

  return {
    value,
    onChange,
  };
};

export default useInput;
