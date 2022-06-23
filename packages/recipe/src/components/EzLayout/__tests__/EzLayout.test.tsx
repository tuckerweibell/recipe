import React from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import EzLayout from '../EzLayout';

describe('EzLayout', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzLayout layout="basic">
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
      </EzLayout>
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        defaultLayout: (
          <EzLayout>
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        basicLayout: (
          <EzLayout layout="basic">
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        tileLayout: (
          <EzLayout layout="tile" columns={3}>
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        tileLayoutResponsiveColumns: (
          <EzLayout layout="tile" columns={{base: 1, medium: 3}}>
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        basicResponsiveLayout: (
          <EzLayout layout={{base: 'basic', medium: 'stack'}}>
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        tileResponsiveLayout: (
          <EzLayout layout={{base: 'basic', medium: 'tile'}} columns={3}>
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        layoutAlignX: (
          <EzLayout layout="cluster" alignX="left">
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        layoutAlignY: (
          <EzLayout layout="cluster" alignY="top">
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        responsiveLayoutAlignX: (
          <EzLayout layout={{base: 'basic', medium: 'cluster'}} alignX="left">
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        responsiveLayoutAlignY: (
          <EzLayout layout={{base: 'basic', medium: 'cluster'}} alignY="top">
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        responsiveAlignX: (
          <EzLayout layout="cluster" alignX={{base: 'left', medium: 'center'}}>
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
        responsiveLayoutResponsiveAlignX: (
          <EzLayout
            layout={{base: 'basic', medium: 'cluster'}}
            alignX={{base: 'left', medium: 'center'}}
          >
            <div>Content</div>
            <div>Content</div>
          </EzLayout>
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
