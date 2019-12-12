import React from 'react';
import {css} from 'react-emotion';
import {themes} from '@ezcater/recipe';
import Measure from './Measure';

const {standard} = themes;

export default () => {
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
            <Measure cssProperty="font-size" key={key}>
              {([ref, measured]) => (
                <tr
                  className={css`
                    line-height: 1;
                  `}
                  key={key}
                >
                  <td>{key}</td>
                  <td>{measured}</td>
                  <td
                    ref={ref}
                    className={css`
                      font-size: ${standard.fontSizes[key]};
                    `}
                  >
                    Order catering now
                  </td>
                </tr>
              )}
            </Measure>
          );
        })}
      </tbody>
    </table>
  );
};
