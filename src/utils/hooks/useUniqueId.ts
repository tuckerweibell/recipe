import {useState, useEffect} from 'react';

const map: Map<string, (v: string) => void> = new Map();

const getUniqueId = (() => {
  let index = 1;
  return () => `control__${index++}`;
})();

const useUniqueId = (): string => {
  const [id, setId] = useState(getUniqueId());

  map.set(id, setId);

  useEffect(() => () => map.delete(id), [id]);

  return id;
};

export function mergeIds(a: string, b: string): string {
  if (a === b) return a;

  const setA = map.get(a);
  if (setA) {
    setA(b);
    return b;
  }

  const setB = map.get(b);
  if (setB) {
    setB(a);
    return a;
  }

  return b;
}

export default useUniqueId;
