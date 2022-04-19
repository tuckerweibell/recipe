export type Collection = {
  items: any;
  index: Map<any, any>;
};

export function createCollection(items: any[]): Collection {
  const grouped = new Map();
  const keyMap = new Map();

  if (!items.some(o => o.group)) {
    return {
      items: items.map((item, index) => {
        keyMap.set(index, {...item, key: index});
        return keyMap.get(index);
      }),
      index: keyMap,
    };
  }

  // sort into groups
  items.forEach(item => {
    const {group} = item;
    const values = grouped.get(group) || [];
    values.push({...item});
    grouped.set(group, values);
  });

  let i = 0;
  // now assign index
  [...grouped].forEach(([, group]) => {
    group.forEach(item => {
      keyMap.set(i, item);
      Object.assign(item, {key: i});
      i++;
    });
  });

  return {items: [...grouped], index: keyMap};
}
