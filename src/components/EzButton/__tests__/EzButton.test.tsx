import React from 'react';
import {Global, css} from '@emotion/core';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render, fireEvent} from '@testing-library/react';
import regressionTests from './EzButton.test.md';
import EzButton from '../EzButton';
import markdown from '../EzButton.md';
import {EzLayout} from '../../index';

jest.unmock('../../../utils/hooks/usePopper');

const scope = {EzButton, EzLayout, Global, css};

describe('EzButton', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope: {...scope, fireEvent}});

  it('renders a button element by default', () => {
    const {getByText} = render(<EzButton use="primary">Click Me</EzButton>);
    expect(getByText('Click Me').tagName).toEqual('BUTTON');
  });

  describe('disabled', () => {
    it('it disables the button element', () => {
      const {getByText} = render(
        <EzButton use="primary" disabled>
          Click Me
        </EzButton>
      );

      expect(getByText('Click Me')).toHaveAttribute('disabled');
    });
  });

  describe('disabledMessage', () => {
    const tooltipText = 'Invalid form';

    it('wraps the button in a tooltip if a value is provided and the button is disabled', () => {
      const {container, getByText, getByRole} = render(
        <EzButton use="primary" disabled disabledMessage={tooltipText}>
          Submit
        </EzButton>
      );

      fireEvent.focus(container.querySelector('button'));

      const tooltip = getByRole('tooltip');

      expect(tooltip).toBeVisible();
      expect(getByText(tooltipText)).toBeDefined();
    });

    it('does not wrap the button in a tooltip if a value is provided and the button is not disabled', () => {
      const {container, queryByRole} = render(
        <EzButton use="primary" disabledMessage={tooltipText}>
          Submit
        </EzButton>
      );

      fireEvent.focus(container.querySelector('button'));

      const tooltip = queryByRole('tooltip');
      expect(tooltip).toBeNull();
    });
  });

  describe('loading', () => {
    it('is applies the disabled attribute to the button element', () => {
      const {getByText} = render(
        <EzButton use="primary" loading>
          Click Me
        </EzButton>
      );

      expect(getByText('Click Me')).toHaveAttribute('disabled');
    });
  });

  describe('data-* props', () => {
    it('renders valid props for html elements', () => {
      const {container} = render(
        <EzButton use="primary" data-test="my-test-selector">
          Click Me
        </EzButton>
      );
      expect(container.outerHTML).toContain('data-test="my-test-selector"');
    });
  });

  it('should meet accessibility guidelines for buttons', async () => {
    const {container} = render(<EzButton use="primary">Click Me</EzButton>);
    const html = await axe(container.outerHTML);
    expect(html).toHaveNoViolations();
  });
});
