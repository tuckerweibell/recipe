import React from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import {EzTimeline, EzTimelinePeriod, EzTimelineEvent} from '..';
import {EzPage} from '../..';

describe('EzTimeline', () => {
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
