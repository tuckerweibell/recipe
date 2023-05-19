import React, {forwardRef} from 'react';
import {VictoryAxis, VictoryLine, VictoryChart} from 'victory';
import {useTheme} from '@mui/material';
import {EzLineChartProps, Ref} from '../EzLineChart.types';
import {
  getVictoryChartStyles,
  getVictoryLineChartStyles,
} from '../../../themes/victory/getVictoryStyles';
import {useThemeColor} from '../../../themes/hooks/useThemeColor';

const EzLineChartVictory = forwardRef<Ref, EzLineChartProps>(
  (
    {
      data,
      description,
      dependentAxisLabelFormatter,
      dependentAxisLabelValues,
      independentAxisLabelFormatter,
      independentAxisLabelValues,
      lineColor,
      title,
    },
    ref
  ) => {
    const theme = useTheme();
    const {fontFamily} = theme.typography;
    const lineFillColor = useThemeColor(lineColor);
    const {
      chartHeight,
      chartPadding,
      chartWidth,
      dependentAxisStyle,
      domainPadding,
      independentAxisStyle,
      minDomain,
    } = getVictoryChartStyles({
      fontFamily,
    });
    const {lineStyle} = getVictoryLineChartStyles({
      lineFillColor,
    });
    return (
      <div ref={ref}>
        <VictoryChart
          domainPadding={domainPadding}
          padding={chartPadding}
          height={chartHeight}
          width={chartWidth}
          minDomain={minDomain}
          title={title}
          desc={description}
        >
          <VictoryAxis
            dependentAxis
            crossAxis={false}
            tickFormat={dependentAxisLabelFormatter}
            style={dependentAxisStyle}
            tickValues={dependentAxisLabelValues}
          />
          <VictoryAxis
            tickFormat={independentAxisLabelFormatter}
            style={independentAxisStyle}
            tickValues={independentAxisLabelValues}
          />
          <VictoryLine style={lineStyle} data={data} />
        </VictoryChart>
      </div>
    );
  }
);

EzLineChartVictory.displayName = 'EzLineChartVictory';

export default EzLineChartVictory;
