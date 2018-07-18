import React from 'react';
import EzLabelledItem from '../EzLabelledItem';

describe('EzLabelledItem', () => {
  describe('position', () => {
    describe('top', () => {
      it('renders the label above the content', () => {
        const actual = render(
          <EzLabelledItem position="top" title="Top Label">
            Some text
          </EzLabelledItem>
        );
        expect(actual.find(':first-child').text()).toContain('Top Label');
      });

      it('renders with a small label', () => {
        const actual = render(
          <EzLabelledItem position="top" size="small" title="Top Label">
            Some text
          </EzLabelledItem>
        );
        expect(actual).toMatchSnapshot();
      });
    });

    describe('left', () => {
      it('renders the label to the left of the content', () => {
        const actual = render(
          <EzLabelledItem position="left" title="Left Label">
            Some text
          </EzLabelledItem>
        );
        expect(actual.find(':first-child').text()).toContain('Left Label');
        expect(actual).toMatchSnapshot();
      });
    });
  });

  it('renders the label below the content', () => {
    const actual = render(
      <EzLabelledItem position="bottom" title="Bottom Label">
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
      <EzLabelledItem position="top" title="Top Label">
        Some text
      </EzLabelledItem>
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
