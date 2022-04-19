import React from 'react';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import markdown from '../EzLabel.md';
import EzLabel from '../EzLabel';
import {EzSearchInput} from '../..';

const scope = {EzLabel, EzSearchInput};

describe('EzLabel', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzLabel htmlFor="foo" use="primary">
        Primary label
        <input id="foo" placeholder="Some text" />
      </EzLabel>
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
