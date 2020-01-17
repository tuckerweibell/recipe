/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import {themes} from '@ezcater/recipe';

const {standard} = themes;

export default props => {
  return (
    <table>
      <thead>
        <tr>
          <td>Variable</td>
          <td>Weight</td>
          <td>Example</td>
        </tr>
      </thead>
      <tbody>
        {Object.keys(standard.fontWeights).map(key => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{standard.fontWeights[key]}</td>
              <td
                css={css`
                  font-weight: ${standard.fontWeights[key]};
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
