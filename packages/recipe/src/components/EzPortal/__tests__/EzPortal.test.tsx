import React from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import EzPortal from '../EzPortal';

describe('EzPortal', () => {
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
