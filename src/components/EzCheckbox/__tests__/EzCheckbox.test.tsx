import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import markdown from '../EzCheckbox.md';
import EzCheckbox from '..';
import EzLink from '../../EzLink';

const scope = {EzCheckbox, EzLink};

describe('EzCheckbox', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const {container} = render(<EzCheckbox label="Basic checkbox" onChange={() => {}} checked />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
