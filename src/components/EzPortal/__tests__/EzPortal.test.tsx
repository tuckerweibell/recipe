import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import markdown from '../EzPortal.md';
import EzPortal from '../EzPortal';

const scope = {EzPortal};

describe('EzPortal', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzPortal>
        <div>Stuff goes here</div>
      </EzPortal>
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
