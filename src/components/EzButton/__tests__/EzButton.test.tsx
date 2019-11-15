import React, {useEffect} from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {fireEvent} from 'react-testing-library';
import regressionTests from './EzButton.test.md';
import EzButton from '../EzButton';
import {EzLayout} from '../../index';
import {fullRender, renderToHtml} from '../../../jest-globals';

const StubBoundingClientRect = ({children, type, rect}) => {
  const spy = jest.spyOn(type.prototype, 'getBoundingClientRect').mockImplementation(() => rect);
  useEffect(() => spy.mockRestore);
  return children || null;
};

const scope = {EzButton, StubBoundingClientRect};

describe('EzButton', () => {
  visualSnapshots({markdown: regressionTests, scope: {...scope, fireEvent}});

  it('renders a button element by default', () => {
    const {getByText} = fullRender(<EzButton use="primary">Click Me</EzButton>);
    expect(getByText('Click Me').tagName).toEqual('BUTTON');
  });

  describe('disabled', () => {
    it('it disables the button element', () => {
      const {getByText} = fullRender(
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
      const {container, getByText, getByRole} = fullRender(
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
      const {container, queryByRole} = fullRender(
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
      const {getByText} = fullRender(
        <EzButton use="primary" loading>
          Click Me
        </EzButton>
      );

      expect(getByText('Click Me')).toHaveAttribute('disabled');
    });
  });

  describe('data-* props', () => {
    let actual;
    beforeEach(() => {
      actual = renderToHtml(
        <EzButton use="primary" data-test="my-test-selector">
          Click Me
        </EzButton>
      );
    });
    it('renders valid props for html elements', () => {
      expect(actual).toContain('data-test="my-test-selector"');
    });
  });

  it('should meet accessibility guidelines for buttons', async () => {
    const wrapper = renderToHtml(<EzButton use="primary">Click Me</EzButton>);
    const html = await axe(wrapper);
    expect(html).toHaveNoViolations();
  });
});
