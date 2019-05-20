import {useState} from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

type ScrollEvents = {
  onScroll: React.ReactEventHandler<HTMLElement>;
};

const useScrollPosition = (): [ScrollPosition, ScrollEvents] => {
  const [position, set] = useState({x: 0, y: 0});
  return [
    position,
    {
      onScroll: e => {
        const {scrollLeft: x, scrollTop: y} = e.target as HTMLElement;
        set({x, y});
      },
    },
  ];
};

export default useScrollPosition;
