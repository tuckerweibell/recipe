import React, {ComponentProps, FC} from 'react';
import {render} from '@testing-library/react';
import {ezTheme} from '../../../themes';
import {axe} from '../../../../test-utils';
import EzProvider from '../EzProvider';

const Component: FC<Partial<ComponentProps<typeof EzProvider>>> = () => (
  <EzProvider theme={ezTheme}>children</EzProvider>
);

describe('EzProvider', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(<Component />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
