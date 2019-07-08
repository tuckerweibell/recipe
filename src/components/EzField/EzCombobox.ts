import {useRef} from 'react';
import {useHiddenState, useHidden} from 'reakit/Hidden';
import {useAllCallbacks, useOnClickOutside, useEventListenerOutside} from '../../utils/hooks';

export const useComboboxState = () => {
  // eslint-disable-next-line @typescript-eslint/camelcase
  const hidden = useHiddenState({unstable_isMounted: true});
  return {
    ...hidden,
  };
};

export const useCombobox = (options, htmlProps) => {
  const ref = useRef<HTMLInputElement>();

  useOnClickOutside(options.hide, [ref]);
  useEventListenerOutside(options.hide, 'focusin', [ref]);

  return {
    role: 'combobox',
    ref,
    'aria-expanded': Boolean(options.visible),
    'aria-owns': options.unstable_hiddenId,
    ...htmlProps,
  };
};

export const useComboboxInput = (options, htmlProps) => {
  const ref = useRef<HTMLInputElement>();

  const onKeyDown = e => {
    const keyMap = {
      Escape: options.hide,
      ArrowUp: !options.visible && options.show,
      ArrowDown: !options.visible && options.show,
      ' ': !options.visible && options.show,
    };
    const action = keyMap[e.key];
    if (action) {
      e.preventDefault();
      action(e);
    }
  };

  return {
    type: 'text',
    ref,
    'aria-controls': options.unstable_hiddenId,
    ...htmlProps,
    onMouseDown: useAllCallbacks(options.toggle, htmlProps.onMouseDown),
    onKeyDown: useAllCallbacks(onKeyDown, htmlProps.onKeyDown),
  };
};

export const useComboboxFlyout = (options, htmlProps = {}) => {
  useHidden(options, htmlProps);
  return {
    id: options.unstable_hiddenId,
  };
};
