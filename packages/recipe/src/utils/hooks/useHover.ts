import React, {useState} from 'react';

type HoverEvents = {
  onMouseEnter: React.MouseEventHandler;
  onMouseLeave: React.MouseEventHandler;
};

const useHover = (intialState: boolean = false): [boolean, HoverEvents] => {
  const [hovered, set] = useState(intialState);
  return [
    hovered,
    {
      onMouseEnter: () => set(true),
      onMouseLeave: () => set(false),
    },
  ];
};

export default useHover;
