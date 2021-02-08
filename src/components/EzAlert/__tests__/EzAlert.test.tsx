import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render, screen} from '@testing-library/react';
import EzAlert from '../EzAlert';
import markdown from '../EzAlert.md';
import regressionTests from './EzAlert.test.md';
import {EzCard} from '../../index';

const scope = {EzAlert, EzCard};

describe('EzAlert', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});

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
