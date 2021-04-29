import React from 'react';
import {visualSnapshots} from 'sosia';
import {render, fireEvent} from '@testing-library/react';
import regressionTests from './EzTooltip.test.md';
import EzTooltip from '../EzTooltip';
import {Global, css} from '../../../styles';

jest.unmock('../../../utils/hooks/usePopper');

const scope = {EzTooltip, Global, css};

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
