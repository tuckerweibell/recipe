import React, {ComponentProps, FC} from 'react';
import {axe, render} from '../../../../test-utils';
import EzCheckbox from '../index';
import {EzCheckboxProps} from '../EzCheckbox.types';

const Component: FC<Partial<ComponentProps<typeof EzCheckbox>>> = (props: EzCheckboxProps) => (
  <EzCheckbox {...props} />
);

describe('EzCheckbox', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(<Component ariaLabel="testing" />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        ariaLabel: <EzCheckbox ariaLabel="aria-label" />,
        checked: <EzCheckbox checked />,
        color: <EzCheckbox color="secondary" />,
        defaultChecked: <EzCheckbox defaultChecked />,
        disabled: <EzCheckbox disabled />,
        onChange: <EzCheckbox onChange={() => {}} />,
        size: <EzCheckbox size="small" />,
        value: <EzCheckbox value="one" />,
        variant: <EzCheckbox variant="outlined" />,
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
