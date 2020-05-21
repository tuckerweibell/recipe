import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from '../EzTextStyle.md';
import regressionTests from './EzTextStyle.test.md';
import EzTextStyle from '../EzTextStyle';
import Media from '../../EzField/Media';
import {renderToHtml} from '../../../jest-globals';

const scope = {EzTextStyle, Media};

describe('EzTextStyle', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzTextStyle use="strong">Strong Text</EzTextStyle>);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
