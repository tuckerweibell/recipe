import React, {forwardRef} from 'react';
import EzBarChartVictory from './Implementations/EzBarChartVictory';
import {EzBarChartProps, Ref} from './EzBarChart.types';

const EzBarChart = forwardRef<Ref, EzBarChartProps>(
  (
    {
      description,
      title,
      barColor,
      data,
      dependentAxisLabelFormatter,
      dependentAxisLabelValues,
      independentAxisLabelFormatter,
      independentAxisLabelValues,
    },
    ref
  ) => (
    <EzBarChartVictory
      barColor={barColor}
      data={data}
      description={description}
      dependentAxisLabelFormatter={dependentAxisLabelFormatter}
      dependentAxisLabelValues={dependentAxisLabelValues}
      independentAxisLabelFormatter={independentAxisLabelFormatter}
      independentAxisLabelValues={independentAxisLabelValues}
      ref={ref}
      title={title}
    />
  )
);

EzBarChart.defaultProps = {
  barColor: 'primary',
};

export default EzBarChart;
