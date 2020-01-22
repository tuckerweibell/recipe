import React from 'react';
import {getByLabelText, fireEvent} from '@testing-library/react';
import EzField from '../EzField';
import {fullRender as render} from '../../../jest-globals';

describe('EzField', () => {
  describe('check box list', () => {
    const checkboxProps = {
      label: 'Multiple choice list',
      type: 'checkbox' as 'checkbox',
      multiple: true as true,
      options: [
        {label: 'Choice A', value: 'a'},
        {label: 'Choice B', value: 'b'},
        {label: 'Choice C', value: 'c'},
      ],
    };

    it('should render checklist with correctly selected options', () => {
      const {container} = render(<EzField {...checkboxProps} value={['a', 'c']} />);
      expect(getByLabelText(container, 'Choice A')).toHaveProperty('checked', true);
      expect(getByLabelText(container, 'Choice B')).toHaveProperty('checked', false);
      expect(getByLabelText(container, 'Choice C')).toHaveProperty('checked', true);

      const input = getByLabelText(container, 'Choice C');

      fireEvent.change(input, {target: {checked: false}});

      expect(getByLabelText(container, 'Choice A')).toHaveProperty('checked', true);
      expect(getByLabelText(container, 'Choice B')).toHaveProperty('checked', false);
      expect(getByLabelText(container, 'Choice C')).toHaveProperty('checked', false);
    });

    it('should publish change event with the newly selected options', () => {
      let value;
      const onChange = e => {
        value = e.target.value;
      };
      const {container} = render(
        <EzField {...checkboxProps} value={['a', 'c']} onChange={onChange} />
      );

      fireEvent.click(getByLabelText(container, 'Choice B'));

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

      fireEvent.click(getByLabelText(container, 'Choice C'));

      expect(value).toEqual(['a']);
    });
  });
});
