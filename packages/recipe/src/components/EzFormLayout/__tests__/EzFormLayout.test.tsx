import React from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import EzField from '../../EzField';
import EzFormLayout from '../EzFormLayout';

describe('EzFormLayout', () => {
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
