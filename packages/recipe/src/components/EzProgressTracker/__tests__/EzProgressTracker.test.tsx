import React from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import EzProgressTracker from '../EzProgressTracker';

describe('EzProgressTracker', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzProgressTracker
        steps={[
          {label: 'Catering Menu'},
          {label: 'Delivery Capcity & Hours'},
          {label: 'Delivery Range & Fees'},
          {label: 'Order Lead Time'},
          {label: 'Payment Information'},
        ]}
      />
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
