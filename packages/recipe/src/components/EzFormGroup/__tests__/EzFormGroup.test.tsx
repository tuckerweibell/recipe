import React, {ComponentProps, FC} from 'react';
import {axe, render} from '../../../../test-utils';
import {EzFormGroupProps} from '../EzFormGroup.types';
import EzFormGroup from '../index';

const Component: FC<Partial<ComponentProps<typeof EzFormGroup>>> = (props: EzFormGroupProps) => (
  <EzFormGroup {...props} />
);

describe('EzFormGroup', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(<Component ariaLabel="testing" />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        default: (
          <EzFormGroup>
            <input type="text" />
          </EzFormGroup>
        ),
        row: (
          <EzFormGroup row>
            <input type="text" />
          </EzFormGroup>
        ),
        ariaLabel: (
          <EzFormGroup ariaLabel="Test Label">
            <input type="text" />
          </EzFormGroup>
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
