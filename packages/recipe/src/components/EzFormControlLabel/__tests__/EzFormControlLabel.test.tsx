import {Radio} from '@mui/material';
import React, {ComponentProps, FC} from 'react';
import {axe, render} from '../../../../test-utils';
import EzFormControlLabel from '../index';

const Component: FC<Partial<ComponentProps<typeof EzFormControlLabel>>> = props => (
  <EzFormControlLabel label="test" control={<Radio />} {...props} />
);

describe('EzFormControlLabel', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(<Component />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
