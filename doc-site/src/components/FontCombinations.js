import React from 'react';
import {css} from 'react-emotion';
import {standard} from '../../../recipe/src/themes';

function remToPx(rem) {
  return rem.replace('rem', '') * standard.baseFontSize.replace('px', '') + 'px';
}

const Combination = props => {
  return (
    <tr
      className={css`
        line-height: 1;
      `}
    >
      <td
        className={css`
          font-size: ${standard.fontSizes[props.size]};
          font-weight: ${standard.fontWeights[props.weight]};
        `}
      >
        {props.usage}
      </td>
      <td>{remToPx(standard.fontSizes[props.size])}</td>
      <td>{props.weight}</td>
      <td>
        <code>
          theme.fontSizes[{props.size}], theme.fontWeights.{props.weight}
        </code>
      </td>
    </tr>
  );
};

export default props => {
  return (
    <table>
      <thead>
        <tr>
          <td>Example</td>
          <td>Size</td>
          <td>Weight</td>
          <td>Usage</td>
        </tr>
      </thead>
      <tbody>
        <Combination usage="Page titles" size="700" weight="normal" />
        <Combination usage="On-page headings" size="600" weight="normal" />
        <Combination usage="Container headings" size="500" weight="bold" />
        <Combination usage="Navigation / tabs" size="400" weight="normal" />
        <Combination usage="Labels" size="300" weight="bold" />
        <Combination usage="Body text" size="300" weight="normal" />
        <Combination usage="Small stuff" size="200" weight="normal" />
        <Combination usage="STATUSES" size="100" weight="normal" />
      </tbody>
    </table>
  );
};
