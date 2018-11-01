import React from 'react';
import EzLayout from '../EzLayout';
import {axe} from 'jest-axe';

import {create, renderToHtml} from '../../../jest-globals';

describe('EzLayout', () => {
  it('should render with default styles', () => {
    const actual = create(
      <EzLayout layout="basic">
        <div>Content</div>
        <div>Content</div>
      </EzLayout>
    );
    expect(actual).toMatchSnapshot();
  });

  it('should render with right aligned content', () => {
    const actual = create(
      <EzLayout layout="right">
        <div>Content</div>
        <div>Content</div>
      </EzLayout>
    );
    expect(actual).toMatchSnapshot();
  });

  it('should render with equally sized content', () => {
    const actual = create(
      <EzLayout layout="equal">
        <div>Content</div>
        <div>Content</div>
      </EzLayout>
    );
    expect(actual).toMatchSnapshot();
  });

  it('should render with a split layout', () => {
    const actual = create(
      <EzLayout layout="split">
        <div>Content</div>
        <div>Content</div>
      </EzLayout>
    );
    expect(actual).toMatchSnapshot();
  });

  it('should render with a stacked layout', () => {
    const actual = create(
      <EzLayout layout="stack">
        <div>Content</div>
        <div>Content</div>
      </EzLayout>
    );
    expect(actual).toMatchSnapshot();
  });

  it('should render with a stacked layout on small screens, and equal layouts on larger screens', () => {
    const actual = create(
      <EzLayout layout={{base: 'stack', large: 'equal'}}>
        <div>Content</div>
        <div>Content</div>
      </EzLayout>
    );
    expect(actual).toMatchSnapshot();
  });

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(
      <EzLayout layout="basic">
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
      </EzLayout>
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
