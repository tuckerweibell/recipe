import {useOnClickOutside, useOnFocusOutside} from '../../utils/hooks';

export function useCloseOnBlur(options): void {
  const onBlur = () => {
    if (options.shouldCloseOnBlur && options.onClose) options.onClose();
  };
  useOnClickOutside(onBlur, options.refs);
  useOnFocusOutside(onBlur, options.refs);
}
