import {EzThemeColors} from '../../themes';

export type Ref = HTMLDivElement;

type Datum = {
  x: string | number | string[] | (() => void);
  y: string | number | string[] | (() => void);
};

type AxisLabelValue = string | number | string[] | (() => void);

export interface EzLineChartProps {
  idPrefix?: string | number;
  data: Datum[];
  description: string;
  dependentAxisLabelFormatter?: (t: AxisLabelValue) => void;
  dependentAxisLabelValues?: AxisLabelValue[];
  independentAxisLabelFormatter?: (t: AxisLabelValue) => void;
  independentAxisLabelValues?: AxisLabelValue[];
  lineColor?: EzThemeColors;
  title: string;
}
