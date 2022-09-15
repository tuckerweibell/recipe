import React, {ComponentProps, FC} from 'react';
import {axe, render} from '../../../../test-utils';
import EzFormLabel from '../index';

const Component: FC<Partial<ComponentProps<typeof EzFormLabel>>> = ({children}) => (
  <EzFormLabel id="test">{children}</EzFormLabel>
);

describe('EzFormLabel', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(<Component />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
