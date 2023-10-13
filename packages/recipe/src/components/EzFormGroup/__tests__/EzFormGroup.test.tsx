import React, {ComponentProps, FC} from 'react';
import {axe, render} from '../../../../test-utils';
import {EzFormGroupProps} from '../EzFormGroup.types';
import EzCheckbox from '../../EzCheckbox';
import EzFormControl from '../../EzFormControl';
import EzFormControlLabel from '../../EzFormControlLabel';
import EzFormGroup from '../index';
import EzFormLabel from '../../EzFormLabel';

const Component: FC<Partial<ComponentProps<typeof EzFormGroup>>> = (props: EzFormGroupProps) => (
  <EzFormControl>
    <EzFormLabel id="testing">Test</EzFormLabel>
    <EzFormGroup {...props}>
      <EzFormControlLabel control={<EzCheckbox />} label="Test" value="test" />
    </EzFormGroup>
  </EzFormControl>
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
        default: <Component />,
        row: <Component row />,
        ariaLabel: <Component ariaLabel="testing" />,
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
