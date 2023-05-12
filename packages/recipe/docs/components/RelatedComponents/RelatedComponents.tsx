import React, {FC} from 'react';
import {EzLayout} from '../../../src';
import {LibraryItem} from '../ComponentLibrary';
import getSnapshot from '../ComponentLibrary/getSnapshot';
import getCategory from '../ComponentLibrary/getCategory';
import {RelatedComponentsProps} from './RelatedComponents.types';

const RelatedComponents: FC<RelatedComponentsProps> = ({components}) => (
  <EzLayout>
    {components.map(component => (
      <LibraryItem
        key={component}
        name={component}
        link={`${getCategory(component)}/${component}`}
        snapshot={getSnapshot(component)}
      />
    ))}
  </EzLayout>
);

export default RelatedComponents;
