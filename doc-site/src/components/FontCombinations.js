import {css} from '@emotion/core';
import {createRef} from 'react';
import {themes, EzTable} from '@ezcater/recipe';
import {useMeasure} from './Measure';

const {standard} = themes;

const nicifyName = name => {
  return name.replace(/([A-Z])/g, ' $1').replace(/(^[a-z])/, match => match.toUpperCase());
};

const Example = ({item: {font, ref}}) => (
  <span
    ref={ref}
    css={css`
      ${standard.fonts[font]};
    `}
    >
    {nicifyName(font)}
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
      {heading: 'Size', component: Size},
      {heading: 'Weight', key: 'weight'},
      {heading: 'Usage', key: 'usage'},
    ]}
    items={Object.keys(standard.fonts).map(font => ({
      font,
      ref: createRef(),
      name: nicifyName(font),
      weight: Object.keys(standard.fontWeights).find(weight =>  standard.fontWeights[weight] === standard.fonts[font].fontWeight),
      usage: `theme.fonts.${font}`
    }))}
  />
);
