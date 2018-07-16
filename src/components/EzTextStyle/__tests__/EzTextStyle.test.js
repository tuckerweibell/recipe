import React from 'react';
import EzTextStyle from '../EzTextStyle';

describe('EzTextStyle', () => {
  /**
   * Style tests.
   */
  it('should render with strong styles', () => {
    const actual = create(<EzTextStyle use="strong">Strong Text</EzTextStyle>);
    expect(actual).toMatchSnapshot();
  });

  it('should render with subdued styles', () => {
    const actual = create(<EzTextStyle use="subdued">Subdued Text</EzTextStyle>);
    expect(actual).toMatchSnapshot();
  });

  it('renders as a span element', () => {
    const actual = shallow(<EzTextStyle use="strong">Strong Text</EzTextStyle>);
    expect(actual.name()).toEqual('span');
  });

  /**
   * Accessibility tests.
   */
  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzTextStyle use="strong">Strong Text</EzTextStyle>);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
