import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import markdown from '../EzSearchInput.md';
import EzSearchInput from '../EzSearchInput';

const scope = {EzSearchInput};

describe('EzSearchInput', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzSearchInput placeholder="Search" aria-label="Search customers" />
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
