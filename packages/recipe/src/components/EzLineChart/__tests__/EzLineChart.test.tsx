import React from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import {EzLineChart} from '../../index';

const DATA = [
  {x: 1, y: 1000},
  {x: 2, y: 1100},
  {x: 3, y: 1500},
  {x: 4, y: 1400},
  {x: 5, y: 1500},
  {x: 6, y: 1800},
  {x: 7, y: 2000},
  {x: 8, y: 2200},
  {x: 9, y: 2500},
  {x: 10, y: 2800},
  {x: 11, y: 3000},
  {x: 12, y: 3500},
];
const DEPENDENT_AXIS_LABEL_VALUES = [0, 1000, 2000, 3000, 4000, 5000];
const INDEPENDENT_AXIS_LABEL_VALUES = [2, 4, 6, 8, 10, 12];
const INDEPENDENT_AXIS_LABEL_FORMATTER = jest.fn();
const DEPENDENT_AXIS_LABEL_FORMATTER = jest.fn();
const LABEL = 'line chart label';
const DESCRIPTION = 'line chart description';

describe('EzLineChart logic', () => {
  it('Passing data, title, and description creates a line chart', async () => {
    const {getByLabelText} = render(
      <EzLineChart
        data={DATA}
        description={DESCRIPTION}
        dependentAxisLabelFormatter={DEPENDENT_AXIS_LABEL_FORMATTER}
        dependentAxisLabelValues={DEPENDENT_AXIS_LABEL_VALUES}
        independentAxisLabelFormatter={INDEPENDENT_AXIS_LABEL_FORMATTER}
        independentAxisLabelValues={INDEPENDENT_AXIS_LABEL_VALUES}
        lineColor="error"
        title={LABEL}
      />
    );

    expect(getByLabelText(LABEL)).toBeDefined();
    expect(INDEPENDENT_AXIS_LABEL_FORMATTER).toHaveBeenCalledTimes(
      INDEPENDENT_AXIS_LABEL_VALUES.length
    ); // not showing all y values on y-axis
    expect(DEPENDENT_AXIS_LABEL_FORMATTER).toHaveBeenCalledTimes(
      DEPENDENT_AXIS_LABEL_VALUES.length
    ); // not showing all x values on x-axis
  });
});

describe('EzLineChart', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzLineChart
        data={DATA}
        description={DESCRIPTION}
        dependentAxisLabelFormatter={DEPENDENT_AXIS_LABEL_FORMATTER}
        dependentAxisLabelValues={DEPENDENT_AXIS_LABEL_VALUES}
        independentAxisLabelFormatter={INDEPENDENT_AXIS_LABEL_FORMATTER}
        independentAxisLabelValues={INDEPENDENT_AXIS_LABEL_VALUES}
        lineColor="error"
        title={LABEL}
      />
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        description: <EzLineChart description={DESCRIPTION} title={LABEL} data={DATA} />,
        title: <EzLineChart description={DESCRIPTION} title={LABEL} data={DATA} />,
        dataProp: <EzLineChart description={DESCRIPTION} title={LABEL} data={DATA} />,
        dependentAxisLabelFormatter: (
          <EzLineChart
            description={DESCRIPTION}
            title={LABEL}
            data={DATA}
            dependentAxisLabelFormatter={DEPENDENT_AXIS_LABEL_FORMATTER}
          />
        ),
        dependentAxisLabelValues: (
          <EzLineChart
            description={DESCRIPTION}
            title={LABEL}
            data={DATA}
            dependentAxisLabelValues={DEPENDENT_AXIS_LABEL_VALUES}
          />
        ),
        independentAxisLabelFormatter: (
          <EzLineChart
            description={DESCRIPTION}
            title={LABEL}
            data={DATA}
            independentAxisLabelFormatter={INDEPENDENT_AXIS_LABEL_FORMATTER}
          />
        ),
        independentAxisLabelValues: (
          <EzLineChart
            description={DESCRIPTION}
            title={LABEL}
            data={DATA}
            independentAxisLabelValues={INDEPENDENT_AXIS_LABEL_VALUES}
          />
        ),
        lineColor: (
          <EzLineChart description={DESCRIPTION} title={LABEL} data={DATA} lineColor="alert" />
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
