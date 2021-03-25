import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import markdown from '../EzFormLayout.md';
import EzFormLayout from '../EzFormLayout';
import {EzField, EzLayout} from '../..';

const scope = {EzField, EzLayout, EzFormLayout};

describe('EzFormLayout', () => {
  visualSnapshots({markdown, scope});

  const SampleLayout = () => (
    <EzFormLayout>
      <EzField label="First field" />
      <EzField label="Second field" />
    </EzFormLayout>
  );

  it('should meet accessibility guidelines', async () => {
    const {container} = render(<SampleLayout />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should forward className and refs', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <EzFormLayout ref={ref} className="custom-class-name">
        <EzField label="First field" />
        <EzField label="Second field" />
      </EzFormLayout>
    );

    expect(ref.current.className).toMatch(/custom-class-name/);
  });

  it('should pass type checking', () => {
    [
      {
        noProps: (
          <EzFormLayout>
            <EzField label="First field" />
            <EzField label="Second field" />
          </EzFormLayout>
        ),
        domProps: (
          <EzFormLayout
            // can forward class name
            className="custom-class"
            // can pass arbitrary data-* attributes
            data-custom-tag="foo-bar"
            // can pass boolean data-* attributes
            data-bool
            // can pass aria-* attributes
            aria-describedby="#description"
            // can pass html attributes
            hidden
            // can forward ref
            ref={React.createRef()}
          >
            <EzField label="First field" />
            <EzField label="Second field" />
          </EzFormLayout>
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
