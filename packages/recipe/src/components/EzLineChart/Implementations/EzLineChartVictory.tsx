import React, {forwardRef} from 'react';
import {
  VictoryAxis,
  VictoryLine,
  VictoryChart,
  VictoryScatter,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory';
import {useTheme} from '@mui/material';
import {EzLineChartProps, Ref} from '../EzLineChart.types';
import {
  getVictoryChartStyles,
  getVictoryLineChartStyles,
  getVictoryTooltipStyles,
  WHITE,
  NONE,
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
    const {tooltipFont, flyoutStyle, flyoutPadding, pointerLength} = getVictoryTooltipStyles({
      fontFamily,
    });

    const ScatterPoint = props => {
      const {active} = props;
      return (
        <circle
          cx={props.x}
          cy={props.y}
          r={active ? 6 : 1}
          fill={lineFillColor}
          stroke={active ? WHITE : NONE}
          strokeWidth={active ? 3 : 0}
        />
      );
    };

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
          <VictoryLine style={lineStyle} data={data} />
          <VictoryScatter
            data={data}
            size={({active}) => (active ? 10 : 1)}
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
                dy={-10}
              />
            }
            dataComponent={<ScatterPoint />}
          />
        </VictoryChart>
      </div>
    );
  }
);

EzLineChartVictory.displayName = 'EzLineChartVictory';

export default EzLineChartVictory;
