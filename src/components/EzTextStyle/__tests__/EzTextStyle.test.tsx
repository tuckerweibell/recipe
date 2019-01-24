import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from '../EzTextStyle.md';
import EzTextStyle from '../EzTextStyle';
import {renderToHtml} from '../../../jest-globals';

const scope = {EzTextStyle};

describe('EzTextStyle', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzTextStyle use="strong">Strong Text</EzTextStyle>);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
