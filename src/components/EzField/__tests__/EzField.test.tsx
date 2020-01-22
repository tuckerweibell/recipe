import React from 'react';
import {visualSnapshots} from 'sosia';
import {axe} from 'jest-axe';
import {getByLabelText, fireEvent} from '@testing-library/react';
import Component from 'react-component-component';
import regressionTests from './EzField.test.md';
import ezTextAreaTests from './EzTextArea.test.md';
import markdown from '../EzField.md';
import EzField from '../EzField';
import {useTimeRangeOptions} from '../EzTimeInput';
import {fullRender as render, renderToHtml} from '../../../jest-globals';
import {EzFormLayout, EzLayout} from '../../index';
import Open from '../Open';

const scope = {EzField, EzLayout, EzFormLayout, Component, Open};

describe('EzField', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});
  visualSnapshots({markdown: ezTextAreaTests, scope});

  it('should render with disabled input', () => {
    const {container} = render(<EzField label="Disabled input" disabled />);

    expect(getByLabelText(container, 'Disabled input')).toHaveAttribute('disabled');
  });

  describe('radio button list', () => {
    const radiobuttonProps = {
      label: 'Single choice list',
      type: 'radio' as 'radio',
      options: [
        {label: 'Choice A', value: 'a'},
        {label: 'Choice B', value: 'b'},
        {label: 'Choice C', value: 'c'},
      ],
    };

    it('should render radio button with correct selection', () => {
      const {container} = render(<EzField {...radiobuttonProps} value="c" />);

      expect(getByLabelText(container, 'Choice A')).toHaveProperty('checked', false);
      expect(getByLabelText(container, 'Choice B')).toHaveProperty('checked', false);
      expect(getByLabelText(container, 'Choice C')).toHaveProperty('checked', true);

      const input = getByLabelText(container, 'Choice B');

      fireEvent.change(input, {target: {checked: true}});

      expect(getByLabelText(container, 'Choice A')).toHaveProperty('checked', false);
      expect(getByLabelText(container, 'Choice B')).toHaveProperty('checked', true);
      expect(getByLabelText(container, 'Choice C')).toHaveProperty('checked', false);
    });

    it('should publish change event with the selected option', () => {
      let value;
      const onChange = e => {
        value = e.target.value;
      };
      const {container} = render(<EzField {...radiobuttonProps} onChange={onChange} value="c" />);

      const input = getByLabelText(container, 'Choice B');

      fireEvent.click(input);

      expect(value).toEqual('b');
    });
  });

  it('should generate the correct time range options', () => {
    const timeRange = useTimeRangeOptions({start: '9:00 am', end: '5:00 pm', step: 60});

    expect(timeRange.length).toBe(9);
  });

  it('should generate the correct time range options (without space between time and meridiem)', () => {
    const timeRange = useTimeRangeOptions({start: '9:00am', end: '5:00pm', step: 60});

    expect(timeRange.length).toBe(9);
  });

  it('should update character count as the user enters text', () => {
    const {container} = render(<EzField label="Character Name" maxLength={120} />);

    expect(container).toHaveTextContent('0/120');

    const input = getByLabelText(container, 'Character Name');

    fireEvent.change(input, {target: {value: 'Oscar the grouch'}});

    expect(container).toHaveTextContent('16/120');
  });

  it('should call provided onChange handler if the input changes', () => {
    const spy = jest.fn();
    const {container} = render(<EzField label="Basic Text" onChange={spy} />);

    const input = getByLabelText(container, 'Basic Text');

    fireEvent.change(input, {target: {value: 'new value'}});

    expect(spy).toHaveBeenCalled();
  });

  it('should NOT update character count if the provided onChange handler prevents default', () => {
    const {container} = render(
      <EzField label="Character Name" maxLength={120} onChange={e => e.preventDefault()} />
    );

    expect(container).toHaveTextContent('0/120');

    const input = getByLabelText(container, 'Character Name');

    fireEvent.change(input, {target: {value: 'Oscar the grouch'}});

    expect(container).toHaveTextContent('0/120');
  });

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzField label="Basic text" />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
