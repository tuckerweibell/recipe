import React from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import EzSearchInput from '../EzSearchInput';

describe('EzSearchInput', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzSearchInput placeholder="Search" aria-label="Search customers" />
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        domProps: (
          <EzSearchInput
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
