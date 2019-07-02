import React, {useEffect, useState} from 'react';

const useJumpToOption = (inputRef: React.RefObject<HTMLElement>, {options, move}) => {
  const [keys, setKeys] = useState('');

  useEffect(() => {
    if (!keys) return function noop() {};

    // clear out the current key presses after a short delay
    const timeout = setTimeout(setKeys, 600, '');

    const searchText = keys.toLowerCase();

    // first try a full match on what the user typed
    const option = options.find(o => o.label.toLowerCase().startsWith(searchText));

    if (option) move(option);

    return () => clearTimeout(timeout);
  }, [keys, options, move]);

  useEffect(() => {
    const menu = inputRef.current;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === ' ' && !keys) return;

      if (/^[a-z0-9_-\s]$/i.test(event.key)) {
        event.stopPropagation();
        event.preventDefault();
        setKeys(k => k + event.key);
      }
    };

    menu.addEventListener('keydown', onKeyDown);
    return () => menu.removeEventListener('keydown', onKeyDown);
  }, [inputRef, keys, setKeys]);
};

export default useJumpToOption;
