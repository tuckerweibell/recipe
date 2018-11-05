import React from 'react';
import EzTable from '../EzTable';

describe('EzTable', () => {
  /**
   * Style tests.
   */
  it('should render with default styles', () => {
    const actual = create(<EzTable />);
    expect(actual).toMatchSnapshot();
  });

  /**
   * Insert your unit tests here to validate your components
   */
   it('should have tests', () => {});

  /**
   * Accessibility tests.
   */
  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzTable />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
