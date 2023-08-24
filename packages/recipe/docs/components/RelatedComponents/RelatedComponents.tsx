import React, {FC} from 'react';
import {EzLayout} from '../../../src';
import {LibraryItem} from '../ComponentLibrary';
import getSnapshot from '../../utils/getSnapshot';
import getCategory from '../../utils/getCategory';
import {RelatedComponentsProps} from './RelatedComponents.types';

const RelatedComponents: FC<RelatedComponentsProps> = ({components}) => (
  <EzLayout layout="tile">
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
