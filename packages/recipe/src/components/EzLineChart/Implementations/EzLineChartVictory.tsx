import React, {forwardRef} from 'react';
import {
  VictoryAxis,
  VictoryLine,
  VictoryChart,
  VictoryScatter,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryClipContainer,
  VictoryLabel,
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
import {useUniqueId} from '../../../utils/hooks';

const EzLineChartVictory = forwardRef<Ref, EzLineChartProps>(
  (
    {
      idPrefix,
      data,
      description,
      dependentAxisLabelFormatter,
      dependentAxisLabelValues,
      independentAxisLabelFormatter,
      independentAxisLabelValues,
      lineColor,
      maxDependentValue,
      maxIndependentValue,
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

    const uniqueDependentAxisId = useUniqueId();
    const uniqueIndependentAxisId = useUniqueId();

    return (
      <div ref={ref}>
        <VictoryChart
          domainPadding={domainPadding}
          padding={chartPadding}
          height={chartHeight}
          width={chartWidth}
          maxDomain={{x: maxIndependentValue, y: maxDependentValue}}
          minDomain={minDomain}
          title={title}
          desc={description}
          containerComponent={
            <VictoryVoronoiContainer containerId={idPrefix} voronoiDimension="x" activateData />
          }
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
          <VictoryLine
            style={lineStyle}
            data={data}
            groupComponent={
              <VictoryClipContainer clipId={idPrefix ? `${idPrefix}-clip` : undefined} />
            }
          />
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
