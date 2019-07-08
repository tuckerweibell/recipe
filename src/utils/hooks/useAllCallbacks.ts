import React from 'react';

type AnyFunction = (...args: any[]) => any;
type AnyFunctionOrEmpty = AnyFunction | null | undefined;

export default function useAllCallbacks(...callbacks: AnyFunctionOrEmpty[]) {
  return React.useCallback((...args: any[]) => {
    const fns = callbacks.filter(Boolean) as AnyFunction[];
    fns.forEach(callback => callback(...args));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, callbacks);
}
