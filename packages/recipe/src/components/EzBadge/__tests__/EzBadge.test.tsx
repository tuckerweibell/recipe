import React, {ComponentProps, FC} from 'react';
import {axe, render} from '../../../../test-utils';
import EzBadge from '../index';

const Component: FC<Partial<ComponentProps<typeof EzBadge>>> = props => (
  <EzBadge value={props.value} {...props} />
);

describe('EzBadge logic', () => {
  /**
   * Insert your unit tests here to validate your component
   */
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
    const component = render(<Component value={9} showZero />);
    expect(component.queryByText('0')).not.toBeInTheDocument();
  });
  it('should not show zero value', () => {
    const component = render(<Component value={9} showZero={false} />);
    expect(component.queryByText('0')).not.toBeInTheDocument();
    expect(component.queryByText('9')).toBeInTheDocument();
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
    /**
     * Check all combinations of prop types for type errors
     */
    [
      {
        value: <EzBadge value="test" />,
        variant: <EzBadge value="test" variant="primary" />,
        backgroundColor: <EzBadge value="test" backgroundColor="common.blue100" />,
        fontColor: (
          <EzBadge value="test" backgroundColor="common.blue100" fontColor="common.neutral100" />
        ),
        hide: <EzBadge value="test" variant="primary" hide />,
        showZero: <EzBadge value="test" variant="primary" hide showZero />,
        max: <EzBadge value="test" variant="primary" hide showZero max={99} />,
        minimize: <EzBadge value="test" variant="primary" hide showZero max={99} minimize />,
        alignX: (
          <EzBadge value="test" variant="primary" hide showZero max={99} minimize alignX="left" />
        ),
        alignY: (
          <EzBadge
            value="test"
            variant="primary"
            hide
            showZero
            max={99}
            minimize
            alignX="left"
            alignY="bottom"
          />
        ),
        overlap: (
          <EzBadge
            value="test"
            variant="primary"
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
            variant="primary"
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
