import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from '../EzFormLayout.md';
import EzFormLayout from '../EzFormLayout';
import {EzField, EzLayout} from '../../';
import {renderToHtml} from '../../../jest-globals';

const scope = {EzField, EzLayout, EzFormLayout};

describe('EzFormLayout', () => {
  visualSnapshots({markdown, scope});

  const SampleLayout = () => (
    <EzFormLayout>
      <EzField label="First field" />
      <EzField label="Second field" />
    </EzFormLayout>
  );

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<SampleLayout />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
