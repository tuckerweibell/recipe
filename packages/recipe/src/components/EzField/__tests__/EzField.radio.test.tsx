import React from 'react';
import {visualSnapshots} from 'sosia';
import {render, getByLabelText, fireEvent} from '@testing-library/react';
import regressionTests from './EzField.radio.test.md';
import EzField from '../EzField';
import Media from '../Media';
import {EzItem} from '../../EzContent';
import EzLabel from '../../EzLabel';

const scope = {EzField, Media, EzItem, EzLabel};

describe('EzField', () => {
  visualSnapshots({markdown: regressionTests, scope});

  describe('radio button list', () => {
    const radiobuttonProps = {
      label: 'Single choice list',
      type: 'radio' as const,
      options: [
        {label: 'Choice A', value: 'a'},
        {label: 'Choice B', value: 'b'},
        {label: 'Choice C', value: 'c'},
      ],
    };

    it('should render radio button with correct selection', () => {
      const {container} = render(<EzField {...radiobuttonProps} value="c" />);

      expect(getByLabelText(container, /Choice A/)).toHaveProperty('checked', false);
      expect(getByLabelText(container, /Choice B/)).toHaveProperty('checked', false);
      expect(getByLabelText(container, /Choice C/)).toHaveProperty('checked', true);

      const input = getByLabelText(container, /Choice B/);

      fireEvent.change(input, {target: {checked: true}});

      expect(getByLabelText(container, /Choice A/)).toHaveProperty('checked', false);
      expect(getByLabelText(container, /Choice B/)).toHaveProperty('checked', true);
      expect(getByLabelText(container, /Choice C/)).toHaveProperty('checked', false);
    });

    it('should publish change event with the selected option', () => {
      let value;
      const onChange = e => {
        value = e.target.value;
      };
      const {container} = render(<EzField {...radiobuttonProps} onChange={onChange} value="c" />);

      const input = getByLabelText(container, /Choice B/);

      fireEvent.click(input);

      expect(value).toEqual('b');
    });
  });
});
