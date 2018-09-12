import React from 'react';
import EzAlert from '../EzAlert';

describe('EzAlert', () => {
  /**
   * Style tests.
   */
  it('should render with default styles', () => {
    expect(render(<EzAlert headline="Header" />)).toMatchSnapshot();
  });

  it('should render with success styles', () => {
    expect(render(<EzAlert headline="Header" use="success" />)).toMatchSnapshot();
  });

  it('should render with warning styles', () => {
    expect(render(<EzAlert headline="Header" use="warning" />)).toMatchSnapshot();
  });

  it('should render with error styles', () => {
    expect(render(<EzAlert headline="Header" use="error" />)).toMatchSnapshot();
  });

  it('should render with marketing styles', () => {
    expect(render(<EzAlert headline="Header" use="marketing" />)).toMatchSnapshot();
  });

  it('should render with tip styles', () => {
    expect(render(<EzAlert headline="Header" use="tip" />)).toMatchSnapshot();
  });

  it('should render with arrow styles', () => {
    expect(render(<EzAlert arrow="top" headline="Header" />)).toMatchSnapshot();
  });

  it('should render with arrow styles (alternate)', () => {
    expect(render(<EzAlert arrow="bottom" headline="Header" />)).toMatchSnapshot();
  });

  it('should render with tagline', () => {
    expect(render(<EzAlert headline="Header" tagline="Second line" />)).toMatchSnapshot();
  });

  /**
   * Accessibility tests.
   */
  it('should meet accessibility guidelines for buttons', async () => {
    const wrapper = renderToHtml(<EzAlert headline="Header" use="info" />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
