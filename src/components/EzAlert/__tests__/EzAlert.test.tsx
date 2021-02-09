import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import EzAlert from '../EzAlert';
import markdown from '../EzAlert.md';
import regressionTests from './EzAlert.test.md';
import {EzCard} from '../../index';

const scope = {EzAlert, EzCard};

describe('EzAlert', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});

  it('should meet accessibility guidelines for buttons', async () => {
    const {container} = render(<EzAlert headline="Header" use="info" />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
