import React from 'react';
import {visualSnapshots} from 'sosia';
import markdown from '../EzStatus.md';
import {EzStatus} from '../../index';
import EzLayout from '../../EzLayout';

const scope = {EzStatus, EzLayout};

describe('EzStatus', () => {
  visualSnapshots({markdown, scope});

  it('should pass type checking', () => {
    [
      {
        textProp: <EzStatus text="status text" use="informational" />,
        useProp: <EzStatus text="success" use="success" />,
        sizeProp: <EzStatus text="error text" use="error" size="small" />,
        domProps: (
          <EzStatus
            // required props
            text="success"
            use="success"
            // can pass arbitrary data-* attributes
            data-custom-tag="foo-bar"
            // can pass boolean data-* attributes
            data-bool
            // can pass aria-* attributes
            aria-describedby="#description"
            // can pass html attributes
            hidden
            // can forward ref
            ref={React.createRef()}
          />
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
