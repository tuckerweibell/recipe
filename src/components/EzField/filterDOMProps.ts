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
export function filterDOMProps<TElement, T extends object>(
  props: T,
  opts: Options = {}
): HTMLAttributes<TElement> {
  const {propNames} = opts;
  const filteredProps: HTMLAttributes<TElement> = {};

  Object.keys(props)
    .filter(prop => propNames?.has(prop) || propRe.test(prop))
    .forEach(prop => {
      filteredProps[prop] = props[prop];
    });

  return filteredProps;
}
