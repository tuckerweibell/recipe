import {useCallback} from 'react';
import useEventListenerOutside from './useEventListenerOutside';

const useOnFocusOutside = (handler, refs: React.RefObject<any>[]) => {
  const callback = useCallback(
    (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      // Chrome seems to ignore the focusin event bubbling up to elements with a negative tab index
      // however, this is NOT the case in Safari and IE11. For the purposes of this hook, we aren't
      // interested in these events (since the element doesn't receive focus), so we'll ignore them.
      if ('tabIndex' in target && target.tabIndex < 0) return;
      handler(event);
    },
    [handler]
  );

  // using 'focusin' instead of 'focus' since 'focus' does not bubble up to the document element
  useEventListenerOutside(callback, 'focusin', refs);
};

export default useOnFocusOutside;
