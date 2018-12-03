import React from 'react';
import EzButton from '../EzButton';
import {axe} from 'jest-axe';

import {shallow, mount, renderToHtml} from '../../../jest-globals';

describe('EzButton', () => {
  const shallowWithProps = props => {
    props = {use: 'primary', ...props};
    return shallow(<EzButton {...props}>Click Me</EzButton>);
  };

  const mountWithProps = props => {
    props = {use: 'primary', ...props};
    return mount(<EzButton {...props}>Click Me</EzButton>);
  };

  /**
   * Style tests.
   */
  it('should render with primary styles', () => {
    const actual = mountWithProps({});
    expect(actual.render()).toMatchSnapshot();
  });

  it('should render with secondary styles', () => {
    const actual = mountWithProps({use: 'secondary'});
    expect(actual.render()).toMatchSnapshot();
  });

  it('should render with tertiary styles', () => {
    const actual = mountWithProps({use: 'tertiary'});
    expect(actual.render()).toMatchSnapshot();
  });

  it('should render with disabled styles', () => {
    const actual = mountWithProps({disabled: true});
    expect(actual.render()).toMatchSnapshot();
  });

  it('should render primary button with destructive styles', () => {
    const actual = mountWithProps({destructive: true});
    expect(actual.render()).toMatchSnapshot();
  });

  it('should render secondary button with destructive styles', () => {
    const actual = mountWithProps({use: 'secondary', destructive: true});
    expect(actual.render()).toMatchSnapshot();
  });

  it('should render tertiary button with destructive styles', () => {
    const actual = mountWithProps({use: 'tertiary', destructive: true});
    expect(actual.render()).toMatchSnapshot();
  });

  it('should render primary button with loading styles', () => {
    const actual = mountWithProps({use: 'primary', loading: true});
    expect(actual.render()).toMatchSnapshot();
  });

  it('should render secondary button with loading styles', () => {
    const actual = mountWithProps({use: 'secondary', loading: true});
    expect(actual.render()).toMatchSnapshot();
  });

  it('renders a button element by default', () => {
    const actual = mountWithProps({});
    expect(actual.render()[0].name).toEqual('button');
  });

  describe('disabled', () => {
    it('is not disabled by default', () => {
      const actual = mountWithProps({});
      expect(actual.prop('disabled')).toBeUndefined();
    });

    it('is applied to the button element when defined', () => {
      const actual = mountWithProps({disabled: true});
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
      const actual = shallowWithProps({});
      expect(actual.prop('loading')).toBeUndefined();
    });

    it('is applies the disabled attribute to the button element', () => {
      const foo = shallowWithProps({loading: true});
      expect(foo.prop('disabled')).toBe(true);
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
      const actual = shallowWithProps({'data-test': 'my-test-selector'});
      expect(actual.prop('data-test')).toEqual('my-test-selector');
    });

    it('does NOT render invalid props for html elements', () => {
      const actual = shallowWithProps({});
      expect(actual.prop('primary')).toBeUndefined();
    });
  });

  /**
   * Accessibility tests.
   */
  it('should meet accessibility guidelines for buttons', async () => {
    const wrapper = renderToHtml(<EzButton use="primary">Click Me</EzButton>);
    const html = await axe(wrapper);
    expect(html).toHaveNoViolations();
  });
});
