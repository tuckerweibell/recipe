import React from 'react';
import {css} from 'react-emotion';
import {themes} from '@ezcater/recipe';

const {standard} = themes;

function remToPx(rem) {
  return rem.replace('rem', '') * standard.baseFontSize.replace('px', '') + 'px';
}

export default props => {
  return (
    <table>
      <thead>
        <tr>
          <td>Variable</td>
          <td>Size</td>
          <td>Example</td>
        </tr>
      </thead>
      <tbody>
        {Object.keys(standard.fontSizes).map(key => {
          return (
            <tr
              className={css`
                line-height: 1;
              `}
              key={key}
            >
              <td>{key}</td>
              <td>{remToPx(standard.fontSizes[key])}</td>
              <td
                className={css`
                  font-size: ${standard.fontSizes[key]};
                `}
              >
                Order catering now
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
