import React, {useEffect} from 'react';
import {visualSnapshots} from 'sosia';
import {fireEvent} from '@testing-library/react';
import regressionTests from './EzTooltip.test.md';
import EzTooltip from '../EzTooltip';
import {fullRender as render} from '../../../jest-globals';

const StubBoundingClientRect = ({children, type, rect}) => {
  const spy = jest.spyOn(type.prototype, 'getBoundingClientRect').mockImplementation(() => rect);
  useEffect(() => spy.mockRestore);
  return children || null;
};

const scope = {EzTooltip, StubBoundingClientRect};

describe('EzTooltip', () => {
  visualSnapshots({markdown: regressionTests, scope: {...scope, fireEvent}});
  describe('interactions', () => {
    it('should show tooltip on focus', () => {
      const {container, getByRole} = render(
        <EzTooltip message="tooltip visible" position="horizontal">
          <input />
        </EzTooltip>
      );

      fireEvent.focus(container.querySelector('input'));

      const tooltip = getByRole('tooltip');

      expect(tooltip).toBeVisible();
    });
    it('should hide tooltip on blur', () => {
      const {container, getByRole} = render(
        <EzTooltip message="tooltip visible" position="horizontal">
          <input />
        </EzTooltip>
      );

      fireEvent.focus(container.querySelector('input'));

      const tooltip = getByRole('tooltip');

      expect(tooltip).toBeVisible();

      fireEvent.blur(container.querySelector('input'));

      expect(tooltip).not.toBeVisible();
    });
    it('should show tooltip on hover', () => {
      const {container, getByRole} = render(
        <EzTooltip message="tooltip visible" position="horizontal">
          <input />
        </EzTooltip>
      );

      fireEvent.mouseEnter(container.querySelector('input'));

      const tooltip = getByRole('tooltip');

      expect(tooltip).toBeVisible();
    });
    it('should hide tooltip on hover exit', () => {
      const {container, getByRole} = render(
        <EzTooltip message="tooltip visible" position="horizontal">
          <input />
        </EzTooltip>
      );

      fireEvent.mouseEnter(container.querySelector('input'));

      const tooltip = getByRole('tooltip');

      expect(tooltip).toBeVisible();

      fireEvent.mouseLeave(container.querySelector('input'));

      expect(tooltip).not.toBeVisible();
    });
  });
});
