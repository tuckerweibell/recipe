import {Interpolation} from '@emotion/core';

const hitArea = 44;
const useVirtualTouchable = (): Interpolation => ({
  position: 'relative',
  ':after': {
    content: '""',
    position: 'absolute',
    left: -10,
    right: -10,
    transform: 'translateY(-50%)',
    minHeight: hitArea,
    minWidth: hitArea,
    height: '100%',
    top: '50%',
  },
});

export default useVirtualTouchable;
