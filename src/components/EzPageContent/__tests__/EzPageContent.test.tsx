import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from '../EzPageContent.md';
import {EzPageContent, EzContentGroup} from '..';
import {renderToHtml} from '../../../jest-globals';
import {EzCard, EzSegmentedControl} from '../../index';

const scope = {EzPageContent, EzCard, EzContentGroup, EzSegmentedControl};

describe('EzPageContent', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(
      <EzPageContent>
        <EzContentGroup>
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
        </EzContentGroup>
      </EzPageContent>
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
