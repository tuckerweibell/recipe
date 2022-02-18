export type Ref = HTMLDivElement;

type EzProgressColors = 'red' | 'yellow' | 'green' | 'blue';

interface EzBasicProgressProps {
  value?: number;
  label: string;
}

interface EzProgressGoalProps extends EzBasicProgressProps {
  goal: number;
  subgoal: number;
  color?: never;
}

interface EzProgressCustomProps extends EzBasicProgressProps {
  color: EzProgressColors;
  goal?: never;
  subgoal?: never;
}

export type EzProgressProps = EzProgressGoalProps | EzProgressCustomProps;
