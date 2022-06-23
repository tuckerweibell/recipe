import React, {ComponentProps, FC} from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import EzField from '../EzField';

const Component: FC<Partial<ComponentProps<typeof EzField>>> = () => (
  <EzField type="textarea" label="test" />
);

describe('EzField', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(<Component />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
