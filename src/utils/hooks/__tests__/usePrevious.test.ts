import {renderHook} from '@testing-library/react-hooks';
import usePrevious from '../usePrevious';

describe('usePrevious', () => {
  it('should initialize to null', () => {
    const {result} = renderHook(usePrevious, {initialProps: 'abc'});
    expect(result.current[0]).toBeNull();
    expect(result.current[1]).toEqual(false);
  });

  it('should update to previous value', () => {
    const {rerender, result} = renderHook(usePrevious, {initialProps: '🐱'});
    rerender('🦊');
    expect(result.current[0]).toEqual('🐱');
    expect(result.current[1]).toEqual(true);
  });
});
