/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {axe} from 'jest-axe';
import {css} from 'emotion';
import {visualSnapshots} from 'sosia';
import {fireEvent, cleanup} from 'react-testing-library';
import regressionTests from './EzToggle.test.md';
import markdown from '../EzToggle.md';
import EzToggle from '../EzToggle';
import {renderToHtml, fullRender} from '../../../jest-globals';

const scope = {EzToggle, css};

describe('EzToggle', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});
  afterEach(cleanup);

  it('calls the provided click handler when the input is clicked', () => {
    const spy = jest.fn();

    const {queryByLabelText} = fullRender(
      <label htmlFor="toggle">
        <EzToggle id="toggle" onChange={spy} checked />
        <span>Toggle me</span>
      </label>
    );

    const toggle = queryByLabelText('Toggle me');

    fireEvent.click(toggle);

    expect(spy).toHaveBeenCalled();
  });

  it('calls the provided click handler when the stylized container is clicked', () => {
    const spy = jest.fn();

    const {queryByLabelText} = fullRender(
      <label htmlFor="toggle">
        <EzToggle id="toggle" onChange={spy} checked />
        <span>Toggle me</span>
      </label>
    );

    const toggle = queryByLabelText('Toggle me');

    fireEvent.click(toggle.parentNode);

    expect(spy).toHaveBeenCalled();
  });

  it('submits the correct input state when using uncontrolled input', () => {
    const {queryByLabelText} = fullRender(
      <label htmlFor="toggle">
        <EzToggle id="toggle" />
        <span>Toggle me</span>
      </label>
    );

    const toggle = queryByLabelText('Toggle me');

    expect(toggle.checked).toBe(false);

    fireEvent.click(toggle.parentNode);

    expect(toggle.checked).toBe(true);
  });

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(
      <label htmlFor="toggle">
        <EzToggle id="toggle" onChange={() => {}} checked />
        <span>Toggle me</span>
      </label>
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
