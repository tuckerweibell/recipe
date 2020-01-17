/** @jsx jsx */
import {useState} from 'react';
import {jsx, css} from '@emotion/core';
import {EzLabelledItem, themes} from '@ezcater/recipe';

const {standard} = themes;

const loremipsum =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default props => {
  const [lengthOfDemoString, setLengthOfDemoString] = useState(19);

  const minDemoStringLength = 5;
  const maxDemoStringLength = loremipsum.split(' ').length;

  return (
    <div>
      <div css={{margin: '1em 0'}}>
        <EzLabelledItem position="left" size="normal" title="Length of demo string:">
          <input
            type="range"
            min={minDemoStringLength}
            max={maxDemoStringLength}
            value={lengthOfDemoString}
            onChange={e => setLengthOfDemoString(e.target.value)}
            className={css`
              vertical-align: middle;
            `}
          />
        </EzLabelledItem>
      </div>
      {Object.keys(standard.fonts).map(font => (
        <div css={{margin: `${standard.spacing.md} 0`}}>
          <code>{`theme.fonts.${font}`}</code>
          <p
            css={css`
              ${standard.fonts[font]};
              &:hover {
                span {
                  color: ${standard.colors.blues[700]};
                  background-color: ${standard.colors.blues[400]};
                }
                background-color: ${standard.colors.blues[200]};
              }
            `}
          >
            <span>
              {loremipsum
                .split(' ')
                .slice(0, lengthOfDemoString)
                .join(' ')}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};
