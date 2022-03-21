export type Ref = HTMLDivElement;

type EzProgressColors = 'red' | 'yellow' | 'green' | 'blue';

interface EzBasicProgressProps {
  value?: number;
  label: string;
}

interface EzProgressMetricProps extends EzBasicProgressProps {
  metricOnly: boolean;
  goal: number;
  inverted?: boolean;
  color?: never;
  subgoal?: never;
}

interface EzProgressGoalProps extends EzBasicProgressProps {
  goal: number;
  subgoal: number;
  color?: never;
  metricOnly?: never;
  inverted?: never;
}

interface EzProgressCustomProps extends EzBasicProgressProps {
  color: EzProgressColors;
  goal?: never;
  subgoal?: never;
  metricOnly?: never;
  inverted?: never;
}

export type EzProgressProps = EzProgressGoalProps | EzProgressCustomProps | EzProgressMetricProps;
