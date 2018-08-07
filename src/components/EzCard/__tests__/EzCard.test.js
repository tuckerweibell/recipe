import React from 'react';
import {EzCard, EzCardSection} from '../';

describe('EzCard', () => {
  it('should render with default styles', () => {
    const actual = create(
      <EzCard>
        <p>Lorem ipsum dolor</p>
      </EzCard>
    );
    expect(actual).toMatchSnapshot();
  });

  it('should render with header styles', () => {
    const actual = create(
      <EzCard title="Card Heading">
        <p>Lorem ipsum dolor</p>
      </EzCard>
    );
    expect(actual).toMatchSnapshot();
  });

  it('should render with header and subheader styles', () => {
    const actual = create(
      <EzCard title="Card Heading" subtitle="Card Subheading">
        <p>Lorem ipsum dolor</p>
      </EzCard>
    );
    expect(actual).toMatchSnapshot();
  });

  it('should render with card sections', () => {
    const actual = create(
      <EzCard>
        <EzCardSection>Lorem ipsum dolor</EzCardSection>
        <EzCardSection>Lorem ipsum dolor</EzCardSection>
      </EzCard>
    );
    expect(actual).toMatchSnapshot();
  });

  it('should render card sections horizontally', () => {
    const actual = create(
      <EzCard horizontal>
        <EzCardSection>Lorem ipsum dolor</EzCardSection>
        <EzCardSection>Lorem ipsum dolor</EzCardSection>
      </EzCard>
    );
    expect(actual).toMatchSnapshot();
  });

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(
      <EzCard title="Card Heading">
        <EzCardSection>Lorem ipsum dolor</EzCardSection>
        <EzCardSection>Lorem ipsum dolor</EzCardSection>
      </EzCard>
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });

  describe('valid props', () => {
    let actual;
    beforeEach(() => {
      actual = shallow(
        <EzCard>
          <EzCardSection>Lorem ipsum dolor</EzCardSection>
          <EzCardSection>Lorem ipsum dolor</EzCardSection>
        </EzCard>
      );
    });
    it('renders valid props for html elements', () => {
      actual.setProps({'data-test': 'my-test-selector'});
      expect(actual.prop('data-test')).toEqual('my-test-selector');
    });

    it('does NOT render invalid props for html elements', () => {
      expect(actual.prop('primary')).toBeUndefined();
    });
  });
});
