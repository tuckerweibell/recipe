import React from 'react';
import {EzPageContent, EzContentGroup} from '../';

describe('EzPageContent', () => {
  it('should render with default styles', () => {
    const actual = create(
      <EzPageContent>
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum dolor</p>
      </EzPageContent>
    );
    expect(actual).toMatchSnapshot();
  });

  it('should render EzContentGroup with default styles', () => {
    const actual = create(
      <EzPageContent>
        <EzContentGroup>
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
        </EzContentGroup>
      </EzPageContent>
    );
    expect(actual).toMatchSnapshot();
  });

  it('should render EzContentGroup content with horizontal styles', () => {
    const actual = create(
      <EzPageContent>
        <EzContentGroup horizontal>
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
        </EzContentGroup>
      </EzPageContent>
    );
    expect(actual).toMatchSnapshot();
  });

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
