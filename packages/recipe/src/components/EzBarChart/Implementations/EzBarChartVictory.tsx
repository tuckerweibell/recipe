import React, {forwardRef} from 'react';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory';
import {useTheme} from '@mui/material';
import {EzBarChartProps, Ref} from '../EzBarChart.types';
import {
  getVictoryBarChartStyles,
  getVictoryChartStyles,
  getVictoryTooltipStyles,
} from '../../../themes/victory/getVictoryStyles';
import {useThemeColor} from '../../../themes/hooks/useThemeColor';

const EzBarChartVictory = forwardRef<Ref, EzBarChartProps>(
  (
    {
      barColor,
      data,
      description,
      dependentAxisLabelFormatter,
      dependentAxisLabelValues,
      independentAxisLabelFormatter,
      independentAxisLabelValues,
      title,
    },
    ref
  ) => {
    const theme = useTheme();
    const {fontFamily} = theme.typography;
    const barFillColor = useThemeColor(barColor);
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
    const {barStyle, barWidth} = getVictoryBarChartStyles({
      barFillColor,
    });
    const {tooltipFont, flyoutStyle, flyoutPadding, pointerLength} = getVictoryTooltipStyles({
      fontFamily,
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
          containerComponent={<VictoryVoronoiContainer voronoiDimension="x" activateData />}
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
          <VictoryBar
            style={barStyle}
            barWidth={barWidth}
            data={data}
            labels={({datum}) => {
              const displayLabel = dependentAxisLabelFormatter
                ? dependentAxisLabelFormatter(datum.y)
                : datum.y;
              return `${displayLabel}`;
            }}
            labelComponent={
              <VictoryTooltip
                style={tooltipFont}
                flyoutStyle={flyoutStyle}
                flyoutPadding={flyoutPadding}
                pointerLength={pointerLength}
                dy={-6}
              />
            }
          />
        </VictoryChart>
      </div>
    );
  }
);

EzBarChartVictory.displayName = 'EzBarChartVictory';

export default EzBarChartVictory;
