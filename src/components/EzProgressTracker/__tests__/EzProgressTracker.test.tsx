import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from '../EzProgressTracker.md';
import EzProgressTracker from '../EzProgressTracker';
import {renderToHtml} from '../../../jest-globals';
import EzLayout from '../../EzLayout';
import EzButton from '../../EzButton';

const scope = {EzProgressTracker, EzLayout, EzButton};

describe('EzProgressTracker', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzProgressTracker />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
