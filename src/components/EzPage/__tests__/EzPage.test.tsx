import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from '../EzPage.md';
import {EzPage, EzPageSection} from '..';
import {renderToHtml} from '../../../jest-globals';
import {EzCard, EzHeading} from '../../index';

const scope = {EzPage, EzPageSection, EzCard, EzHeading};

describe('EzPage', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(
      <EzPage>
        <EzPageSection use="aside">
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
        </EzPageSection>
        <EzPageSection use="main">
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
        </EzPageSection>
      </EzPage>
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
