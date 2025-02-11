import React, {ComponentProps, FC} from 'react';
import {axe, render, screen, userEvent} from '../../../../test-utils';
import EzButton from '../EzButton';
import {EzButtonProps} from '../EzButton.types';

const Component: FC<Partial<ComponentProps<typeof EzButton>>> = (props: EzButtonProps) => (
  <EzButton {...props}>Test Button</EzButton>
);

describe('EzButton logic', () => {
  it('calls onClick when a button is clicked', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    render(<Component onClick={onClick} />);

    await user.click(screen.getByRole('button', {name: /test button/i}));
    expect(onClick).toHaveBeenCalled();
  });

  it('disables the button element', () => {
    render(<Component disabled />);

    expect(screen.getByRole('button', {name: /test button/i})).toHaveAttribute('disabled');
  });

  it('disables a loading button', () => {
    render(<Component loading />);

    expect(screen.getByRole('button', {name: /test button/i})).toHaveAttribute('disabled');
  });

  it('applies the correct data attributes', () => {
    render(<Component data={{testid: 'my-test-id', trackingid: 'my-tracking-id'}} />);

    expect(screen.getByRole('button', {name: /test button/i})).toHaveAttribute(
      'data-testid',
      'my-test-id'
    );
    expect(screen.getByRole('button', {name: /test button/i})).toHaveAttribute(
      'data-trackingid',
      'my-tracking-id'
    );
  });

  it('applies the filled variant', () => {
    render(<Component variant="filled" />);

    expect(screen.getByRole('button', {name: /test button/i})).toHaveClass('MuiButton-contained');
  });

  it('applies the outlined variant', () => {
    render(<Component variant="outlined" />);

    expect(screen.getByRole('button', {name: /test button/i})).toHaveClass('MuiButton-outlined');
  });

  it('applies the text variant', () => {
    render(<Component variant="text" />);

    expect(screen.getByRole('button', {name: /test button/i})).toHaveClass('MuiButton-text');
  });

  it('applies the inline variant', () => {
    render(<Component variant="inline" />);

    expect(screen.getByRole('button', {name: /test button/i})).toHaveClass('MuiButton-text');
  });
});

describe('EzButton', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(<Component />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        ariaLabel: <EzButton ariaLabel="test">Test Button</EzButton>,
        color: <EzButton color="common.red110">Test Button</EzButton>,
        disabled: <EzButton disabled>Test Button</EzButton>,
        endIcon: <EzButton endIcon={<svg />}>Test Button</EzButton>,
        fontSize: <EzButton fontSize="small">Test Button</EzButton>,
        loading: <EzButton loading>Test Button</EzButton>,
        onClick: <EzButton onClick={() => {}}>Test Button</EzButton>,
        size: <EzButton size="small">Test Button</EzButton>,
        startIcon: <EzButton startIcon={<svg />}>Test Button</EzButton>,
        variant: <EzButton variant="outlined">Test Button</EzButton>,
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
