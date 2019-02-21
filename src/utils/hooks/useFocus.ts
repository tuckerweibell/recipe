import React, {useState} from 'react';

type FocusEvents = {
  onFocus: React.FocusEventHandler;
  onBlur: React.FocusEventHandler;
};

const useFocus = (intialState: boolean = false): [boolean, FocusEvents] => {
  const [focused, set] = useState(intialState);
  return [
    focused,
    {
      onFocus: () => set(true),
      onBlur: () => set(false),
    },
  ];
};

export default useFocus;
