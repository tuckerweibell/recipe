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

const scope = {EzLayout, EzCard, EzCardSection, EzHeading, Media, css, Global};

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
});
