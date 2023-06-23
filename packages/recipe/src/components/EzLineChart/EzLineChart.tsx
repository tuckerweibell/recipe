import React, {forwardRef} from 'react';
import EzLineChartVictory from './Implementations/EzLineChartVictory';
import {EzLineChartProps, Ref} from './EzLineChart.types';

const EzLineChart = forwardRef<Ref, EzLineChartProps>(
  (
    {
      idPrefix,
      data,
      description,
      lineColor,
      dependentAxisLabelFormatter,
      dependentAxisLabelValues,
      independentAxisLabelFormatter,
      independentAxisLabelValues,
      title,
    },
    ref
  ) => (
    <EzLineChartVictory
      idPrefix={idPrefix}
      data={data}
      description={description}
      dependentAxisLabelFormatter={dependentAxisLabelFormatter}
      dependentAxisLabelValues={dependentAxisLabelValues}
      independentAxisLabelFormatter={independentAxisLabelFormatter}
      independentAxisLabelValues={independentAxisLabelValues}
      lineColor={lineColor}
      ref={ref}
      title={title}
    />
  )
);

EzLineChart.defaultProps = {
  lineColor: 'primary',
};

export default EzLineChart;
