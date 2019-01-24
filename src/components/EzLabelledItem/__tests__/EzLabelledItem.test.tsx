import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from '../EzLabelledItem.md';
import EzLabelledItem from '../EzLabelledItem';
import {renderToHtml} from '../../../jest-globals';

const scope = {EzLabelledItem};

describe('EzLabelledItem', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(
      <EzLabelledItem position="top" title="Top Label">
        Some text
      </EzLabelledItem>
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
