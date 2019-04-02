import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import EzAlert from '../EzAlert';
import markdown from '../EzAlert.md';
import {EzCard} from '../../index';
import {renderToHtml} from '../../../jest-globals';

const scope = {EzAlert, EzCard};

describe('EzAlert', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines for buttons', async () => {
    const wrapper = renderToHtml(<EzAlert headline="Header" use="info" />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
