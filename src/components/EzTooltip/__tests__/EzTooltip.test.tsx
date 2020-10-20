import React from 'react';
import {Global, css} from '@emotion/core';
import {visualSnapshots} from 'sosia';
import {fireEvent} from '@testing-library/react';
import regressionTests from './EzTooltip.test.md';
import EzTooltip from '../EzTooltip';
import {fullRender as render} from '../../../jest-globals';

jest.unmock('../../EzPopover');

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
