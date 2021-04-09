import React from 'react';
import {Global, css} from '../../styles';

export default () => (
  <Global
    styles={css`
      :root {
        --recipe-compat-font-size: 14px;
      }
    `}
  />
);
