import React from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import EzCheckbox from '..';

describe('EzCheckbox', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(<EzCheckbox label="Basic checkbox" onChange={() => {}} checked />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
