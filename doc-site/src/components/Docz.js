import React from 'react';
import Theme from 'docz-theme-default';
import {StyleSheetManager} from 'styled-components';
import {injectGlobal} from 'react-emotion';
import Playground from './Playground';

injectGlobal`
  @import url('https://unpkg.com/codemirror@5.42.0/lib/codemirror.css'); @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600'); @import url('https://fonts.googleapis.com/css?family=Inconsolata');
  .with-overlay{overflow:hidden;} html,body,#root{height:100%;min-height:100%;}
`;

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
