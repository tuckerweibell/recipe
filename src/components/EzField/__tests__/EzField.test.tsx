import React from 'react';
import {visualSnapshots} from 'sosia';
import {axe} from 'jest-axe';
import {getByLabelText, fireEvent} from '@testing-library/react';
import Component from 'react-component-component';
import regressionTests from './EzField.test.md';
import markdown from '../EzField.md';
import EzField from '../EzField';
import {fullRender as render, renderToHtml} from '../../../jest-globals';
import {EzButton, EzFormLayout, EzLayout} from '../../index';
import Open from '../Open';
import Media from '../Media';

const scope = {EzButton, EzField, EzLayout, EzFormLayout, Component, Open, Media};

describe('EzField', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});

  it('should render with disabled input', () => {
    const {container} = render(<EzField label="Disabled input" disabled />);

    expect(getByLabelText(container, 'Disabled input')).toHaveAttribute('disabled');
  });

  it('should update character count as the user enters text', () => {
    const {container} = render(<EzField label="Character Name" maxLength={120} />);

    expect(container).toHaveTextContent('0/120');

    const input = getByLabelText(container, 'Character Name');

    fireEvent.change(input, {target: {value: 'Oscar the grouch'}});

    expect(container).toHaveTextContent('16/120');
  });

  it('should call provided onChange handler if the input changes', () => {
    const spy = jest.fn();
    const {container} = render(<EzField label="Basic Text" onChange={spy} />);

    const input = getByLabelText(container, 'Basic Text');

    fireEvent.change(input, {target: {value: 'new value'}});

    expect(spy).toHaveBeenCalled();
  });

  it('should NOT update character count if the provided onChange handler prevents default', () => {
    const {container} = render(
      <EzField label="Character Name" maxLength={120} onChange={e => e.preventDefault()} />
    );

    expect(container).toHaveTextContent('0/120');

    const input = getByLabelText(container, 'Character Name');

    fireEvent.change(input, {target: {value: 'Oscar the grouch'}});

    expect(container).toHaveTextContent('0/120');
  });

  it('should apply ref to the underlying input element', () => {
    const spy = jest.fn(el => {
      if (!el) return;
      expect(el.type).toEqual('text');
    });

    render(<EzField label="Character Name" ref={spy} />);

    expect.assertions(1);
  });

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzField label="Basic text" />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
