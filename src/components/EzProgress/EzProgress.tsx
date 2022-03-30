import React, {forwardRef} from 'react';
import {Ref, EzProgressProps} from './EzProgress.types';
import EzProgressMui from './Implementations/EzProgressMui/EzProgressMui';
import EzProgressMuiMetricOnly from './Implementations/EzProgressMui/EzProgressMuiMetricOnly';
import EzProgressMuiDisplayValue from './Implementations/EzProgressMui/components/EzProgressMuiDisplayValue';

const PROGRESS_COLORS = {
  green: 'common.primary100',
  yellow: 'common.yellow110',
  red: 'common.red100',
  blue: 'common.blue100',
  gray: 'common.neutral120',
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
        <span ref={ref} aria-label={label}>
          <EzProgressMuiMetricOnly>
            <EzProgressMuiDisplayValue
              value={value}
              boldDisplayValue={
                inverted ? hasNumericGoal && !meetsInvertedGoal : hasNumericGoal && !meetsGoal
              }
              hasNumericValue={hasNumericValue}
            />
          </EzProgressMuiMetricOnly>
        </span>
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

    return (
      <span ref={ref} aria-label={label}>
        <EzProgressMui value={progressValue} color={progressColor}>
          <EzProgressMuiDisplayValue
            boldDisplayValue={goal && subgoal && !meetsSubGoal}
            value={progressValue}
            hasNumericValue={hasNumericValue}
          />
        </EzProgressMui>
      </span>
    );
  }
);

EzProgress.displayName = 'EzProgress';

export default EzProgress;
