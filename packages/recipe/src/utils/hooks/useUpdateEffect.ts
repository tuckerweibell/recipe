import React from 'react';

export default function useUpdateEffect(effect: React.EffectCallback, deps?: any[] | undefined) {
  const mounted = React.useRef(false);
  React.useEffect(() => {
    if (mounted.current) return effect();
    mounted.current = true;
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
