import React from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import EzLabelledItem from '../EzLabelledItem';

describe('EzLabelledItem', () => {
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
