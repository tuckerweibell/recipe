import React, {useEffect, useRef} from 'react';

const useJumpToOption = (inputRef: React.RefObject<HTMLElement>, {options, move}) => {
  const keys = useRef('');
  const timeout = useRef(null);

  useEffect(() => {
    const el = inputRef.current;

    const onKeyDown = (event: KeyboardEvent) => {
      clearTimeout(timeout.current);

      if (event.key === ' ' && !keys.current) return;

      if (!/^[a-z0-9_-\s]$/i.test(event.key)) return;

      event.stopPropagation();
      event.preventDefault();
      keys.current += event.key;

      if (!keys.current) return;

      const searchText = keys.current.toLowerCase();

      // first try a full match on what the user typed
      const option = options.find(o => o.label.toLowerCase().startsWith(searchText));

      if (option) move(option);

      timeout.current = setTimeout(() => {
        keys.current = '';
      }, 600);
    };

    el.addEventListener('keydown', onKeyDown);
    return () => el.removeEventListener('keydown', onKeyDown);
  }, [inputRef, keys, options, move]);
};

export default useJumpToOption;
