import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import EzToggle from '../EzToggle';

describe('EzToggle', () => {
  it('calls the provided click handler when the input is clicked', () => {
    const spy = jest.fn();

    render(<EzToggle id="toggle" onChange={spy} checked label="Toggle me" />);

    const toggle = screen.getByLabelText(/Toggle me/);

    fireEvent.click(toggle);

    expect(spy).toHaveBeenCalled();
  });

  it('calls the provided click handler when the stylized container is clicked', () => {
    const spy = jest.fn();

    render(<EzToggle id="toggle" onChange={spy} checked />);

    const toggle = screen.getByRole('presentation');

    fireEvent.click(toggle);

    expect(spy).toHaveBeenCalled();
  });

  it('submits the correct input state when using uncontrolled input', () => {
    render(<EzToggle id="toggle" label="Toggle me" />);

    const toggle = screen.getByLabelText(/Toggle me/) as HTMLInputElement;

    expect(toggle.checked).toBe(false);

    fireEvent.click(toggle.parentNode);

    expect(toggle.checked).toBe(true);
  });

  it('should meet accessibility guidelines', async () => {
    const {container} = render(<EzToggle id="toggle" label="Toggle me" />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
