import React from 'react';
import {EzStatus} from '../../index';

describe('EzStatus', () => {
  const icon = (
    <svg>
      <circle cx="50%" cy="50%" r="30%" fillRule="evenodd" />
    </svg>
  );

  it('should pass type checking', () => {
    [
      {
        textProp: <EzStatus text="status text" use="informational" />,
        useProp: <EzStatus text="success" use="success" />,
        sizeProp: <EzStatus text="error text" use="error" size="small" />,
        iconProp: <EzStatus text="error text" use="error" size="small" icon={icon} />,
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
