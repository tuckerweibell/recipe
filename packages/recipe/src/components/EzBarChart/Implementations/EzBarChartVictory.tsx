import React, {forwardRef} from 'react';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
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
import {useUniqueId} from '../../../utils/hooks';

const EzBarChartVictory = forwardRef<Ref, EzBarChartProps>(
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
    const uniqueDependentAxisId = useUniqueId();
    const uniqueIndependentAxisId = useUniqueId();

    return (
      <div ref={ref}>
        <VictoryChart
          containerComponent={
            <VictoryVoronoiContainer containerId={idPrefix} voronoiDimension="x" activateData />
          }
          desc={description}
          domainPadding={domainPadding}
          height={chartHeight}
          maxDomain={{x: maxIndependentValue, y: maxDependentValue}}
          minDomain={minDomain}
          padding={chartPadding}
          title={title}
          width={chartWidth}
        >
          <VictoryAxis
            crossAxis={false}
            dependentAxis
            style={dependentAxisStyle}
            tickFormat={dependentAxisLabelFormatter}
            tickLabelComponent={<VictoryLabel id={uniqueDependentAxisId} />}
            tickValues={dependentAxisLabelValues}
          />
          <VictoryAxis
            style={independentAxisStyle}
            tickFormat={independentAxisLabelFormatter}
            tickLabelComponent={<VictoryLabel id={uniqueIndependentAxisId} />}
            tickValues={independentAxisLabelValues}
          />
          <VictoryBar
            barWidth={barWidth}
            data={data}
            labelComponent={
              <VictoryTooltip
                style={tooltipFont}
                flyoutStyle={flyoutStyle}
                flyoutPadding={flyoutPadding}
                pointerLength={pointerLength}
                dy={-6}
              />
            }
            labels={({datum}) => {
              const displayLabel = dependentAxisLabelFormatter
                ? dependentAxisLabelFormatter(datum.y)
                : datum.y;
              return `${displayLabel}`;
            }}
            style={barStyle}
          />
        </VictoryChart>
      </div>
    );
  }
);

EzBarChartVictory.displayName = 'EzBarChartVictory';

export default EzBarChartVictory;
