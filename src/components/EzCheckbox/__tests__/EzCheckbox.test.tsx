import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from '../EzCheckbox.md';
import EzCheckbox from '..';
import {renderToHtml} from '../../../jest-globals';

const scope = {EzCheckbox};

describe('EzCheckbox', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzCheckbox label="Basic checkbox" onChange={() => {}} checked />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
