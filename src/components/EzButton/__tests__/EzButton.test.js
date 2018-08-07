import React from 'react';
import EzButton from '../EzButton';

describe('EzButton', () => {
  let actual;

  beforeEach(() => (actual = shallow(<EzButton use="primary">Click Me</EzButton>)));

  /**
   * Style tests.
   */
  it('should render with primary styles', () => {
    expect(actual).toMatchSnapshot();
  });

  it('should render with secondary styles', () => {
    actual.setProps({use: 'secondary'});
    expect(actual).toMatchSnapshot();
  });

  it('should render with tertiary styles', () => {
    actual.setProps({use: 'tertiary'});
    expect(actual).toMatchSnapshot();
  })

  it('should render with disabled styles', () => {
    actual.setProps({disabled: true});
    expect(actual).toMatchSnapshot();
  });

  it('should render primary button with destructive styles', () => {
    actual.setProps({destructive: true});
    expect(actual).toMatchSnapshot();
  });

  it('should render secondary button with destructive styles', () => {
    actual.setProps({destructive: true, use: 'secondary'});
    expect(actual).toMatchSnapshot();
  });

  it('should render tertiary button with destructive styles', () => {
    actual.setProps({destructive: true, use: 'tertiary'});
    expect(actual).toMatchSnapshot();
  });

  it('should render primary button with loading styles', () => {
    actual.setProps({loading: true, use: 'primary'});
    expect(actual).toMatchSnapshot();
  });

  it('should render secondary button with loading styles', () => {
    actual.setProps({loading: true, use: 'secondary'});
    expect(actual).toMatchSnapshot();
  });

  /**
   * Logic tests.
   */
  it('renders a button element by default', () => {
    expect(actual.name()).toEqual('button');
  });

  describe('disabled', () => {
    it('is not disabled by default', () => {
      expect(actual.prop('disabled')).toBeUndefined();
    });

    it('is applied to the button element when defined', () => {
      actual.setProps({disabled: true});
      expect(actual.prop('disabled')).toBe(true);
    });

    it('is does not trigger clicks', () => {
      const spy = jest.fn();

      const component = mount(
        <EzButton use="primary" onClick={spy} disabled>
          Click Me
        </EzButton>
      );

      component.simulate('click');

      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('loading', () => {
    it('is not loading by default', () => {
      expect(actual.prop('loading')).toBeUndefined();
    });

    it('is applies the disabled attribute to the button element', () => {
      actual.setProps({disabled: true});
      expect(actual.prop('disabled')).toBe(true);
    });

    it('is does not trigger clicks', () => {
      const spy = jest.fn();

      const component = mount(
        <EzButton use="primary" onClick={spy} loading>
          Click Me
        </EzButton>
      );

      component.simulate('click');

      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('valid props', () => {
    it('renders valid props for html elements', () => {
      actual.setProps({'data-test': 'my-test-selector'});
      expect(actual.prop('data-test')).toEqual('my-test-selector');
    });

    it('does NOT render invalid props for html elements', () => {
      expect(actual.prop('primary')).toBeUndefined();
    });
  });

  /**
   * Accessibility tests.
   */
  it('should meet accessibility guidelines for buttons', async () => {
    const wrapper = renderToHtml(<EzButton use="primary">Click Me</EzButton>);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
