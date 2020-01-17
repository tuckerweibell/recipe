import {css} from '@emotion/core';
import {themes} from '@ezcater/recipe';
import Measure from './Measure';

const {standard} = themes;

const nicifyName = name => {
  return name.replace(/([A-Z])/g, ' $1').replace(/(^[a-z])/, match => match.toUpperCase());
};

const Combination = ({font}) => {
  return (
    <Measure cssProperty="font-size">
      {([ref, measured]) => (
        <tr>
          <td>
            <span
              ref={ref}
              css={css`
                ${standard.fonts[font]};
              `}
            >
              {nicifyName(font)}
            </span>
          </td>
          <td>{measured}</td>
          <td>
            {
              Object.keys(standard.fontWeights).filter(
                weight => standard.fontWeights[weight] === standard.fonts[font].fontWeight
              )[0]
            }
          </td>
          <td>
            <code>{`theme.fonts.${font}`}</code>
          </td>
        </tr>
      )}
    </Measure>
  );
};

export default () => {
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
        {Object.keys(standard.fonts).map(font => (
          <Combination font={font} key={font} />
        ))}
      </tbody>
    </table>
  );
};
