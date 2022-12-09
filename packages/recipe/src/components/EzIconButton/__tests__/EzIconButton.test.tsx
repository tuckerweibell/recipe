import React, {ComponentProps, FC} from 'react';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {axe, render, screen, userEvent} from '../../../../test-utils';
import EzIconButton from '../EzIconButton';
import EzIcon from '../../EzIcon';
import {EzIconButtonProps} from '../EzIconButton.types';

const Component: FC<Partial<ComponentProps<typeof EzIconButton>>> = (props: EzIconButtonProps) => (
  <EzIconButton ariaLabel="test" {...props}>
    <EzIcon icon={faCoffee} />
  </EzIconButton>
);

describe('EzIconButton logic', () => {
  it('calls onClick when an icon button is clicked', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    render(<Component onClick={onClick} />);

    await user.click(screen.getByRole('button', {name: /test/i}));
    expect(onClick).toHaveBeenCalled();
  });

  it('disables the icon button element', () => {
    render(<Component disabled />);

    expect(screen.getByRole('button', {name: /test/i})).toHaveAttribute('disabled');
  });
});

describe('EzIconButton', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(<Component />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        ariaLabel: (
          <EzIconButton ariaLabel="test">
            <EzIcon icon={faCoffee} />
          </EzIconButton>
        ),
        ariaHidden: (
          <EzIconButton ariaLabel="test" ariaHidden>
            <EzIcon icon={faCoffee} />
          </EzIconButton>
        ),
        color: (
          <EzIconButton ariaLabel="test" color="common.alert100">
            <EzIcon icon={faCoffee} />
          </EzIconButton>
        ),
        disabled: (
          <EzIconButton ariaLabel="test" disabled>
            <EzIcon icon={faCoffee} />
          </EzIconButton>
        ),
        onClick: (
          <EzIconButton ariaLabel="test" onClick={() => {}}>
            <EzIcon icon={faCoffee} />
          </EzIconButton>
        ),
        onKeyDown: (
          <EzIconButton ariaLabel="test" onKeyDown={() => {}}>
            <EzIcon icon={faCoffee} />
          </EzIconButton>
        ),
        size: (
          <EzIconButton ariaLabel="test" size="small">
            <EzIcon icon={faCoffee} />
          </EzIconButton>
        ),
        type: (
          <EzIconButton ariaLabel="test" type="submit">
            <EzIcon icon={faCoffee} />
          </EzIconButton>
        ),
        variant: (
          <EzIconButton ariaLabel="test" variant="outlined">
            <EzIcon icon={faCoffee} />
          </EzIconButton>
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
