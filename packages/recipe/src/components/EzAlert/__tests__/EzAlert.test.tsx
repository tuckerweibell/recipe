import React from 'react';
import {render, screen} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import EzAlert from '../EzAlert';

describe('EzAlert', () => {
  it('should meet accessibility guidelines for status messages', async () => {
    render(<EzAlert headline="A11y" use="info" />);
    expect(await axe(await screen.findByRole('status'))).toHaveNoViolations();
  });

  it('should meet accessibility guidelines for alert messages', async () => {
    render(<EzAlert headline="A11y" use="error" />);
    expect(await axe(await screen.findByRole('alert'))).toHaveNoViolations();
  });

  it('should have appropriate role for non-urgent alerts', async () => {
    render(<EzAlert headline="Info Alert" use="info" />);
    expect(await screen.findByRole('status')).toBeInTheDocument();
  });

  it('should have an alert role for more urgent alerts', async () => {
    render(<EzAlert headline="Error Alert" use="error" />);
    expect(await screen.findByRole('alert')).toBeInTheDocument();
  });

  it('should have polite aria-live for non-urgent alerts', async () => {
    render(<EzAlert headline="Info Alert" use="info" />);
    expect(await screen.findByRole('status')).toHaveAttribute('aria-live', 'polite');
  });

  it('should have assertive aria-live for urgent alerts', async () => {
    render(<EzAlert headline="Error Alert" use="error" />);
    expect(await screen.findByRole('alert')).toHaveAttribute('aria-live', 'assertive');
  });
});
