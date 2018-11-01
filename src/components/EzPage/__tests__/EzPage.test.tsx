import React from 'react';
import {EzPage, EzPageSection} from '..';
import {axe} from 'jest-axe';

import {create, renderToHtml} from '../../../jest-globals';

describe('EzPage', () => {
  it('should render with default styles', () => {
    const actual = create(
      <EzPage>
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum dolor</p>
      </EzPage>
    );
    expect(actual).toMatchSnapshot();
  });

  it('should render EzPageSection with left sidebar styles', () => {
    const actual = create(
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
    expect(actual).toMatchSnapshot();
  });

  it('should render EzPageSection content with right sidebar styles', () => {
    const actual = create(
      <EzPage>
        <EzPageSection use="main">
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
        </EzPageSection>
        <EzPageSection use="aside">
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
        </EzPageSection>
      </EzPage>
    );
    expect(actual).toMatchSnapshot();
  });

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
