const GRID_COLOR = '#EFF1F4';
const TICK_COLOR = '#8B99A6';
const TOOLTIP_BACKGROUND = '#373D43';
const DASH_ARRAY = '10, 5';
const ROUND = 'round';
export const WHITE = 'white';
export const NONE = 'none';

export const getVictoryBarChartStyles = ({barFillColor}) => {
  return {
    barWidth: 10,
    barStyle: {data: {fill: barFillColor}},
  };
};

export const getVictoryLineChartStyles = ({lineFillColor}) => {
  return {
    lineStyle: {
      data: {
        stroke: lineFillColor,
        strokeWidth: 3,
        strokeLinecap: ROUND,
      },
    },
  };
};

export const getVictoryTooltipStyles = ({fontFamily}) => {
  return {
    tooltipFont: {fontFamily, fill: WHITE},
    flyoutStyle: {
      stroke: NONE,
      fill: TOOLTIP_BACKGROUND,
      strokeWidth: 2,
    },
    flyoutPadding: {top: 8, bottom: 8, left: 10, right: 10},
    pointerLength: 5,
  };
};

export const getVictoryChartStyles = ({fontFamily}) => {
  const tickLabels = {fontFamily, fontSize: 10, fill: TICK_COLOR, padding: 5};
  const noStroke = {stroke: NONE};
  const horizontalDashes = {
    stroke: GRID_COLOR,
    strokeDasharray: DASH_ARRAY,
    strokeLinecap: ROUND,
    strokeLinejoin: ROUND,
    fill: NONE,
    strokeWidth: NONE,
  };
  return {
    /* chart container */
    chartPadding: {left: 60, top: 30, bottom: 30, right: 30},
    chartWidth: 450,
    chartHeight: 250,
    domainPadding: {x: 10},
    minDomain: 0,

    /* axes */
    dependentAxisStyle: {
      axis: noStroke,
      grid: horizontalDashes,
      ticks: noStroke,
      tickLabels,
    },
    independentAxisStyle: {
      axis: horizontalDashes,
      grid: noStroke,
      ticks: noStroke,
      tickLabels,
    },
  };
};
