import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from '../EzSearchInput.md';
import EzSearchInput from '../EzSearchInput';
import {renderToHtml} from '../../../jest-globals';

const scope = {EzSearchInput};

describe('EzSearchInput', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(
      <EzSearchInput placeholder="Search" aria-label="Search customers" />
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
