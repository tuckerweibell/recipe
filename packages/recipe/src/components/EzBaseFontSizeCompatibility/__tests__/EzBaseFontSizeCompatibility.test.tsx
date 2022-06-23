import React, {ComponentProps, FC} from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import EzBaseFontSizeCompatibility from '../EzBaseFontSizeCompatibility';

const Component: FC<Partial<ComponentProps<typeof EzBaseFontSizeCompatibility>>> = () => (
  <EzBaseFontSizeCompatibility />
);

describe('EzBaseFontSizeCompatibility', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(<Component />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
