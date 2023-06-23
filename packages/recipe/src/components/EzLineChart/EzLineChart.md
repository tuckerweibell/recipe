---
name: EzLineChart
title: Line Chart
category: Data
path: '/components/ez-line-chart'
tags: ['chart', 'graph', 'bar', 'line', 'progress']
---

Line charts are a [type of chart](https://help.flourish.studio/article/25-line-bar-and-pie-charts) consisting of a line that describe a dataset.

---

## Best Practices

- Line charts are used to a changing time series
- Line charts are good for showing trends over time

---

## Examples

### Basic line chart

Line charts should include a title and be contained in an `EzCard` container. The card title can optionally have a description and icon.

To chart a dataset as a line chart, provide a dataset as a `data` array of objects with `x` and `y` values.

For example:

`data = [{x: 'first', y: 1}, {x: 'second', y: 2}, {x: 'third', y: 3}];`

Always provide `title` and a detailed `description` for assistive devices.

Typically, the independent axis will be the x-axis and the dependent axis will be the y-axis. To format the point labels on each axis, optionally pass a function to each `dependentAxisLabelFormatter` and/or `independentAxisLabelFormatter`. To customize which labels appear on each axis, optionally pass an array of values of the same type as the respective `data` values to each `dependentAxisLabelValues` and/or `independentAxisLabelValues`.

Lines colors can be customized with [theme colors](/guides/theming/#colors). The default is `primary`.

If your dataset may sometimes be an empty array, work with design to render something other than a blank chart, perhaps an `EzBlankState`.

In some cases, like server-side rendering, a deterministic id may be needed. If needed, use prop `idPrefix`.

```jsx
() => {
  const DATA = [
    {x: 'January', y: 1000},
    {x: 'February', y: 1100},
    {x: 'March', y: 1500},
    {x: 'April', y: 1400},
    {x: 'May', y: 1500},
    {x: 'June', y: 1800},
    {x: 'July', y: 2000},
    {x: 'August', y: 2200},
    {x: 'September', y: 2500},
    {x: 'October', y: 2800},
    {x: 'November', y: 3000},
    {x: 'December', y: 3500},
  ];

  const SUM = '3,588';
  const METRIC = 'Total active users';
  const TIME_PERIOD = 'Last 12 months';
  const title = `${METRIC} over the ${TIME_PERIOD.toLowerCase()} totals ${SUM} users.`;
  const lineChartMonthlyList = DATA.map(
    datum => `${datum.x} active user count was ${datum.y}`
  ).join(', ');
  const description = `A line chart for ${METRIC} over the ${TIME_PERIOD.toLowerCase()} totalling ${SUM}. Active users for each month is as follows: ${lineChartMonthlyList}.`;

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const independentAxisLabelFormatter = t => `${t.substring(0, 3)}`;
  const dependentAxisLabelFormatter = t => `${formatter.format(t)}`;

  const DEPENDENT_AXIS_LABEL_VALUES = [0, 1000, 2000, 3000, 4000, 5000];

  return (
    <EzPage>
      <EzCard title={METRIC} subtitle={TIME_PERIOD} actions={<EzHeading size="1">{SUM}</EzHeading>}>
        {!DATA || DATA.length === 0 ? (
          <EzBlankState
            title="No data available"
            description="We may not have enough information yet."
          />
        ) : (
          <EzLineChart
            idPrefix="lineChartExample"
            data={DATA}
            description={description}
            dependentAxisLabelFormatter={dependentAxisLabelFormatter}
            dependentAxisLabelValues={DEPENDENT_AXIS_LABEL_VALUES}
            independentAxisLabelFormatter={independentAxisLabelFormatter}
            title={title}
          />
        )}
      </EzCard>
    </EzPage>
  );
};
```

---

## Line chart colors

`EzLineChart` supports theme palette properties (`primary`, `secondary`, `error`, `warning`, `info`, `alert`, `neutral`, and `success`) as well as all supported [theme colors](/guides/theming/#colors) (ex. `common.red100`). Colors should have high enough [contrast](https://webaim.org/resources/contrastchecker/) for accessibility.

The default `lineColor` is `primary`.

---

## Accessibility

See [WAI-ARIA accessibility guidelines](https://www.w3.org/TR/2000/NOTE-SVG-access-20000807/#Equivalent) for SVG charts.

All charts should have a `title` and `description`.

---

## Props

```jsx-hide-controls
  <PropsTable propsData={[
    {
      name: 'data*',
      types: ['Datum[]'],
      description: 'Array of data with x and y values of type string, number, array of strings, or function.',
    },
    {
      name: 'description*',
      types: ['string'],
      description: 'Detailed accessible description for the chart.',
    },
        {
      name: 'title*',
      types: ['string'],
      description: 'Accessible title for the chart.',
    },
    {
      name: 'idPrefix',
      types: ['string', 'number'],
      description: 'Deterministic id for the chart.',
    },
    {
      name: 'dependentAxisLabelFormatter',
      types: ['func'],
      description: 'The function to format the dependent axis points.',
    },
    {
      name: 'dependentAxisLabelValues',
      types: ['AxisLabelValue[]'],
      description: 'Array of axis label values to customize the dependent axis labels.',
    },
    {
      name: 'independentAxisLabelFormatter',
      types: ['func'],
      description: 'The function to format the independent axis points.',
    },
    {
      name: 'independentAxisLabelValues',
      types: ['AxisLabelValue[]'],
      description: 'Array of axis label values to customize the independent axis labels.',
    },
    {
      name: 'lineColor',
      types: ['EzThemeColors'],
      defaultValue: 'primary',
      description: 'Line chart line color.',
    },
  ]}>
  </PropsTable>
```

---

## Related components

- [EzProgress](/components/ez-progress)
- [EzBlankState](/components/ez-blank-state)
- [EzBarChart](/components/ez-bar-chart)
