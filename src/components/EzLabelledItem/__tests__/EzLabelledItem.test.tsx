import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import markdown from '../EzLabelledItem.md';
import EzLabelledItem from '../EzLabelledItem';
import {EzSearchInput} from '../..';

const scope = {EzLabelledItem, EzSearchInput};

describe('EzLabelledItem', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzLabelledItem position="top" title="Top Label">
        Some text
      </EzLabelledItem>
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
