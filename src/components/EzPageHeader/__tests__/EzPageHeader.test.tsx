import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import markdown from '../EzPageHeader.md';
import EzPageHeader from '../EzPageHeader';
import {EzAlert, EzButton, EzCard, EzLayout, EzPage} from '../../index';
import {renderToHtml} from '../../../jest-globals';

const scope = {EzPageHeader, EzAlert, EzButton, EzCard, EzLayout, EzPage};

describe('EzHeading', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(
      <EzPageHeader
        title="Order # XYZ-123"
        breadcrumb={{
          label: 'Back to Orders',
          onClick: () => alert('Clicked back'),
        }}
      />
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
