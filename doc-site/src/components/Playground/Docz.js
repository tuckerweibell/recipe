import React from 'react';
import Theme from 'docz-theme-default';
import {StyleSheetManager} from 'styled-components';
import Playground from '.';

const isSSR = typeof document === 'undefined';

export default ({code, scope}) =>
  isSSR ? (
    <Theme>
      <Playground code={code} scope={scope} />
    </Theme>
  ) : (
    <StyleSheetManager target={document.createElement('div')}>
      <Theme>
        <StyleSheetManager target={document.head}>
          <Playground code={code} scope={scope} />
        </StyleSheetManager>
      </Theme>
    </StyleSheetManager>
  );
