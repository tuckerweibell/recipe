import React, {forwardRef} from 'react';
import EzBarChartVictory from './Implementations/EzBarChartVictory';
import {EzBarChartProps, Ref} from './EzBarChart.types';

const EzBarChart = forwardRef<Ref, EzBarChartProps>(
  (
    {
      idPrefix,
      description,
      title,
      barColor,
      data,
      dependentAxisLabelFormatter,
      dependentAxisLabelValues,
      independentAxisLabelFormatter,
      independentAxisLabelValues,
      maxDependentValue,
      maxIndependentValue,
    },
    ref
  ) => (
    <EzBarChartVictory
      barColor={barColor}
      idPrefix={idPrefix}
      data={data}
      description={description}
      dependentAxisLabelFormatter={dependentAxisLabelFormatter}
      dependentAxisLabelValues={dependentAxisLabelValues}
      independentAxisLabelFormatter={independentAxisLabelFormatter}
      independentAxisLabelValues={independentAxisLabelValues}
      maxDependentValue={maxDependentValue}
      maxIndependentValue={maxIndependentValue}
      ref={ref}
      title={title}
    />
  )
);

EzBarChart.defaultProps = {
  barColor: 'primary',
};

export default EzBarChart;
