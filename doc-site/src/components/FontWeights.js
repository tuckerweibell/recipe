/** @jsx jsx */
import {jsx} from '@emotion/core';
import {themes, EzTable} from '@ezcater/recipe';

const {standard} = themes;

const Example = ({item: {variable}}) => (
  <span css={{fontWeight: standard.fontWeights[variable]}}>
    Order catering now
  </span>
);

export default () => (
  <EzTable
    columns={[
      {heading: 'Example', component: Example},
      {heading: 'Variable', key: 'variable'},
      {heading: 'Weight', key: 'weight'},
    ]}
    items={Object.keys(standard.fontWeights).map(variable => ({
      variable,
      weight: standard.fontWeights[variable]
    }))}
  />
);