import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import markdown from '../EzFormLayout.md';
import EzFormLayout from '../EzFormLayout';
import {EzField, EzLayout} from '../..';

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
    const {container} = render(<SampleLayout />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
