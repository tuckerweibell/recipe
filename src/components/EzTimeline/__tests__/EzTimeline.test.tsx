import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import markdown from '../EzTimeline.md';
import {EzTimeline, EzTimelinePeriod, EzTimelineEvent} from '..';
import {EzPage, EzButton, EzStatus} from '../..';
import regressionTests from './EzTimeline.test.md';

const scope = {EzTimeline, EzTimelinePeriod, EzTimelineEvent, EzPage, EzButton, EzStatus};

describe('EzTimeline', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});

  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzPage>
        <EzTimeline
          expandable={{expandLabel: 'Show Older Events', onClick: e => e.preventDefault()}}
        >
          <EzTimelinePeriod label="Recent">
            <EzTimelineEvent title="Phone Call" time="11/15/2019 at 2:30PM EST">
              <p>$472.11 · Store #004, 101 Arch St. Boston MA 02110</p>
            </EzTimelineEvent>
          </EzTimelinePeriod>
        </EzTimeline>
      </EzPage>
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
