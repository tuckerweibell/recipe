import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {Global, css} from '@emotion/core';
import markdown from '../EzLayout.md';
import EzLayout from '../EzLayout';
import {EzCard, EzCardSection} from '../../index';
import {renderToHtml} from '../../../jest-globals';

const scope = {EzLayout, EzCard, EzCardSection, css, Global};

describe('EzLayout', () => {
  visualSnapshots({markdown, scope});

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
