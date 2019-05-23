import React, {useRef, useState} from 'react';

type ClickEvents = {
  onMouseEnter: React.MouseEventHandler;
  onClick: React.MouseEventHandler;
  clickable: boolean;
  ref: React.RefObject<HTMLElement>;
};

const interactiveElements = 'label, input, button, select, a, [aria-role]';

const isInteractive = (e, context) => {
  let el = e.target;

  do {
    if (el.matches(interactiveElements)) return el;
    el = el.parentNode;
  } while (el !== null && el.nodeType === 1 && el !== context);

  return null;
};

const useExpandedClickTarget = (): [React.RefObject<HTMLElement>, ClickEvents] => {
  const targetRef = useRef<HTMLElement>();
  const clickableRef = useRef<HTMLElement>();
  const [clickable, setClickable] = useState(false);

  return [
    targetRef,
    {
      onClick: e => {
        if (targetRef.current && clickableRef.current && !isInteractive(e, clickableRef.current))
          targetRef.current.click();
      },
      onMouseEnter: () => {
        setClickable(Boolean(targetRef.current));
      },
      clickable,
      ref: clickableRef,
    },
  ];
};

export default useExpandedClickTarget;
