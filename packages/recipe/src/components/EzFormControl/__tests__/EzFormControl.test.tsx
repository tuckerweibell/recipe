import React, {ComponentProps, FC} from 'react';
import {axe, render} from '../../../../test-utils';
import EzFormControl from '../index';

const Component: FC<Partial<ComponentProps<typeof EzFormControl>>> = ({children}) => (
  <EzFormControl>{children}</EzFormControl>
);

describe('EzFormControl', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(<Component />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        fullWidth: <EzFormControl fullWidth>Full Width Form</EzFormControl>,
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
