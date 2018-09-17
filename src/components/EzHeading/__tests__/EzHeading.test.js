import React from 'react';
import EzHeading from '../EzHeading';

describe('EzHeading', () => {
  /**
   * Style tests.
   */
  it('should render size 1 with size 700, weight normal', () => {
    const actual = create(<EzHeading size="1">Heading</EzHeading>);
    expect(actual).toMatchSnapshot();
  });

  it('should render size 2 with size 600, weight normal', () => {
    const actual = create(<EzHeading size="2">Heading</EzHeading>);
    expect(actual).toMatchSnapshot();
  });

  it('should render size 3 with size 500, weight bold', () => {
    const actual = create(<EzHeading size="3">Heading</EzHeading>);
    expect(actual).toMatchSnapshot();
  });

  it('should render size 4 with size 400, weight normal', () => {
    const actual = create(<EzHeading size="4">Heading</EzHeading>);
    expect(actual).toMatchSnapshot();
  });

  it('should render size 5 with size 300, weight bold', () => {
    const actual = create(<EzHeading size="5">Heading</EzHeading>);
    expect(actual).toMatchSnapshot();
  });

  it('should render size 6 with size 200, weight normal', () => {
    const actual = create(<EzHeading size="6">Heading</EzHeading>);
    expect(actual).toMatchSnapshot();
  });

  ['1', '2', '3', '4', '5', '6'].forEach(n => {
    let actual = render(
      <EzHeading size={n} subheading="Subheading">
        Heading
      </EzHeading>
    );
    let shown = n === '3' || n === '5' ? 1 : 0;
    expect(actual.find('div')).toHaveLength(shown);
  });

  /**
   * Accessibility tests.
   */
  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzHeading size="1">Heading</EzHeading>);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
