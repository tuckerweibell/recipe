import React, {ComponentProps, FC} from 'react';
import {axe, render} from '../../../../test-utils';
import EzBadge from '../index';

const Component: FC<Partial<ComponentProps<typeof EzBadge>>> = props => (
  <EzBadge value={props.value} {...props} />
);

describe('EzBadge logic', () => {
  it('should show value', () => {
    const component = render(<Component value={9} />);
    expect(component.queryByText('9')).toBeInTheDocument();
  });

  it('should hide badge', () => {
    const component = render(<Component value={9} hide />);
    expect(component.queryByText('9')).not.toBeInTheDocument();
  });

  it('should show badge', () => {
    const component = render(<Component value={9} hide={false} />);
    expect(component.queryByText('9')).toBeInTheDocument();
  });

  it('should show zero value', () => {
    const component = render(<Component value={0} showZero />);
    expect(component.queryByText('0')).toBeInTheDocument();
  });

  it('should not show zero value', () => {
    const component = render(<Component value={0} showZero={false} />);
    expect(component.queryByText('0')).not.toBeInTheDocument();
  });

  it('should show max value when value is above max value', () => {
    const component = render(<Component value={9} max={8} />);
    expect(component.queryByText('9')).not.toBeInTheDocument();
    expect(component.queryByText('8+')).toBeInTheDocument();
  });
});

describe('EzBadge', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(<Component />);
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        value: <EzBadge value="test" />,
        hide: <EzBadge value="test" hide />,
        showZero: <EzBadge value="test" hide showZero />,
        max: <EzBadge value="test" hide showZero max={99} />,
        minimize: <EzBadge value="test" hide showZero max={99} minimize />,
        alignX: <EzBadge value="test" hide showZero max={99} minimize alignX="left" />,
        alignY: (
          <EzBadge value="test" hide showZero max={99} minimize alignX="left" alignY="bottom" />
        ),
        overlap: (
          <EzBadge
            value="test"
            hide
            showZero
            max={99}
            minimize
            alignX="left"
            alignY="bottom"
            overlap="rectangular"
          />
        ),
        children: (
          <EzBadge
            value="test"
            hide
            showZero
            max={99}
            minimize
            alignX="left"
            alignY="bottom"
            overlap="rectangular"
          >
            <div>ezCater</div>
          </EzBadge>
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
