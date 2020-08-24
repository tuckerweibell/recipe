import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from '../EzProgressTracker.md';
import EzProgressTracker from '../EzProgressTracker';
import regressionTests from './EzProgressTracker.test.md';
import {renderToHtml} from '../../../jest-globals';
import EzLayout from '../../EzLayout';
import EzButton from '../../EzButton';

const scope = {EzProgressTracker, EzLayout, EzButton};

describe('EzProgressTracker', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(
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
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
