import React from 'react';
import {standard as theme} from '../../themes';
import {Global} from '../../styles';

export {default as EzBanner} from '../EzBanner';

// cheat for syntax highlighting and minimized css by leaning on babel-plugin-emotion
function css(...args) {
  return args.join('').replace(/label:\s*([^\s;\n{]+)\s*;/g, '');
}

const EzGlobalStyles = () => (
  <Global
    styles={css`
      html {
        box-sizing: border-box;
        font-size: ${theme.baseFontSize};
        font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
      }
      body {
        margin: 0;
        color: ${theme.colors.text.base};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
    `}
  />
);

export default EzGlobalStyles;
