import React from 'react';
import {render} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import {EzBarChart} from '../../index';

const DATA = [
  {x: 1, y: 1000},
  {x: 2, y: 1100},
  {x: 3, y: 1500},
  {x: 4, y: 1400},
  {x: 5, y: 1500},
  {x: 6, y: 1800},
  {x: 7, y: 2000},
  {x: 8, y: 4100},
  {x: 9, y: 2500},
  {x: 10, y: 2800},
  {x: 11, y: 3000},
  {x: 12, y: 3500},
];
const DEPENDENT_AXIS_LABEL_VALUES = [0, 1000, 2000, 3000, 4000, 5000, 6000];
const INDEPENDENT_AXIS_LABEL_VALUES = [2, 4, 6, 8, 10, 12];
const INDEPENDENT_AXIS_LABEL_FORMATTER = jest.fn();
const DEPENDENT_AXIS_LABEL_FORMATTER = jest.fn();
const TITLE = 'bar chart label';
const DESCRIPTION = 'bar chart description';
const ID_PREFIX = 'barChartExample';

/* start calculation for custom max y-value */
const HIGHTEST_DEPENDENT_VALUE = Math.max(...DATA.map(datum => datum.y));
const INCREMENT = 1000;
const MAX_DEPENDENT_VALUE = Math.ceil(HIGHTEST_DEPENDENT_VALUE / INCREMENT) * INCREMENT;
const MAX_INDEPENDENT_VALUE = 8;
/* end calculation for custom max y-value */

describe('EzBarChart logic', () => {
  it('Passing data, title, and description creates a bar chart', async () => {
    const {getByLabelText} = render(
      <EzBarChart
        barColor="error"
        idPrefix={ID_PREFIX}
        data={DATA}
        description={DESCRIPTION}
        dependentAxisLabelFormatter={DEPENDENT_AXIS_LABEL_FORMATTER}
        dependentAxisLabelValues={DEPENDENT_AXIS_LABEL_VALUES}
        independentAxisLabelFormatter={INDEPENDENT_AXIS_LABEL_FORMATTER}
        independentAxisLabelValues={INDEPENDENT_AXIS_LABEL_VALUES}
        title={TITLE}
      />
    );

    const chartTitle = getByLabelText(TITLE);
    const titleId = chartTitle.querySelector(`#${ID_PREFIX}-title`);

    expect(chartTitle).toBeInTheDocument();
    expect(titleId).toBeInTheDocument();
    expect(INDEPENDENT_AXIS_LABEL_FORMATTER).toHaveBeenCalledTimes(DATA.length);
    expect(DEPENDENT_AXIS_LABEL_FORMATTER).toHaveBeenCalledTimes(
      DEPENDENT_AXIS_LABEL_VALUES.length * 2
    );
  });

  it('Passing custom maxDependentValue and maxIndependentValue creates the correct axis labels', async () => {
    const formatter = value => value;

    const {queryByText, getByText} = render(
      <EzBarChart
        barColor="error"
        idPrefix={ID_PREFIX}
        data={DATA}
        description={DESCRIPTION}
        dependentAxisLabelFormatter={value => formatter(value)}
        independentAxisLabelFormatter={value => formatter(value)}
        maxDependentValue={MAX_DEPENDENT_VALUE}
        maxIndependentValue={MAX_INDEPENDENT_VALUE}
        title={TITLE}
      />
    );

    expect(getByText(`${MAX_DEPENDENT_VALUE}`)).toBeInTheDocument();
    expect(getByText(`${MAX_INDEPENDENT_VALUE}`)).toBeInTheDocument();
    expect(queryByText(`${MAX_DEPENDENT_VALUE + INCREMENT}`)).not.toBeInTheDocument();
    expect(queryByText(`${MAX_INDEPENDENT_VALUE + 1}`)).not.toBeInTheDocument();
  });
});

describe('EzBarChart', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzBarChart
        barColor="error"
        idPrefix={ID_PREFIX}
        data={DATA}
        description={DESCRIPTION}
        dependentAxisLabelFormatter={DEPENDENT_AXIS_LABEL_FORMATTER}
        dependentAxisLabelValues={DEPENDENT_AXIS_LABEL_VALUES}
        independentAxisLabelFormatter={INDEPENDENT_AXIS_LABEL_FORMATTER}
        independentAxisLabelValues={INDEPENDENT_AXIS_LABEL_VALUES}
        title={TITLE}
      />
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  it('should pass type checking', () => {
    [
      {
        description: <EzBarChart description={DESCRIPTION} title={TITLE} data={DATA} />,
        title: <EzBarChart description={DESCRIPTION} title={TITLE} data={DATA} />,
        dataProp: <EzBarChart description={DESCRIPTION} title={TITLE} data={DATA} />,
        dependentAxisLabelFormatter: (
          <EzBarChart
            description={DESCRIPTION}
            title={TITLE}
            data={DATA}
            dependentAxisLabelFormatter={DEPENDENT_AXIS_LABEL_FORMATTER}
          />
        ),
        dependentAxisLabelValues: (
          <EzBarChart
            description={DESCRIPTION}
            title={TITLE}
            data={DATA}
            dependentAxisLabelValues={DEPENDENT_AXIS_LABEL_VALUES}
          />
        ),
        independentAxisLabelFormatter: (
          <EzBarChart
            description={DESCRIPTION}
            title={TITLE}
            data={DATA}
            independentAxisLabelFormatter={INDEPENDENT_AXIS_LABEL_FORMATTER}
          />
        ),
        independentAxisLabelValues: (
          <EzBarChart
            description={DESCRIPTION}
            title={TITLE}
            data={DATA}
            independentAxisLabelValues={INDEPENDENT_AXIS_LABEL_VALUES}
          />
        ),
        barColor: (
          <EzBarChart description={DESCRIPTION} title={TITLE} data={DATA} barColor="alert" />
        ),
        idPrefix: (
          <EzBarChart description={DESCRIPTION} title={TITLE} data={DATA} idPrefix={ID_PREFIX} />
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
