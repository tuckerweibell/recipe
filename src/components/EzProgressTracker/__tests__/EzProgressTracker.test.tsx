import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import markdown from '../EzProgressTracker.md';
import EzProgressTracker from '../EzProgressTracker';
import regressionTests from './EzProgressTracker.test.md';
import EzLayout from '../../EzLayout';
import EzButton from '../../EzButton';

const scope = {EzProgressTracker, EzLayout, EzButton};

describe('EzProgressTracker', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});

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
