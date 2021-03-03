import React from 'react';
import {visualSnapshots} from 'sosia';
import {axe} from 'jest-axe';
import {render, getByLabelText, fireEvent, act} from '@testing-library/react';
import regressionTests from './EzField.test.md';
import markdown from '../EzField.md';
import EzField from '../EzField';
import {EzButton, EzFormLayout, EzLayout, EzLabelledItem, EzSearchInput} from '../../index';
import Open from '../Open';
import Media from '../Media';

const scope = {
  EzButton,
  EzField,
  EzLayout,
  EzFormLayout,
  Open,
  Media,
  EzLabelledItem,
  EzSearchInput,
};

describe('EzField', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});

  it('should render with disabled input', () => {
    const {container} = render(<EzField label="Disabled input" disabled />);

    expect(getByLabelText(container, 'Disabled input')).toHaveAttribute('disabled');
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

  it('should not lose focus when typing causes the validation state to toggle', () => {
    const Example = () => {
      const [value, setValue] = React.useState('value');
      return (
        <EzField
          type="text"
          label="Field label"
          value={value}
          onChange={e => setValue(e.target.value)}
          touched
          error={value.length < 6 && 'Oops!'}
          helperText="click the checkbox to make input invalid"
        />
      );
    };

    const {container} = render(<Example />);

    const input = getByLabelText(container, 'Field label');

    act(() => input.focus());

    expect(input).toHaveFocus();

    fireEvent.change(input, {target: {value: 'trigger the field error'}});

    expect(input).toHaveFocus();
  });

  it('should apply ref to the underlying input element', () => {
    const spy = jest.fn(el => {
      if (!el) return;
      expect(el.type).toEqual('text');
    });

    render(<EzField label="Character Name" ref={spy} />);

    expect.assertions(1);
  });

  it('should meet accessibility guidelines', async () => {
    const {container} = render(<EzField label="Basic text" />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    const onChange = e => {
      // eslint-disable-next-line no-alert
      alert(e.target.value);
    };
    [
      {
        listBox: (
          <EzField
            type="select"
            label="list box"
            value="1"
            onChange={onChange}
            options={[
              {label: '1', value: 1, disabled: false},
              {label: '2', value: 2, disabled: false},
            ]}
            error="error"
            helperText="helper text"
            labelHidden={false}
            labelSize="normal"
            maxLength={10}
            prefix="prefix"
            suffix="suffix"
            touched={false}
          />
        ),
        singleChoice: (
          <EzField
            type="radio"
            label="single choice"
            value="1"
            onChange={onChange}
            options={[
              {label: '1', value: 1, disabled: false},
              {label: '2', value: 2, disabled: false},
            ]}
            bordered={false}
            error="error"
            helperText="helper text"
            labelHidden={false}
            labelSize="normal"
            maxLength={10}
            prefix="prefix"
            suffix="suffix"
            touched={false}
          />
        ),
        multipleChoice: (
          <EzField
            type="checkbox"
            label="multiple choice"
            value={['1', '2']}
            onChange={onChange}
            options={[
              {label: '1', value: 1, disabled: false},
              {label: '2', value: 2, disabled: false},
            ]}
            bordered={false}
            error="error"
            helperText="helper text"
            labelHidden={false}
            labelSize="normal"
            maxLength={10}
            prefix="prefix"
            suffix="suffix"
            touched={false}
          />
        ),
        email: (
          <EzField
            type="email"
            label="email"
            value="eat@ezcater.com"
            onChange={onChange}
            list="1"
            minLength={3}
            multiple={false}
            pattern=".+@ezcater.com"
            placeholder="enter your email"
            readOnly={false}
            error="error"
            helperText="helper text"
            labelHidden={false}
            labelSize="normal"
            maxLength={10}
            prefix="prefix"
            suffix="suffix"
            touched={false}
          />
        ),
        textInput: (
          <EzField
            type="text"
            label="text"
            value="some text"
            onChange={onChange}
            error="error"
            helperText="helper text"
            labelHidden={false}
            labelSize="normal"
            maxLength={10}
            prefix="prefix"
            suffix="suffix"
            touched={false}
          />
        ),
        numberInput: (
          <EzField
            type="number"
            label="number"
            value={3}
            onChange={onChange}
            error="error"
            helperText="helper text"
            labelHidden={false}
            labelSize="normal"
            maxLength={10}
            prefix="prefix"
            suffix="suffix"
            touched={false}
          />
        ),
        textareaInput: (
          <EzField
            type="textarea"
            label="textarea"
            value="some text"
            onChange={onChange}
            error="error"
            size="small"
            helperText="helper text"
            labelHidden={false}
            labelSize="normal"
            maxLength={300}
            prefix="prefix"
            suffix="suffix"
            touched={false}
          />
        ),
        passwordInput: (
          <EzField
            type="password"
            label="password"
            value="password123"
            onChange={onChange}
            error="error"
            helperText="helper text"
            labelHidden={false}
            labelSize="normal"
            maxLength={10}
            prefix="prefix"
            suffix="suffix"
            touched={false}
          />
        ),
        dateInput: (
          <EzField
            type="date"
            label="date"
            value="january 1, 2021"
            onChange={onChange}
            minDate="january 10, 2021"
            maxDate="january 31, 2021"
            filterDate={() => true}
            error="error"
            helperText="helper text"
            labelHidden={false}
            labelSize="normal"
            maxLength={10}
            prefix="prefix"
            suffix="suffix"
            touched={false}
          />
        ),
        timeInput: (
          <EzField
            type="time"
            label="time"
            value="5:00pm"
            onChange={onChange}
            start="12:00am"
            end="10:00pm"
            step={1}
            error="error"
            helperText="helper text"
            labelHidden={false}
            labelSize="normal"
            maxLength={10}
            prefix="prefix"
            suffix="suffix"
            touched={false}
          />
        ),
        autosuggestInput: (
          <EzField
            type="autosuggest"
            label="autosuggest"
            value="1"
            options={[
              {label: '1', value: 1, disabled: false},
              {label: '2', value: 2, disabled: false},
            ]}
            onFilter={() => true}
            onSelectionChange={() => true}
            onChange={onChange}
            error="error"
            helperText="helper text"
            labelHidden={false}
            labelSize="normal"
            maxLength={10}
            prefix="prefix"
            suffix="suffix"
            touched={false}
          />
        ),
        customFieldInput: (
          <EzField
            label="custom"
            value="1"
            onChange={onChange}
            error="error"
            helperText="helper text"
            labelHidden={false}
            labelSize="normal"
            maxLength={10}
            prefix="prefix"
            suffix="suffix"
            touched={false}
          />
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
