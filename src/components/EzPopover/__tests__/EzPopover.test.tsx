import React from 'react';
import {axe} from 'jest-axe';
import EzPopover from '../EzPopover';
import {renderToHtml} from '../../../jest-globals';

describe('EzPopover', () => {
  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(
      <EzPopover targetRef={{current: document.createElement('div')}}>
        <div>Hi!</div>
      </EzPopover>
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
