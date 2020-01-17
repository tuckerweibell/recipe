/** @jsx jsx */
import {jsx, css} from '@emotion/core';
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
                  css={css`
                    line-height: 1;
                  `}
                  key={key}
                >
                  <td>{key}</td>
                  <td>{measured}</td>
                  <td
                    ref={ref}
                    css={css`
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
