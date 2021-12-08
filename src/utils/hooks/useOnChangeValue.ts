import {useEffect, useRef} from 'react';
import usePrevious from './usePrevious';

interface Watch<T> {
  (current: T, previous: T | null): void;
}

function useCachedCallback<T>(callback: Watch<T>) {
  const observer = useRef(callback);
  useEffect(() => {
    return () => {
      observer.current = callback;
    };
  }, [callback]);
  return observer.current;
}

/**
 * A hook that will watch a value then trigger a callback when it changes
 *
 * @param value the value to watch
 * @param watcher the action to take when the value changes.
 * @returns {void}
 * @example
 * ```tsx
 * function Trigger() {
 *   const [isChecked, setIsChecked] = useState(false);
 *
 *   useOnChangeValue(isChecked, (current, previous) => {
 *     console.log(`Is checked changed from ${previous} to ${current}`);
 *   });
 *
 *   const onChange = ({ checked }) => setIsChecked(checked);
 *
 *   return <input type="checkbox" checked={isChecked} onChange={onChange} />
 * }
 * ```
 */
export default function useOnChangeValue<T>(value: T, watcher: Watch<T>) {
  const [previous, isSet] = usePrevious(value);
  const observer = useCachedCallback(watcher);

  useEffect(() => {
    if (isSet && previous !== value) observer(value, previous);
  }, [previous, value, observer]);
}
