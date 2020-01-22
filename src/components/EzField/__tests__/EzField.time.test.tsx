import {useTimeRangeOptions} from '../EzTimeInput';

describe('EzField', () => {
  it('should generate the correct time range options', () => {
    const timeRange = useTimeRangeOptions({start: '9:00 am', end: '5:00 pm', step: 60});

    expect(timeRange.length).toBe(9);
  });

  it('should generate the correct time range options (without space between time and meridiem)', () => {
    const timeRange = useTimeRangeOptions({start: '9:00am', end: '5:00pm', step: 60});

    expect(timeRange.length).toBe(9);
  });
});
