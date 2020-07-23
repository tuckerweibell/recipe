import {useOnClickOutside, useEventListenerOutside} from '../../utils/hooks';

export function useCloseOnBlur(options): void {
  const onBlur = () => options.shouldCloseOnBlur && options.onClose();
  useOnClickOutside(onBlur, options.refs);
  useEventListenerOutside(onBlur, 'focusin', options.refs);
}
