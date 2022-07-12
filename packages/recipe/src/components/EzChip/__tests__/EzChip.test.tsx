import React, {ComponentProps, FC} from 'react';
import {faCoffee} from '@fortawesome/free-solid-svg-icons/faCoffee';
import {axe, render, screen, userEvent} from '../../../../test-utils';
import EzChip from '../index';
import EzIcon from '../../EzIcon';

const Component: FC<Partial<ComponentProps<typeof EzChip>>> = props => (
  <EzChip label="test chip" {...props} />
);

describe('EzChip logic', () => {
  it('should call onClick when a clickable chip is clicked', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    render(<Component onClick={onClick} />);

    await user.click(screen.getByText(/test chip/i));
    expect(onClick).toHaveBeenCalled();
  });

  it('should call onDelete when a deletable chips icon is clicked', async () => {
    const onDelete = jest.fn();
    const user = userEvent.setup();
    const {container} = render(<Component onDelete={onDelete} />);

    await user.click(container.querySelector('svg'));
    expect(onDelete).toHaveBeenCalled();
  });

  it('should call onDelete when a deletable chip is focused and delete is pressed', async () => {
    const onDelete = jest.fn();
    const user = userEvent.setup();
    render(<Component onDelete={onDelete} />);

    await user.click(screen.getByText(/test chip/i));
    await user.keyboard('{delete}');
    expect(onDelete).toHaveBeenCalled();
  });

  it('should call onClick and onDelete correctly on a clickable and deletable chip', async () => {
    const onClick = jest.fn();
    const onDelete = jest.fn();
    const user = userEvent.setup();
    const {container} = render(<Component onClick={onClick} onDelete={onDelete} />);

    await user.click(screen.getByText(/test chip/i));
    await user.click(container.querySelector('svg'));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});

describe('EzChip', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(<Component />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        color: <EzChip label="test" color="primary" />,
        commonColor: <EzChip label="test" color="common.alert100" />,
        icon: <EzChip label="test" icon={<EzIcon icon={faCoffee} />} />,
        label: <EzChip label="test" />,
        onClick: <EzChip label="test" onClick={() => {}} />,
        onDelete: <EzChip label="test" onDelete={() => {}} />,
        size: <EzChip label="test" size="small" />,
        status: <EzChip label="test" variant="error" />,
        variant: <EzChip label="test" variant="outlined" />,
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
