import buildDataAttributes from '../buildDataAttributes';

describe('buildDataAttributes', () => {
  it('should map data attributes correctly', () => {
    const inputData = {
      testid: 'my-test-id',
      trackingid: 'my-tracking-id',
    };
    const outputData = {
      'data-testid': 'my-test-id',
      'data-trackingid': 'my-tracking-id',
    };

    expect(buildDataAttributes({data: inputData})).toEqual(outputData);
  });
});
