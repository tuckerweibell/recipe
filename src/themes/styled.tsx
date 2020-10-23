import {Interpolation} from '@emotion/core';

const bps = {medium: '768px', large: '1061px'};

export function mq(bp: string, i: Interpolation): Interpolation {
  return {[`@media (min-width: ${bp in bps ? bps[bp] : bp})`]: i};
}
