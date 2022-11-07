import React from 'react';
import {render, getByLabelText, fireEvent, screen} from '@testing-library/react';
import EzField from '../EzField';

describe('EzField', () => {
  describe('check box list', () => {
    let checkboxProps;

    beforeEach(() => {
      checkboxProps = {
        label: 'Multiple choice list',
        type: 'checkbox' as const,
        multiple: true as const,
        options: [
          {label: 'Choice A', value: 'a'},
          {label: 'Choice B', value: 'b'},
          {label: 'Choice C', value: 'c'},
        ],
      };
    });

    it('should render checklist with correctly selected options', () => {
      const {container} = render(<EzField {...checkboxProps} value={['a', 'c']} />);
      expect(getByLabelText(container, /Choice A/)).toHaveProperty('checked', true);
      expect(getByLabelText(container, /Choice B/)).toHaveProperty('checked', false);
      expect(getByLabelText(container, /Choice C/)).toHaveProperty('checked', true);

      const input = getByLabelText(container, /Choice C/);

      fireEvent.change(input, {target: {checked: false}});

      expect(getByLabelText(container, /Choice A/)).toHaveProperty('checked', true);
      expect(getByLabelText(container, /Choice B/)).toHaveProperty('checked', false);
      expect(getByLabelText(container, /Choice C/)).toHaveProperty('checked', false);
    });

    it('should render disabled options', () => {
      const {unmount} = render(<EzField {...checkboxProps} value={['a', 'c']} disabled />);
      expect(screen.getByLabelText(/Choice A/)).toBeDisabled();
      expect(screen.getByLabelText(/Choice B/)).toBeDisabled();
      expect(screen.getByLabelText(/Choice C/)).toBeDisabled();

      unmount();

      // individually disabled options
      render(
        <EzField
          {...checkboxProps}
          options={[
            {label: 'Choice A', value: 'a', disabled: true},
            {label: 'Choice B', value: 'b'},
            {label: 'Choice C', value: 'c'},
          ]}
          value={['a', 'c']}
        />
      );

      expect(screen.getByLabelText(/Choice A/)).toBeDisabled();
      expect(screen.getByLabelText(/Choice B/)).not.toBeDisabled();
      expect(screen.getByLabelText(/Choice C/)).not.toBeDisabled();
    });

    it('should publish change event with the newly selected options', () => {
      let value;
      const onChange = e => {
        value = e.target.value;
      };
      const {container} = render(
        <EzField {...checkboxProps} value={['a', 'c']} onChange={onChange} />
      );

      fireEvent.click(getByLabelText(container, /Choice B/));

      expect(value.sort()).toEqual(['a', 'b', 'c']);
    });

    it('should publish change event that does NOT include the unchecked option', () => {
      let value;
      const onChange = e => {
        value = e.target.value;
      };
      const {container} = render(
        <EzField {...checkboxProps} value={['a', 'c']} onChange={onChange} />
      );

      fireEvent.click(getByLabelText(container, /Choice C/));

      expect(value).toEqual(['a']);
    });

    it('can use react testing library to find options by label', () => {
      const {container} = render(<EzField {...checkboxProps} value={['a', 'c']} />);
      expect(getByLabelText(container, /Choice A/)).toEqual(getByLabelText(container, 'Choice A'));
    });
  });
});
