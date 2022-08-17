import React, {ComponentProps, FC} from 'react';
import {FormControlLabel, Radio} from '@mui/material';
import {axe, render} from '../../../../test-utils';
import EzRadioGroup from '../index';

const Component: FC<Partial<ComponentProps<typeof EzRadioGroup>>> = ({children}) => (
  <EzRadioGroup>{children}</EzRadioGroup>
);

describe('EzRadioGroup', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <Component>
        <FormControlLabel label="Option" control={<Radio />} />
      </Component>
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
