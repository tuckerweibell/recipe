import React from 'react';
import EzField from '../EzField';
import {axe} from 'jest-axe';
import 'jest-dom/extend-expect';
import {cleanup, getByLabelText, fireEvent} from 'react-testing-library';
import {fullRender as render, renderToHtml} from '../../../jest-globals';

describe('EzField', () => {
  afterEach(cleanup);

  it('should render basic text field with default styles', () => {
    const {container} = render(<EzField label="Basic text" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render textarea field', () => {
    const {container} = render(<EzField type="textarea" label="Long text" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with error styles', () => {
    const {container} = render(
      <EzField label="Field with error" error="An error occurred" touched />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with custom input', () => {
    const {container} = render(
      <EzField
        label="Custom input"
        value="1234"
        type={({value, onChange}) => <input value={value} onChange={onChange} />}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with helper text, placeholder and character count', () => {
    const {container} = render(
      <EzField
        label="Character Name"
        helperText="Provide the name of your favorite Sesame Street character."
        maxLength={120}
        placeholder="e.g. Big Bird"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with hidden label', () => {
    const {container} = render(<EzField label="Hidden Label" labelHidden />);
    expect(container.firstChild).toMatchSnapshot();
  });

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

    it('should render radio button options', () => {
      const {container} = render(<EzField {...radiobuttonProps} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render radio button with correct selection', () => {
      const {container} = render(<EzField {...radiobuttonProps} value={'c'} />);

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
      let selected;
      const onChange = e => {
        selected = e.target.selected;
      };
      const {container} = render(<EzField {...radiobuttonProps} onChange={onChange} value={'c'} />);

      const input = getByLabelText(container, 'Choice B');

      fireEvent.click(input);

      expect(selected).toEqual('b');
    });
  });

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

    it('should render checklist options', () => {
      const {container} = render(<EzField {...checkboxProps} />);
      expect(container.firstChild).toMatchSnapshot();
    });

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
      let selected;
      const onChange = e => {
        selected = e.target.selected;
      };
      const {container} = render(
        <EzField {...checkboxProps} value={['a', 'c']} onChange={onChange} />
      );

      fireEvent.click(getByLabelText(container, 'Choice B'));

      expect(selected.sort()).toEqual(['a', 'b', 'c']);
    });

    it('should publish change event that does NOT include the unchecked option', () => {
      let selected;
      const onChange = e => {
        selected = e.target.selected;
      };
      const {container} = render(
        <EzField {...checkboxProps} value={['a', 'c']} onChange={onChange} />
      );

      fireEvent.click(getByLabelText(container, 'Choice C'));

      expect(selected).toEqual(['a']);
    });
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

  /**
   * Accessibility tests.
   */
  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzField label="Basic text" />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
