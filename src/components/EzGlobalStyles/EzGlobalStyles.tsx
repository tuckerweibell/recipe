import React from 'react';
import {Global, css} from '@emotion/core';

const EzGlobalStyles = () => (
  <Global
    styles={css`
      html {
        box-sizing: border-box;
        font-size: var(--recipe-alias-font-size-default);
        font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
      }
      body {
        margin: 0;
        color: var(--recipe-alias-text-color);
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
