import React from 'react';
import {Global} from '../../styles';

export {default as EzBanner} from '../EzBanner';

// cheat for syntax highlighting
const css = (...args): string => args[0];

export default () => (
  <Global
    styles={css`
      html {
        box-sizing: border-box;
        font-size: 14px;
        font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
      }
      body {
        margin: 0;
        color: #565a5c;
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
