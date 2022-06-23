import React from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import EzRadioButton from '../EzRadioButton';

describe('EzRadioButton', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(<EzRadioButton label="Choice A" onChange={() => {}} checked />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
