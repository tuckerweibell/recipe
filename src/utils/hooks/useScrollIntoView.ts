import {useEffect} from 'react';

/**
 * Scrolls the container so that the provided target is visible.
 * If no target is provided, the container will be scrolled to the top.
 * */
const useScrollIntoView = ({containerRef, targetRef}, dependencies) => {
  useEffect(() => {
    const container = containerRef.current;
    const target = targetRef.current;

    if (!container) return;

    if (container.scrollHeight > container.clientHeight) {
      const scrollBottom = container.clientHeight + container.scrollTop;
      const targetTop = target ? target.offsetTop : 0;
      const targetBottom = target ? target.offsetTop + target.offsetHeight : 0;

      if (targetBottom > scrollBottom) container.scrollTop = targetBottom - container.clientHeight;

      if (targetTop < container.scrollTop) container.scrollTop = targetTop;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, targetRef, ...dependencies]);
};

export default useScrollIntoView;
