import React from 'react';
import EzFormLayout from '../EzFormLayout';
import {EzField} from '../../';
import {axe} from 'jest-axe';

import {fullRender, renderToHtml} from '../../../jest-globals';

describe('EzFormLayout', () => {
  const SampleLayout = () => (
    <EzFormLayout>
      <EzField label="First field" />
      <EzField label="Second field" />
    </EzFormLayout>
  );

  it('should render with default styles', () => {
    const actual = fullRender(<SampleLayout />);
    expect(actual.baseElement).toMatchSnapshot();
  });

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<SampleLayout />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
