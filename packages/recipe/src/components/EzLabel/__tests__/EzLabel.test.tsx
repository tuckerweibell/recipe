import React from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import EzLabel from '../EzLabel';

describe('EzLabel', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzLabel htmlFor="foo" use="primary">
        Primary label
        <input id="foo" placeholder="Some text" />
      </EzLabel>
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
