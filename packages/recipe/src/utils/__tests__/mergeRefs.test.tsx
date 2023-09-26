import React, {forwardRef} from 'react';
import {render} from '@testing-library/react';
import mergeRefs from '../mergeRefs';

describe('mergeRefs', () => {
  const TestComponent = forwardRef(function TestComponent(_, ref) {
    React.useImperativeHandle(ref, () => 'testValue');
    return null;
  });

  it('combines refs and reacts correctly to the component lifecycle', () => {
    const refAsFunc = jest.fn();
    const refAsObj = {current: undefined};
    const Example: React.FC<{visible: boolean}> = ({visible}) => {
      return visible ? <TestComponent ref={mergeRefs([refAsObj, refAsFunc])} /> : null;
    };

    // on mount the ref value gets set to "testValue"
    // both the function and the object ref should be notified
    const {rerender} = render(<Example visible />);
    expect(refAsFunc).toHaveBeenCalledTimes(1);
    expect(refAsFunc).toHaveBeenCalledWith('testValue');
    expect(refAsObj.current).toBe('testValue');

    // when the component dismounts, the ref value gets unset
    // both the function and the object ref should be notified
    rerender(<Example visible={false} />);
    expect(refAsFunc).toHaveBeenCalledTimes(2);
    expect(refAsFunc).toHaveBeenCalledWith(null);
    expect(refAsObj.current).toBe(null);
  });
});
