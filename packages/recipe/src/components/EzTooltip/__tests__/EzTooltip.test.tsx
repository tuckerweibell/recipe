import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import EzTooltip from '../EzTooltip';

jest.unmock('../../../utils/hooks/usePopper');

describe('EzTooltip', () => {
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
      const {container, getByRole, queryByRole} = render(
        <EzTooltip message="tooltip visible" position="horizontal">
          <input />
        </EzTooltip>
      );

      fireEvent.focus(container.querySelector('input'));

      const tooltip = getByRole('tooltip');

      expect(tooltip).toBeVisible();

      fireEvent.blur(container.querySelector('input'));

      expect(queryByRole('tooltip')).toBeNull();
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
    it('should call onShowTooltip callback if hovering on tooltip', () => {
      const onShowTooltip = jest.fn();
      const {container} = render(
        <EzTooltip message="tooltip visible" position="horizontal" onShowTooltip={onShowTooltip}>
          <input />
        </EzTooltip>
      );

      fireEvent.mouseEnter(container.querySelector('input'));

      expect(onShowTooltip).toHaveBeenCalled();
    });
    it('should call onShowTooltip callback if focusing on tooltip', () => {
      const onShowTooltip = jest.fn();
      const {container} = render(
        <EzTooltip message="tooltip visible" position="horizontal" onShowTooltip={onShowTooltip}>
          <input />
        </EzTooltip>
      );

      fireEvent.focus(container.querySelector('input'));

      expect(onShowTooltip).toHaveBeenCalled();
    });
    it('should hide tooltip on hover exit', () => {
      const {container, getByRole, queryByRole} = render(
        <EzTooltip message="tooltip visible" position="horizontal">
          <input />
        </EzTooltip>
      );

      fireEvent.mouseEnter(container.querySelector('input'));

      const tooltip = getByRole('tooltip');

      expect(tooltip).toBeVisible();

      fireEvent.mouseLeave(container.querySelector('input'));

      expect(queryByRole('tooltip')).toBeNull();
    });
  });
});
