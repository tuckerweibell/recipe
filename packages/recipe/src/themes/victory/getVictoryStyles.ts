const GRID_COLOR = '#EFF1F4';
const TICK_COLOR = '#8B99A6';

export const getVictoryBarChartStyles = ({barFillColor}) => {
  return {
    barWidth: 10,
    barStyle: {data: {fill: barFillColor}},
  };
};

export const getVictoryChartStyles = ({fontFamily}) => {
  const tickLabels = {fontFamily, fontSize: 10, fill: TICK_COLOR, padding: 5};
  const noStroke = {stroke: 'none'};
  const horizontalDashes = {
    stroke: GRID_COLOR,
    strokeDasharray: '10, 5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    fill: 'none',
    strokeWidth: 'none',
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
