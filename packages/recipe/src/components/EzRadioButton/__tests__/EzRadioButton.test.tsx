import React from 'react';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import regressionTests from './EzRadioButton.test.md';
import EzRadioButton from '../EzRadioButton';

const scope = {EzRadioButton};

describe('EzRadioButton', () => {
  visualSnapshots({markdown: regressionTests, scope});

  it('should meet accessibility guidelines', async () => {
    const {container} = render(<EzRadioButton label="Choice A" onChange={() => {}} checked />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
