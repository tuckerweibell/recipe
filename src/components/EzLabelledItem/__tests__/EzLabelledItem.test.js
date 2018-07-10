import React from 'react';
import EzLabelledItem from '../EzLabelledItem';

describe('EzLabelledItem', () => {
  it('renders the label above the content', () => {
    const actual = render(
      <EzLabelledItem position="top" size="normal" title="Top Label">
        Some text
      </EzLabelledItem>
    );
    expect(actual.find(':first-child').text()).toContain('Top Label');
  });

  it('renders the label below the content', () => {
    const actual = render(
      <EzLabelledItem position="bottom" size="normal" title="Bottom Label">
        Some text
      </EzLabelledItem>
    );
    expect(actual.find(':last-child').text()).toContain('Bottom Label');
  });

  /**
   * Accessibility tests.
   */
  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(
      <EzLabelledItem position="top" size="normal" title="Top Label">
        Some text
      </EzLabelledItem>
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
