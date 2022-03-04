import React, {forwardRef} from 'react';
import {Ref, EzProgressProps} from './EzProgress.types';
import EzProgressMui from './Implementations/EzProgressMui/EzProgressMui';
import stitches from '../theme.config';

const PROGRESS_COLORS = {
  green: stitches.theme.colors.green100.value,
  yellow: stitches.theme.colors.yellow100.value,
  red: stitches.theme.colors.red100.value,
  blue: stitches.theme.colors.blue100.value,
  gray: stitches.theme.colors.gray200.value,
};

const EzProgress = forwardRef<Ref, EzProgressProps>(({value, goal, subgoal, color, label}, ref) => {
  const meetsGoal = value >= goal;
  const meetsSubGoal = value >= subgoal;
  const hasNumericValue = value && typeof value === 'number';

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
      <EzProgressMui
        value={progressValue}
        color={progressColor}
        boldDisplayValue={goal && subgoal && !meetsSubGoal}
        hasNumericValue={hasNumericValue}
      />
    </span>
  );
});

EzProgress.displayName = 'EzProgress';

export default EzProgress;
