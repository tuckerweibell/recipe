import React, {forwardRef} from 'react';
import Box from '@mui/material/Box';
import {Ref, EzProgressProps} from './EzProgress.types';
import EzProgressMui from './Implementations/EzProgressMui/EzProgressMui';
import EzProgressMuiMetricOnly from './Implementations/EzProgressMui/EzProgressMuiMetricOnly';
import EzProgressMuiDisplayValue from './Implementations/EzProgressMui/components/EzProgressMuiDisplayValue';

const PROGRESS_COLORS = {
  green: 'common.green100',
  yellow: 'common.yellow100',
  red: 'common.red100',
  blue: 'common.blue100',
  gray: 'common.grey120',
};

const isMetricNumeric = metric => (metric && typeof metric === 'number') || metric === 0;

const EzProgress = forwardRef<Ref, EzProgressProps>(
  ({value, goal, subgoal, color, label, metricOnly, inverted}, ref) => {
    const meetsGoal = value >= goal;
    const meetsSubGoal = value >= subgoal;
    const meetsInvertedGoal = value <= goal;
    const hasNumericValue = isMetricNumeric(value);
    const hasNumericGoal = isMetricNumeric(goal);

    if (metricOnly) {
      return (
        <Box component="span" ref={ref} aria-label={label} margin="auto">
          <EzProgressMuiMetricOnly>
            <EzProgressMuiDisplayValue
              value={value}
              boldDisplayValue={
                inverted ? hasNumericGoal && !meetsInvertedGoal : hasNumericGoal && !meetsGoal
              }
              hasNumericValue={hasNumericValue}
            />
          </EzProgressMuiMetricOnly>
        </Box>
      );
    }

    const calculateProgressColorFromGoals = () => {
      if (meetsGoal) return PROGRESS_COLORS.green;
      if (!meetsGoal && meetsSubGoal) return PROGRESS_COLORS.yellow;
      return PROGRESS_COLORS.red;
    };

    let progressColor;
    if (!hasNumericValue) progressColor = PROGRESS_COLORS.gray;
    else if (goal && subgoal) progressColor = calculateProgressColorFromGoals();
    else progressColor = PROGRESS_COLORS[color];

    let progressValue;

    if (value > 100) progressValue = 100;
    else if (value < 0) progressValue = 0;
    else progressValue = value;

    // the minimum value is 1, so that a small amount of the chart is red and not just a grey circle
    const progressValueChart = value < 1 ? 1 : value;

    return (
      <Box component="span" ref={ref} margin="auto">
        <EzProgressMui color={progressColor} label={label} value={progressValueChart}>
          <EzProgressMuiDisplayValue
            boldDisplayValue={goal && subgoal && !meetsSubGoal}
            value={progressValue}
            hasNumericValue={hasNumericValue}
          />
        </EzProgressMui>
      </Box>
    );
  }
);

EzProgress.displayName = 'EzProgress';

export default EzProgress;
