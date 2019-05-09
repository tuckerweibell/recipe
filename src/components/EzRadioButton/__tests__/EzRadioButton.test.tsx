import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import regressionTests from './EzRadioButton.test.md';
import EzRadioButton from '../EzRadioButton';
import {renderToHtml} from '../../../jest-globals';

const scope = {EzRadioButton};

describe('EzRadioButton', () => {
  visualSnapshots({markdown: regressionTests, scope});

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzRadioButton label="Choice A" onChange={() => {}} checked />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
