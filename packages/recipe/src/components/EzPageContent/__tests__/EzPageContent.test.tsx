import React from 'react';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import markdown from '../EzPageContent.md';
import {EzPageContent, EzContentGroup} from '..';
import {EzCard, EzSegmentedControl} from '../../index';

const scope = {EzPageContent, EzCard, EzContentGroup, EzSegmentedControl};

describe('EzPageContent', () => {
  visualSnapshots({markdown, scope});

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
