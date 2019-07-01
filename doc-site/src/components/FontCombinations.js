import React from 'react';
import {css} from 'react-emotion';
import {themes} from '@ezcater/recipe';

const {standard} = themes;

function remToPx(rem) {
  return rem.replace('rem', '') * standard.baseFontSize.replace('px', '') + 'px';
}

const nicifyName = name => {
  return name.replace(/([A-Z])/g, ' $1').replace(/(^[a-z])/, match => match.toUpperCase());
};

const Combination = ({font}) => {
  return (
    <tr key={font}>
      <td>
        <span
          className={css`
            ${standard.fonts[font]};
          `}
        >
          {nicifyName(font)}
        </span>
      </td>
      <td>{remToPx(standard.fonts[font].fontSize)}</td>
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
        {Object.keys(standard.fonts).map(font => (
          <Combination font={font} />
        ))}
      </tbody>
    </table>
  );
};
