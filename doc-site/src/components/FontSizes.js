/** @jsx jsx */
import {jsx} from '@emotion/core';
import { createRef } from 'react';
import {themes, EzTable} from '@ezcater/recipe';
import {useMeasure} from './Measure';

const {standard} = themes;

const Example = ({item: {variable, ref}}) => (
  <span
    ref={ref}
    css={{fontSize: standard.fontSizes[variable], lineHeight: 1}}
    >
    Order catering now
  </span>
);

const Size = ({item: {ref}}) => {
  const size = useMeasure(ref, 'font-size');
  return <span>{size}</span>
};

export default () => (
  <EzTable
    columns={[
      {heading: 'Example', component: Example},
      {heading: 'Variable', key: 'variable'},
      {heading: 'Size', component: Size},
    ]}
    items={Object.keys(standard.fontSizes).map(variable => ({
      variable,
      ref: createRef(),
    }))}
  />
);
