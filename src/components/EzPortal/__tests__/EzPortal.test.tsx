import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from '../EzPortal.md';
import EzPortal from '../EzPortal';
import {renderToHtml} from '../../../jest-globals';

const scope = {EzPortal};

describe('EzPortal', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(
      <EzPortal>
        <div>Stuff goes here</div>
      </EzPortal>
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
