import React from 'react';

const allSnapshots = require.context('../../src/components', true, /\.snapshot\.tsx$/);

export default function getSnapshot(componentName: string) {
  const file = allSnapshots
    .keys()
    .find(snapshotComponentName => snapshotComponentName.endsWith(`${componentName}.snapshot.tsx`));
  if (file) {
    const Component = allSnapshots(file).default;
    return <Component />;
  }

  return <div></div>;
}
