---
name: EzBarChart
title: Bar Chart
category: Data
path: '/components/ez-bar-chart'
tags: ['chart', 'graph', 'bar', 'line', 'progress']
---

Bar charts are a [type of chart](https://help.flourish.studio/article/25-line-bar-and-pie-charts) consisting of a series of bars that describe a dataset.

---

## Best Practices

- Bar charts are used to show change over time, especially for a single series
- Bar charts are good for comparing relative size

---

## Examples

### Basic bar chart

Bar charts should include a title and be contained in an `EzCard`. The card title can optionally have a description and icon.

To chart a dataset as a bar chart, provide a dataset as a `data` array of objects with `x` and `y` values.

For example:

`data = [{x: 'first', y: 1}, {x: 'second', y: 2}, {x: 'third', y: 3}];`

Always provide `title` and a detailed `description` for assistive devices.

Typically, the independent axis will be the x-axis and the dependent axis will be the y-axis. To format the point labels on each axis, optionally pass a function to each `dependentAxisLabelFormatter` and/or `independentAxisLabelFormatter`. To customize which labels appear on each axis, optionally pass an array of values of the same type as the respective `data` values to each `dependentAxisLabelValues` and/or `independentAxisLabelValues`.

Bar colors can be customized with [theme colors](/guides/theming/#colors). The default is `primary`.

If your dataset may sometimes be an empty array, work with design to render something other than a blank chart, perhaps an `EzBlankState`.

```jsx
() => {
  const DATA = [
    {x: 'January', y: 100000},
    {x: 'February', y: 120000},
    {x: 'March', y: 145000},
    {x: 'April', y: 140000},
    {x: 'May', y: 180000},
    {x: 'June', y: 145000},
    {x: 'July', y: 200000},
    {x: 'August', y: 180000},
    {x: 'September', y: 200000},
    {x: 'October', y: 140000},
    {x: 'November', y: 170000},
    {x: 'December', y: 180000},
  ];

  const SUM = '$899,300';
  const METRIC = 'Total spend';
  const TIME_PERIOD = 'Last 12 months';
  const title = `${METRIC} over the ${TIME_PERIOD.toLowerCase()} totals ${SUM} dollars.`;
  const barChartMonthlyList = DATA.map(datum => `${datum.x} spend was ${datum.y} dollars`).join(
    ', '
  );
  const description = `A bar chart for ${METRIC} over the ${TIME_PERIOD.toLowerCase()} totalling ${SUM}. Spend for each month is as follows: ${barChartMonthlyList}.`;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const independentAxisLabelFormatter = t => `${t.substring(0, 3)}`;
  const dependentAxisLabelFormatter = t => `${formatter.format(t)}`;

  const DEPENDENT_AXIS_LABEL_VALUES = [0, 50000, 100000, 150000, 200000, 250000, 300000];

  return (
    <EzPage>
      <EzCard title={METRIC} subtitle={TIME_PERIOD} actions={<EzHeading size="1">{SUM}</EzHeading>}>
        {!DATA || DATA.length === 0 ? (
          <EzBlankState
            title="No data available"
            description="We may not have enough information yet."
          />
        ) : (
          <EzBarChart
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

## Bar chart colors

`EzBarChart` supports theme palette properties (`primary`, `secondary`, `error`, `warning`, `info`, `alert`, `neutral`, and `success`) as well as all supported [theme colors](/guides/theming/#colors) (ex. `common.red100`). Colors should have high enough [contrast](https://webaim.org/resources/contrastchecker/) for accessibility.

The default `barColor` is `primary`.

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
      name: 'barColor',
      types: ['EzThemeColors'],
      defaultValue: 'primary',
      description: 'Bar chart bar color.',
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
  ]}>
  </PropsTable>
```

---

## Related components

- [EzProgress](/components/ez-progress)
- [EzBlankState](/components/ez-blank-state)
- [EzLineChart](/components/ez-line-chart)
