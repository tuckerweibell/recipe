import {mergeIds} from './hooks/useUniqueId';

interface Props {
  [key: string]: any;
}

function chain(...callbacks: any[]): (...args: any[]) => void {
  return (...args: any[]) => {
    const fns = callbacks.filter(Boolean) as ((...args: any[]) => any)[];
    fns.forEach(callback => callback(...args));
  };
}

function mergePropsInner<T extends Props, U extends Props>(a: T, b: U): T & U {
  const res: Props = {};

  Object.keys(a).forEach(key => {
    // Chain events
    if (/^on[A-Z]/.test(key) && typeof a[key] === 'function' && typeof b[key] === 'function') {
      res[key] = chain(a[key], b[key]);
      return;
    }
    // If props both have an ID, we need to merge them (in order to use the same ID everywhere)
    if (key === 'id' && a.id && b.id) {
      res.id = mergeIds(a.id, b.id);
      return;
    }
    // Override others
    res[key] = b[key] ?? a[key];
  });

  // Add props from b that are not in a
  Object.keys(b)
    .filter(key => !(key in a))
    .forEach(key => {
      res[key] = b[key];
    });

  return res as T & U;
}

export function mergeProps<T extends Props, U extends Props>(a: T, b: U): T & U;
export function mergeProps<T extends Props, U extends Props, V extends Props>(
  a: T,
  b: U,
  c: V
): T & U & V;
export function mergeProps<T extends Props, U extends Props, V extends Props, W extends Props>(
  a: T,
  b: U,
  c: V,
  d: W
): T & U & V & W;
export function mergeProps<T extends Props[]>(...args: T): any {
  return args.reduce((left, right) => mergePropsInner(left, right));
}
