import {createPopper, Instance, Options} from '@popperjs/core';
import {useRef, useMemo, useLayoutEffect} from 'react';

export default (options: Partial<Options> = {}) => {
  const referenceRef = useRef<HTMLElement>();
  const popperRef = useRef<HTMLElement>();
  const instanceRef = useRef<Instance>();

  const combinedOptions = useMemo(() => {
    const {modifiers = []} = options;
    return {
      ...options,
      modifiers: [...modifiers, {name: 'preventOverflow', options: {padding: 8}}],
    };
  }, [options]);

  useLayoutEffect(() => {
    const instance = createPopper(referenceRef.current, popperRef.current, combinedOptions);

    instanceRef.current = instance;

    return () => {
      instance.destroy();
    };
  }, [combinedOptions]);

  useLayoutEffect(() => {
    instanceRef.current.setOptions(combinedOptions);
    instanceRef.current.update();
  }, [combinedOptions]);

  return {
    reference: referenceRef,
    popper: popperRef,
    instance: instanceRef,
  };
};
