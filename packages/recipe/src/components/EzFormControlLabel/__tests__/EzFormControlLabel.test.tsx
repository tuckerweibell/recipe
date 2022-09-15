import React, {ComponentProps, FC} from 'react';
import {axe, render} from '../../../../test-utils';
import EzRadio from '../../EzRadio';
import EzFormControlLabel from '../index';

const Component: FC<Partial<ComponentProps<typeof EzFormControlLabel>>> = props => (
  <EzFormControlLabel control={<EzRadio />} disabled={false} label="test" value="" {...props} />
);

describe('EzFormControlLabel', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(<Component />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
