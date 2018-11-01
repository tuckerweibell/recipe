import React from 'react';
import copy from 'copy-to-clipboard';
import ActionButton from '../ActionButton';
import {withLive} from 'react-live';

export default withLive(({live: {code}}) => (
  <ActionButton onClick={() => copy(code)}>
    {({executing}) => (executing ? 'Code Copied' : 'Copy Code')}
  </ActionButton>
));
