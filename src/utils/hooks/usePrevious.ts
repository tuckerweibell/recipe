import {useRef, useEffect} from 'react';

/**
 * Given some value, store the previous value.
 * It will update when the value changes.
 *
 * Note that the initial value will always be null
 *
 * @param {T} the value to observe.
 * @returns {[T, boolean]} A tuple containing;
 *  1. the previous value
 *  2. if the value has been set.
 * @example
 * ```ts
 * type Props = {
 *   isOpen: boolean;
 *   onClose(): void;
 * };
 *
 * function Example({ value, onChange }) {
 *   const previous = usePrevious(value);
 *   return (
 *     <div>
 *       <input value={value} onChange={onChange} />
 *       <pre>
 *         <code>
 *           Current: {value}
 *           Previous: {previous}
 *         </code>
 *       </pre>
 *     </div>
 *   )
 * }
 * ```
 */
export default function usePrevious<T>(value: T) {
  const previous = useRef<T | null>(null);
  const hasBeenSet = useRef(false);
  useEffect(() => {
    previous.current = value;
    hasBeenSet.current = true;
  }, [value]);
  return [previous.current, hasBeenSet.current] as const;
}
