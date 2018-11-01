import React from 'react';
import EzSegmentedControl from '../EzSegmentedControl';
import {axe} from 'jest-axe';

import {render, mount, renderToHtml} from '../../../jest-globals';

describe('EzSegmentedControl', () => {
  /**
   * Style tests.
   */
  it('should render with default styles', () => {
    const spy = jest.fn();

    const actual = render(
      <EzSegmentedControl
        name="test-segment"
        label="test segment"
        active="firstValue"
        className="test"
        labelPosition="left"
        onChange={spy}
        options={[
          {label: 'first', value: 'firstValue'},
          {label: 'second', value: 'secondValue'},
          {label: 'third', value: 'thirdValue', disabled: true},
        ]}
      />
    );
    expect(actual).toMatchSnapshot();
  });

  /**
   * onChange tests.
   */
  describe('onChange', () => {
    it('is triggers onChange when segment is clicked', () => {
      const spy = jest.fn();

      const component = mount(
        <EzSegmentedControl
          name="test-segment"
          label="test segment"
          active="firstValue"
          className="test"
          labelPosition="left"
          onChange={spy}
          options={[
            {label: 'first', value: 'firstValue'},
            {label: 'second', value: 'secondValue'},
            {label: 'third', value: 'thirdValue'},
          ]}
        />
      );

      component
        .find('input')
        .last()
        .simulate('change', {target: {checked: true}});

      expect(spy).toHaveBeenCalledWith('thirdValue');
    });
  });

  /**
   * Accessibility tests.
   */
  it('should meet accessibility guidelines', async () => {
    const spy = jest.fn();

    const wrapper = renderToHtml(
      <EzSegmentedControl
        name="test-segment"
        label="accessibility test"
        active="firstValue"
        className="test"
        labelPosition="left"
        onChange={spy}
        options={[
          {label: 'first', value: 'firstValue'},
          {label: 'second', value: 'secondValue'},
          {label: 'third', value: 'thirdValue'},
        ]}
      />
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
