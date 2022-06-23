import React from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import {EzPageContent, EzContentGroup} from '..';

describe('EzPageContent', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzPageContent>
        <EzContentGroup>
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
        </EzContentGroup>
      </EzPageContent>
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
