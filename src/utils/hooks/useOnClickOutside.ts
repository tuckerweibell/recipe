import useEventListenerOutside from './useEventListenerOutside';

const useOnClickOutside = (handler, refs: React.RefObject<any>[]) => {
  useEventListenerOutside(handler, 'mousedown', refs);
  useEventListenerOutside(handler, 'touchstart', refs);
};

export default useOnClickOutside;
