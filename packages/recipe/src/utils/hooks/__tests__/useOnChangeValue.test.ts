import {renderHook} from '@testing-library/react-hooks';
import useOnChangeValue from '../useOnChangeValue';

describe('useOnValueChange', () => {
  it('should call the watch function when change occurs.', async () => {
    const onChange = jest.fn<void, [string, string]>();
    const {rerender} = renderHook(([value, change]) => useOnChangeValue(value, change), {
      initialProps: ['abc' as string, onChange] as const,
    });
    expect(onChange).not.toHaveBeenCalled();
    rerender(['1234', onChange]);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('1234', 'abc');
  });
});
