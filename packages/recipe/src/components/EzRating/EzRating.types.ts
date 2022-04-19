import {EzIconTypes, EzIconSizes, EzIconColors} from '../EzIcon/EzIcon.types';

export type Ref = HTMLDivElement;

export type EzRatingColors = EzIconColors;
export type EzRatingSizes = EzIconSizes;

export interface EzRatingProps {
  max: number;
  value: number;
  label: string;
  emptyIcon: EzIconTypes;
  halfIcon: EzIconTypes;
  fullIcon: EzIconTypes;
  color?: EzRatingColors;
  size?: EzRatingSizes;
}
