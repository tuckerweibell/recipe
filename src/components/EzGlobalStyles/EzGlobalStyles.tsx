import React from 'react';
import {Global, css} from '@emotion/core';
import {standard as theme} from '../../themes';

export {default as EzBanner} from '../EzBanner';

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
