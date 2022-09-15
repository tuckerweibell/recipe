import React, {ComponentProps, FC} from 'react';
import {axe, render} from '../../../../test-utils';
import EzRadio from '../index';

const Component: FC<Partial<ComponentProps<typeof EzRadio>>> = props => <EzRadio {...props} />;

describe('EzRadio', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(<Component />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        ariaLabel: <EzRadio ariaLabel="aria-label" />,
        checked: <EzRadio checked />,
        color: <EzRadio color="secondary" />,
        disabled: <EzRadio disabled />,
        name: <EzRadio name="radio-button" />,
        onChange: <EzRadio onChange={() => {}} />,
        size: <EzRadio size="small" />,
        value: <EzRadio value="one" />,
        variant: <EzRadio variant="outlined" />,
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
