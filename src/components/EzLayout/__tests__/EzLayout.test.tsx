import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {Global, css} from '@emotion/core';
import markdown from '../EzLayout.md';
import regressionTests from './EzLayout.test.md';
import EzLayout from '../EzLayout';
import {EzCard, EzCardSection, EzHeading} from '../../index';
import {renderToHtml} from '../../../jest-globals';
import Media from '../../EzField/Media';
import Placeholder from '../../../../doc-site/src/components/Placeholder';

const scope = {EzLayout, EzCard, EzCardSection, EzHeading, Media, css, Global, Placeholder};

describe('EzLayout', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});

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
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
