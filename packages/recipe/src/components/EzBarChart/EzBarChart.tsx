import React, {forwardRef} from 'react';
import EzBarChartVictory from './Implementations/EzBarChartVictory';
import {EzBarChartProps, Ref} from './EzBarChart.types';

const EzBarChart = forwardRef<Ref, EzBarChartProps>(
  (
    {
      barColor,
      data,
      dependentAxisLabelFormatter,
      dependentAxisLabelValues,
      description,
      idPrefix,
      independentAxisLabelFormatter,
      independentAxisLabelValues,
      maxDependentValue,
      maxIndependentValue,
      title,
    },
    ref
  ) => (
    <EzBarChartVictory
      barColor={barColor}
      data={data}
      dependentAxisLabelFormatter={dependentAxisLabelFormatter}
      dependentAxisLabelValues={dependentAxisLabelValues}
      description={description}
      idPrefix={idPrefix}
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

EzBarChart.displayName = 'EzBarChart';

export default EzBarChart;
