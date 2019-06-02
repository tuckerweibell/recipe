import React from 'react';
import {Global, css} from '@emotion/core';

export default () => (
  <Global
    styles={css`
      :root {
        --recipe-base-font-size: 14;
      }
    `}
  />
);
