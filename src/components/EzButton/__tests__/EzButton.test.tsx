import React from 'react';
import EzButton from '../EzButton';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from '../EzButton.md';
import {EzLayout} from '../../index';
import {fullRender, renderToHtml} from '../../../jest-globals';

const scope = {EzButton, EzLayout};

describe('EzButton', () => {
  visualSnapshots({markdown, scope});

  it('renders a button element by default', () => {
    const {getByText} = fullRender(<EzButton use="primary">Click Me</EzButton>);
    expect(getByText('Click Me').tagName).toEqual('BUTTON');
  });

  describe('disabled', () => {
    it('it disables the button element', () => {
      const {getByText} = fullRender(
        <EzButton use="primary" disabled={true}>
          Click Me
        </EzButton>
      );

      expect(getByText('Click Me')).toHaveAttribute('disabled');
    });
  });

  describe('loading', () => {
    it('is applies the disabled attribute to the button element', () => {
      const {getByText} = fullRender(
        <EzButton use="primary" loading={true}>
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
