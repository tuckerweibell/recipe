import {useOnClickOutside, useOnFocusOutside} from '../../utils/hooks';

export function useCloseOnBlur(options): void {
  const onBlur = () => options.shouldCloseOnBlur && options.onClose();
  useOnClickOutside(onBlur, options.refs);
  useOnFocusOutside(onBlur, options.refs);
}
