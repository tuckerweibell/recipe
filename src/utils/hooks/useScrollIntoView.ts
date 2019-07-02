import {useEffect} from 'react';

const useScrollIntoView = ({containerRef, targetRef}, dependencies) => {
  useEffect(() => {
    const container = containerRef.current;
    const target = targetRef.current;

    if (!container || !target) return;

    if (container.scrollHeight > container.clientHeight) {
      const scrollBottom = container.clientHeight + container.scrollTop;
      const targetBottom = target.offsetTop + target.offsetHeight;

      if (targetBottom > scrollBottom) container.scrollTop = targetBottom - container.clientHeight;

      if (target.offsetTop < container.scrollTop) container.scrollTop = target.offsetTop;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, targetRef, ...dependencies]);
};

export default useScrollIntoView;
