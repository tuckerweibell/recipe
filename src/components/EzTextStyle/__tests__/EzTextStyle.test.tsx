import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import markdown from '../EzTextStyle.md';
import regressionTests from './EzTextStyle.test.md';
import EzTextStyle from '../EzTextStyle';
import Media from '../../EzField/Media';

const scope = {EzTextStyle, Media};

describe('EzTextStyle', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});

  it('should meet accessibility guidelines', async () => {
    const {container} = render(<EzTextStyle use="strong">Strong Text</EzTextStyle>);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
