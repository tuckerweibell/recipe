import {HTMLAttributes} from 'react';

interface Options {
  /**
   * A Set of other property names that should be included in the filter.
   */
  propNames?: Set<string>;
}

const propRe = /^((data|aria)-.*)$/;

/**
 * Filters out all props that aren't valid DOM props or defined via override prop obj.
 * @param props - The component props to be filtered.
 * @param opts - Props to override.
 */
export function filterDOMProps<TElement>(props: any, opts?: Options): HTMLAttributes<TElement> {
  const filteredProps: HTMLAttributes<TElement> = {};

  Object.keys(props)
    .filter(prop => opts?.propNames?.has(prop) || propRe.test(prop))
    .forEach(prop => {
      filteredProps[prop] = props[prop];
    });

  return filteredProps;
}
